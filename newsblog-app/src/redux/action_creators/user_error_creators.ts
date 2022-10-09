import { SIGN_UP, SIGN_UP_ERROR } from "../action_types";

const signUpError = (errors: string[]) => ({
    type: SIGN_UP_ERROR,
    errors,
});

export { signUpError };