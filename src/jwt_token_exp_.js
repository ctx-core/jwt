import { atob_ } from '@ctx-core/atob';
export function jwt_token_exp_(jwt_token) {
    const atob = atob_();
    const jwt_data = jwt_token && JSON.parse(atob(jwt_token.split('.')[1]));
    return jwt_data === null || jwt_data === void 0 ? void 0 : jwt_data.exp;
}
export { jwt_token_exp_ as _jwt_token_exp, jwt_token_exp_ as _exp__jwt_token, };
//# sourceMappingURL=src/jwt_token_exp_.js.map