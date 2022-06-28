import type { error_ctx_I } from '@ctx-core/error'
import { type nullish } from '@ctx-core/function'
export interface JwtToken {
	access_token:string
	token_type:string
	id_token?:string
	email?:string
	error?:error_ctx_I|nullish
	expires_in?:number
}
export type Token = JwtToken
