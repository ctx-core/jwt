import type { error_o_T } from '@ctx-core/error'
import { type nullish } from '@ctx-core/function'
export interface JwtToken {
	access_token:string
	token_type:string
	id_token?:string
	email?:string
	error?:error_o_T|nullish
	expires_in?:number
}
export type Token = JwtToken
