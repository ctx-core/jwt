import type { error_ctx_type } from '@ctx-core/error'
export interface jwt_error_ctx_type extends error_ctx_type {
	jwt_token:string
}
