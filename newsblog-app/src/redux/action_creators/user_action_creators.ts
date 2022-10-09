import { User } from "../../types/userTypes";
import { SIGN_UP, USER_AUTHORIZE } from "../action_types";
import { put, takeEvery } from "redux-saga/effects";
import { signUpError } from "./user_error_creators";

// вызывается по кнопке signup - прилетает username, почта и пароль для регистрации нового пользователя
const signup = (userInfo: User) => ({
    type: SIGN_UP,
    userInfo
});

const userAuthorize = (user: User) => ({
    type: USER_AUTHORIZE,
    user
});

// при вызове крейтера signup делается запрос на получение ссылки для активации нового пользователя
function* fetchSignUp(action: any): any {
    try {
        const { userInfo } = action;
        const data: Response = yield fetch('https://studapi.teachmeskills.by/auth/users/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(userInfo)
        });
        //const response = yield data.json();
 
        if (data.status < 200 || data.status >= 300) {
            throw data;
        }
    } catch(error: any) {
        if (error.status === 400) {
            const errResponse = yield error.json();
            const errors: string[] = [];
            for (const key in errResponse) {
                yield errResponse[key].map((err: any) => errors.push(err))
            }
            console.log('errors =', errors);
            yield put(signUpError(errors));
       } else {
            yield put(signUpError(['Error']));
       }
    }
};

function* watcherUser() {
    yield takeEvery(SIGN_UP, fetchSignUp);
};

export { signup, userAuthorize, watcherUser };