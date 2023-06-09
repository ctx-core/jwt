import { jwt_token_exp_ } from '../jwt_token_exp_/index.js'
/**
 * @param {string}jwt_token
 * @returns {boolean}
 */
export function jwt__expiration__is_valid_(jwt_token) {
	const jwt_token_exp = jwt_token_exp_(jwt_token)
	if (jwt_token_exp === null) return true
	const jwt_token_exp_millis = jwt_token_exp * 1000
	return Date.now() <= jwt_token_exp_millis
}
