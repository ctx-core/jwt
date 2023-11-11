/**
 * @param {string}authorization
 * @return {string}
 */
export function authorization__header__jwt_token_(authorization) {
	const authorization_a = authorization?.split(/^Bearer */)
	return authorization_a ? authorization_a[1] : null
}
export {
	authorization__header__jwt_token_ as header_authorization_jwt_token_,
	authorization__header__jwt_token_ as _header_authorization_jwt_token,
	authorization__header__jwt_token_ as _jwt_token__authorization__header,
}
