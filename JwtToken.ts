import type { maybe, nullsy } from '@ctx-core/function'
import type { error_ctx_type } from '@ctx-core/error'
export type Token = {
	error?:maybe<error_ctx_type, nullsy>
	email?:string
	id_token?:string
}
