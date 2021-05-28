import type { nullish } from '@ctx-core/function'
import { throw_bad_credentials } from '@ctx-core/error'
import type { jwt_error_ctx_I } from './jwt_error_ctx_I'
import { _jwt_token_exp } from './_jwt_token_exp'
export function validate_current_jwt(jwt_token:string|nullish) {
	const jwt_token_exp = _jwt_token_exp(jwt_token)
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
