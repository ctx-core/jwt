import type { error_ctx_T } from '@ctx-core/error'
export interface jwt_error_ctx_type extends error_ctx_T {
	jwt_token:string
}
