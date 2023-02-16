import { bad_credentials__throw } from '@ctx-core/error'
import { jwt__expiration__is_valid_ } from '../jwt__expiration__is_valid_/index.js'
/**
 * @param {string}jwt_token
 */
export function jwt__expiration__validate(jwt_token) {
	if (!jwt__expiration__is_valid_(jwt_token)) {
		bad_credentials__throw({
			data: { jwt_token },
			error_message: 'Session Expired'
		})
	}
}
export {
	jwt__expiration__validate as validate_current_jwt,
	jwt__expiration__validate as validate__current__jwt,
}
