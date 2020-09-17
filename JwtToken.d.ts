import type { maybe, nullsy } from '@ctx-core/function';
import type { error_ctx_type } from '@ctx-core/error';
export declare type Token = {
    error?: maybe<error_ctx_type, nullsy>;
    id_token?: string;
};
