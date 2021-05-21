import type { maybe, nullish } from '@ctx-core/function';
import type { error_Ctx } from '@ctx-core/error';
export interface Token {
    access_token: string;
    token_type: string;
    id_token?: string;
    email?: string;
    error?: maybe<error_Ctx, nullish>;
}
