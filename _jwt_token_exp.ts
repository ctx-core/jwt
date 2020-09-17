import { _atob } from '@ctx-core/atob'
export function _jwt_token_exp(jwt_token) {
	const atob = _atob()
	const jwt_data = jwt_token && JSON.parse(atob(jwt_token.split('.')[1]))
	return jwt_data && jwt_data.exp
}
export const _exp__jwt_token = _jwt_token_exp
