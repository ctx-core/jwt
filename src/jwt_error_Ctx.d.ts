import type { error_Ctx } from '@ctx-core/error';
export interface jwt_error_Ctx extends error_Ctx {
    jwt_token: string;
}
