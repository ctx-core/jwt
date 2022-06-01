import { atob_ } from '@ctx-core/atob'
/**
 * @param {string|nullish}jwt_token
 * @return {number|null}
 */
export function jwt_token_exp_(jwt_token) {
	const atob = atob_()
	if (!jwt_token) return null
	const atob_jwt_data = jwt_token.split('.')[1]
	if (!atob_jwt_data) return null
	const jwt_data = JSON.parse(atob(atob_jwt_data))
	return jwt_data?.exp
}
export { jwt_token_exp_ as _jwt_token_exp, jwt_token_exp_ as _exp__jwt_token, }
