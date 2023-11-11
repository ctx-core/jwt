import { jwt__expiration__error_ } from '../jwt__expiration__error_/index.js'
/**
 * @param {string}jwt_token
 */
export function jwt__expiration__validate(jwt_token) {
	const jwt__expiration__error = jwt__expiration__error_(jwt_token)
	if (jwt__expiration__error) throw jwt__expiration__error
}
export {
	jwt__expiration__validate as validate_current_jwt,
	jwt__expiration__validate as validate__current__jwt,
}
