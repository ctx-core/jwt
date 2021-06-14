export function header_authorization_jwt_token_(authorization) {
    const authorization_a = authorization && authorization.split(/^Bearer */);
    return authorization_a ? authorization_a[1] : undefined;
}
export { header_authorization_jwt_token_ as _header_authorization_jwt_token, header_authorization_jwt_token_ as _jwt_token__authorization__header, };
//# sourceMappingURL=src/header_authorization_jwt_token_.js.map