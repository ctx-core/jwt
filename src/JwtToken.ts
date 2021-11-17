import type { error_ctx_I } from '@ctx-core/error'
import type { maybe, nullish } from '@ctx-core/function'
export interface Token {
	access_token: string
	token_type: string
	id_token?:string
	email?:string
	error?:maybe<error_ctx_I, nullish>
}
