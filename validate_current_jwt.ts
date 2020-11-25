import { throw_bad_credentials } from '@ctx-core/error'
import type { jwt_error_ctx_type } from './jwt_error_ctx_type'
import { _jwt_token_exp } from './_jwt_token_exp'
export function validate_current_jwt(jwt_token) {
	const jwt_token_exp = _jwt_token_exp(jwt_token)
	const jwt_token_exp_millis = jwt_token_exp * 1000
	if (Date.now() > jwt_token_exp_millis) {
		throw_bad_credentials({
			jwt_token,
			error_message: 'Session Expired'
		} as jwt_error_ctx_type)
	}
}
export const validate__current__jwt = validate_current_jwt
