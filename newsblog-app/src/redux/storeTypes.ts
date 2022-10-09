import { UserErrorState } from "../types/errortypes";
import { UserState } from "../types/userTypes";

type StoreState = {
    user: UserState,
    signUpErrors: UserErrorState,
};

export type { StoreState };