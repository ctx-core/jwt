export function _header_authorization_jwt_token(authorization) {
	const authorization_a1 = authorization && authorization.split(/^Bearer */)
	return authorization_a1 && authorization_a1[1]
}
export {
	_header_authorization_jwt_token as _jwt_token__authorization__header
}