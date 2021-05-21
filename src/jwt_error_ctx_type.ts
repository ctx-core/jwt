import type { error_Ctx } from '@ctx-core/error'
export interface jwt_error_ctx_type extends error_Ctx {
	jwt_token:string
}
