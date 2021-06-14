import { throw_bad_credentials } from '@ctx-core/error';
import { jwt_token_exp_ } from './jwt_token_exp_';
export function validate_current_jwt(jwt_token) {
    const jwt_token_exp = jwt_token_exp_(jwt_token);
    const jwt_token_exp_millis = jwt_token_exp * 1000;
    if (Date.now() > jwt_token_exp_millis) {
        throw_bad_credentials({
            jwt_token,
            error_message: 'Session Expired'
        });
    }
}
export { validate_current_jwt as validate__current__jwt };
//# sourceMappingURL=src/validate_current_jwt.js.map