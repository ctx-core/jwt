import { atob_ } from '@ctx-core/atob'
/**
 * @param {string|nullish}jwt_token
 * @return {number|null}
 */
export function jwt_token_exp_(jwt_token) {
	const atob = atob_()
	if (!jwt_token) return null
	const jwt_data = JSON.parse(atob(jwt_token.split('.')[1]))
	return jwt_data?.exp
}
export { jwt_token_exp_ as _jwt_token_exp, jwt_token_exp_ as _exp__jwt_token, }
