import { throw_bad_credentials } from '@ctx-core/error'
import type { nullish } from '@ctx-core/function'
import type { jwt_error_ctx_I } from './jwt_error_ctx_I.js'
import { jwt_token_exp_ } from './jwt_token_exp_.js'
export function validate_current_jwt(jwt_token:string|nullish):void {
	const jwt_token_exp = jwt_token_exp_(jwt_token)
	const jwt_token_exp_millis = jwt_token_exp * 1000
	if (Date.now() > jwt_token_exp_millis) {
		throw_bad_credentials({
			jwt_token,
			error_message: 'Session Expired'
		} as jwt_error_ctx_I)
	}
}
export {
	validate_current_jwt as validate__current__jwt
}
