import type { maybe, nullish } from '@ctx-core/function'
import type { error_ctx_type } from '@ctx-core/error'
export interface Token {
	error?:maybe<error_ctx_type, nullish>
	email?:string
	id_token?:string
}
