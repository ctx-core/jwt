import type { error_ctx_I } from '@ctx-core/error'
export interface jwt_error_ctx_type extends error_ctx_I {
	jwt_token:string
}
