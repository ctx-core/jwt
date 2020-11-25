import type { error_ctx_type } from '@ctx-core/error'
export interface jwt_error_ctx_interface {
	jwt_token:string
}
export type jwt_error_ctx_type =
	error_ctx_type
	&jwt_error_ctx_interface
