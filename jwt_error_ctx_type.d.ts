import type { error_ctx_type } from '@ctx-core/error';
export declare type jwt_error_ctx_type = error_ctx_type & {
    jwt_token: string;
};
