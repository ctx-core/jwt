import { bad_credentials__throw } from '@ctx-core/error'
import { jwt_token_exp_ } from '../jwt_token_exp_/index.js'
/**
 * @param {string}jwt_token
 */
export function jwt__expiration__validate(jwt_token) {
	const jwt_token_exp = jwt_token_exp_(jwt_token)
	if (jwt_token_exp === null) return
	const jwt_token_exp_millis = jwt_token_exp * 1000
	if (Date.now() > jwt_token_exp_millis) {
		bad_credentials__throw({
			jwt_token,
			error_message: 'Session Expired'
		})
	}
}
export {
	jwt__expiration__validate as validate_current_jwt,
	jwt__expiration__validate as validate__current__jwt,
}
