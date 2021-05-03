import { fork, takeEvery, call, put, all } from "@redux-saga/core/effects";
import { setUserAC, SIGN_IN_REQUEST, SIGN_OUT_REQUEST, SIGN_UP_REQUEST } from "./UserRedux";
import { getCurrentUser, signIn, signOut, signUp, updateUser } from '../API/Firebase';
function* signUpAndUpdateUser(email, password, displayName) {
    try {
        // Önce signUp yaptırdık
        yield call(signUp, email, password);
        // Sonra kullanıcı adını Firebase'de güncelledik
        yield call(updateUser, displayName);

        // Şu anki kullanıcı bilgisini Firebase'den aldık
        const currentUser = getCurrentUser();
        // Şu anki kullanıcıyı redux'a verdik
        yield put(setUserAC(currentUser));
    } catch(error) {
        console.log('sign  up and update user ... ', error);
    }
}

function* workerSignUp(action) {
    const { email, password, displayname } = action.payload;

    try {
        yield call(signUpAndUpdateUser, email, password, displayname);
    } catch (error) {
        console.log('SignUp ... ', error)
    }
}

function* wathcerSignUpRequest() {
    yield takeEvery(SIGN_UP_REQUEST, workerSignUp)
}

function* workerSignIn(action) {
    const { email, password } = action.payload;
    try {
        yield call(signIn, email, password);
        const currentUser = getCurrentUser();
        yield put(setUserAC(currentUser));
    } catch (error) {
        console.log('sign in worker ... ', error);
    }
}

function* watcherSignInRequest() {
    yield takeEvery(SIGN_IN_REQUEST, workerSignIn);
}

function* workerSignOut() {
    try {
        yield call(signOut);
        yield put(setUserAC(null));
    } catch (error) {
        console.log('sign out worker ... ', error);
    }
}
function* watcherSignOutRequest(){
    yield takeEvery(SIGN_OUT_REQUEST, workerSignOut);
}
export const userSagas = [
    fork(wathcerSignUpRequest),
    fork(watcherSignInRequest),
    fork(watcherSignOutRequest),
]