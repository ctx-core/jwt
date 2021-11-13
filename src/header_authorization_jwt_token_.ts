import type { nullish } from '@ctx-core/function'
export function header_authorization_jwt_token_(authorization:string|nullish):string|undefined {
	const authorization_a = authorization?.split(/^Bearer */)
	return authorization_a ? authorization_a[1] : undefined
}
export {
	header_authorization_jwt_token_ as _header_authorization_jwt_token,
	header_authorization_jwt_token_ as _jwt_token__authorization__header,
}
