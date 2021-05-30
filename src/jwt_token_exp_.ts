import type { nullish } from '@ctx-core/function'
import { _atob } from '@ctx-core/atob'
export function jwt_token_exp_(jwt_token:string|nullish) {
	const atob = _atob()
	const jwt_data = jwt_token && JSON.parse(atob(jwt_token.split('.')[1]))
	return jwt_data && jwt_data.exp
}
export {
	jwt_token_exp_ as _jwt_token_exp,
	jwt_token_exp_ as _exp__jwt_token,
}
