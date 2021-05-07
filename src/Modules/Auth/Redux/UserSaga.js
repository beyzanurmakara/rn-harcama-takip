import { fork, takeEvery, call, put, all } from "@redux-saga/core/effects";
import { setUserAC, SIGN_IN_REQUEST, SIGN_OUT_REQUEST, SIGN_UP_REQUEST } from "./UserRedux";
import { getCurrentUser, signIn, signOut, signUp, updateUser } from '../API/Firebase';
import { setIsLoadingAC } from "../../Loading/LoadingRedux";
import { setErrorCodeAC } from "../../Error/ErrorRedux";
import { Alert } from "react-native";
import {  useLocalization, errorList } from "../../Localization";

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
        console.log(error);
    }
}

function* workerSignUp(action) {
    const { email, password, displayName } = action.payload;
    //console.log('displayName in worker SignUp -->',displayName);
    try {
        yield put(setIsLoadingAC(true));

        yield call(signUp,email,password);
        yield call(updateUser,displayName);

        const currentUser=getCurrentUser();
        yield put(setUserAC(currentUser));

    } catch (error) {
        console.log('worker sign up => ',error.code);
        yield put(setErrorCodeAC(error.code));
    } finally {
        yield put(setIsLoadingAC(false));
    }
}

function* wathcerSignUpRequest() {
    yield takeEvery(SIGN_UP_REQUEST, workerSignUp)
}

function* workerSignIn(action) {
    //
    const { email, password } = action.payload;
    try {
        yield put(setIsLoadingAC(true));
        yield call(signIn, email, password);
        const currentUser = getCurrentUser();
        yield put(setUserAC(currentUser));
    } catch (error) {
        console.log('worker sign in => ',error.code);
        yield put(setErrorCodeAC(error.code));
        
    } finally {
        yield put(setIsLoadingAC(false));
    }
}

function* watcherSignInRequest() {
    yield takeEvery(SIGN_IN_REQUEST, workerSignIn);
}

function* workerSignOut() {
    try {
        yield put(setIsLoadingAC(true));
        yield call(signOut);
        yield put(setUserAC(null));
    } catch (error) {
        yield put(setErrorCodeAC(error.code));
    } finally {
        yield put(setIsLoadingAC(false));
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