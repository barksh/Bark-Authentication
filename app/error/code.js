"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERROR_CODE = void 0;
var ERROR_CODE;
(function (ERROR_CODE) {
    ERROR_CODE[ERROR_CODE["INVALID_IDENTIFIER_1"] = 4001450] = "INVALID_IDENTIFIER_1";
    ERROR_CODE[ERROR_CODE["INVALID_PASSWORD_1"] = 4001550] = "INVALID_PASSWORD_1";
    ERROR_CODE[ERROR_CODE["INVALID_DOMAIN_1"] = 4001800] = "INVALID_DOMAIN_1";
    ERROR_CODE[ERROR_CODE["INVALID_INQUIRY_ACTION_1"] = 4001910] = "INVALID_INQUIRY_ACTION_1";
    ERROR_CODE[ERROR_CODE["INVALID_TOKEN"] = 4034500] = "INVALID_TOKEN";
    ERROR_CODE[ERROR_CODE["INQUIRY_NOT_REALIZED_1"] = 4035010] = "INQUIRY_NOT_REALIZED_1";
    ERROR_CODE[ERROR_CODE["CANNOT_REALIZE_INQUIRY_WITH_AUTOMATION_ACCOUNT_1"] = 4036010] = "CANNOT_REALIZE_INQUIRY_WITH_AUTOMATION_ACCOUNT_1";
    ERROR_CODE[ERROR_CODE["CANNOT_REFRESH_TOKEN_WITH_AUTOMATION_ACCOUNT_1"] = 4036011] = "CANNOT_REFRESH_TOKEN_WITH_AUTOMATION_ACCOUNT_1";
    ERROR_CODE[ERROR_CODE["ACCOUNT_NOT_FOUND_OR_INCORRECT_PASSWORD_1"] = 4041000] = "ACCOUNT_NOT_FOUND_OR_INCORRECT_PASSWORD_1";
    ERROR_CODE[ERROR_CODE["ACCOUNT_NOT_FOUND_1"] = 4042010] = "ACCOUNT_NOT_FOUND_1";
    ERROR_CODE[ERROR_CODE["INQUIRY_NOT_FOUND_BY_EXPOSURE_KEY_1"] = 4042021] = "INQUIRY_NOT_FOUND_BY_EXPOSURE_KEY_1";
    ERROR_CODE[ERROR_CODE["INQUIRY_NOT_FOUND_BY_HIDDEN_KEY_1"] = 4042022] = "INQUIRY_NOT_FOUND_BY_HIDDEN_KEY_1";
    ERROR_CODE[ERROR_CODE["PREFERENCE_NOT_FOUND_1"] = 4042030] = "PREFERENCE_NOT_FOUND_1";
    ERROR_CODE[ERROR_CODE["RECORD_NOT_FOUND_1"] = 4042040] = "RECORD_NOT_FOUND_1";
    ERROR_CODE[ERROR_CODE["REFRESH_TOKEN_NOT_FOUND_1"] = 4042050] = "REFRESH_TOKEN_NOT_FOUND_1";
    ERROR_CODE[ERROR_CODE["SECRET_NOT_FOUND_1"] = 4042060] = "SECRET_NOT_FOUND_1";
    ERROR_CODE[ERROR_CODE["PUBLIC_REGISTER_IS_NOT_ALLOWED"] = 4051010] = "PUBLIC_REGISTER_IS_NOT_ALLOWED";
    ERROR_CODE[ERROR_CODE["APPLICATION_NOT_INITIALIZED"] = 5001000] = "APPLICATION_NOT_INITIALIZED";
    ERROR_CODE[ERROR_CODE["ENVIRONMENT_VARIABLE_REQUIRED_BUT_NOT_FOUND_1"] = 5001010] = "ENVIRONMENT_VARIABLE_REQUIRED_BUT_NOT_FOUND_1";
    ERROR_CODE[ERROR_CODE["APPLICATION_INITIALIZED_WITH_INFO_MISSING_1"] = 5002050] = "APPLICATION_INITIALIZED_WITH_INFO_MISSING_1";
    ERROR_CODE[ERROR_CODE["CANNOT_GENERATE_AUTOMATION_TOKEN_BY_REFRESH_TOKEN_1"] = 5003050] = "CANNOT_GENERATE_AUTOMATION_TOKEN_BY_REFRESH_TOKEN_1";
    ERROR_CODE[ERROR_CODE["CANNOT_GENERATE_USER_AUTHENTICATION_TOKEN_BY_ACCOUNT_1"] = 5003060] = "CANNOT_GENERATE_USER_AUTHENTICATION_TOKEN_BY_ACCOUNT_1";
})(ERROR_CODE = exports.ERROR_CODE || (exports.ERROR_CODE = {}));