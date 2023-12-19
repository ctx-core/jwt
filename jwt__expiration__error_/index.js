/// <reference types="ctx-core" />
import { bad_credentials_error_ } from 'ctx-core/error'
import { jwt__expiration__is_valid_ } from '../jwt__expiration__is_valid_/index.js'
/**
 * @param {string}jwt_token
 * @returns {BadCredentialsError}
 */
export function jwt__expiration__error_(jwt_token) {
	return (
		jwt__expiration__is_valid_(jwt_token)
			? null
			: bad_credentials_error_('Session Expired', {
				data: { jwt_token },
			}))
}
