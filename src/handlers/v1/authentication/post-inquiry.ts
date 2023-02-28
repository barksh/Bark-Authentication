/**
 * @author WMXPY
 * @namespace Handlers_Authentication
 * @description Inquiry
 */

import { createSucceedLambdaResponse } from "@sudoo/lambda";
import { LambdaVerifier, VerifiedAPIGatewayProxyEvent } from "@sudoo/lambda-verify";
import { HTTP_RESPONSE_CODE } from "@sudoo/magic";
import { createStrictMapPattern, createStringPattern } from "@sudoo/pattern";
import { APIGatewayProxyHandler, APIGatewayProxyResult, Context } from "aws-lambda";
import { generateInquiryToken } from "../../../actions/token/inquiry";
import { AccountEmptySymbol, getAccountByIdentifier } from "../../../database/controller/account";
import { IAccountModel } from "../../../database/model/account";
import { ERROR_CODE } from "../../../error/code";
import { panic } from "../../../error/panic";
import { dnsLookupAuthModuleTxt } from "../../../util/network/dns/txt";
import { createErroredLambdaResponse } from "../../common/response";
import { wrapHandler } from "../../common/setup";

const verifier: LambdaVerifier = LambdaVerifier.create()
    .setBodyPattern(
        createStrictMapPattern({
            domain: createStringPattern(),
            callbackUrl: createStringPattern(),
            identifier: createStringPattern(),
            password: createStringPattern(),
        }),
    );

type Body = {
    readonly domain: string;
    readonly callbackUrl: string;
    readonly identifier: string;
    readonly password: string;
};

export const authenticationPostInquiryHandler: APIGatewayProxyHandler = wrapHandler(verifier,
    async (
        event: VerifiedAPIGatewayProxyEvent,
        _context: Context,
    ): Promise<APIGatewayProxyResult> => {

        const body: Body = event.verifiedBody;

        const availableCallbackUrls: string[] = await dnsLookupAuthModuleTxt(body.domain);
        if (!availableCallbackUrls.includes(body.callbackUrl)) {
            return createErroredLambdaResponse(
                HTTP_RESPONSE_CODE.NOT_FOUND,
                panic.code(ERROR_CODE.INVALID_CALLBACK_URL_1, body.callbackUrl),
            );
        }

        const account: IAccountModel | typeof AccountEmptySymbol = await getAccountByIdentifier(body.identifier);

        if (account === AccountEmptySymbol) {
            return createErroredLambdaResponse(
                HTTP_RESPONSE_CODE.NOT_FOUND,
                panic.code(ERROR_CODE.ACCOUNT_NOT_FOUND_OR_INCORRECT_PASSWORD_1, body.identifier)
            );
        }

        const passwordVerifyResult: boolean = account.verifyPassword(body.password);

        if (!passwordVerifyResult) {
            return createErroredLambdaResponse(
                HTTP_RESPONSE_CODE.NOT_FOUND,
                panic.code(ERROR_CODE.ACCOUNT_NOT_FOUND_OR_INCORRECT_PASSWORD_1, body.identifier)
            );
        }

        const inquiryToken: string = await generateInquiryToken({
            accountIdentifier: account.identifier,
            domain: body.domain,
        });

        return createSucceedLambdaResponse({
            token: inquiryToken,
        });
    },
);
