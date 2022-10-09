import { UserErrorState } from "../../types/errortypes";
import { SIGN_UP_ERROR } from "../action_types";
import { StoreState } from "../storeTypes";

const initialState = {
    signUpErrors: [],   
};

export default (state: UserErrorState = initialState, action: any) => {
    switch (action.type) {
        case SIGN_UP_ERROR :
            console.log('reducer:', action.errors);
            return (
                {
                    ...state,
                    signUpErrors: action.errors
                }
            )
        default: 
            return state;
    }
}