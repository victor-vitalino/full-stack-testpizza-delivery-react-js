import { call,  put, all, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";

import firebase from "../../../config/FirebaseConfig";

import {
  LoginRequestSuccess,
  LogoutSuccess,
  updateProfileSuccess,
} from "./actions";

function* loginUser({ payload }) {
  const { email, password } = payload;

  const response = yield firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((error) => console.tron(error));

  if (response.user) {
    console.tron.log(response);
    const db = firebase.firestore();
    const Data = yield db
      .collection("users")
      .doc(response.user.uid)
      .get()
      .then((doc) => {
        if (!doc.exists) {
          console.log("No such document!");
        } else {
          const admin = doc.data();
          return admin;
        }
      });

    yield put(LoginRequestSuccess({ user: response.user, admin: Data }));
    toast.success("Logado Com sucesso");
  } else {
    toast.warn("Usuario inexistente!");
  }
}
function* logout() {
  const response = yield firebase.auth().signOut();
  console.tron.log(response);

  yield put(LogoutSuccess());
  toast.info("Tchau tchau");
}

function* createNewUser({ payload }) {
  const { email, password } = payload;

  const response = yield firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);
  if (response.user) {
    const db = firebase.firestore();
    yield db.collection("users").doc(response.user.uid).set({
      admin: false,
      email: email,
    });

    toast.success("Usuario criado com sucesso");
  } else {
    toast.warn("Usuario inexistente!");
  }
}

function* updateProfileRequest({ payload }) {
  const { url, uid } = payload;
  yield firebase.firestore().collection("users").doc(uid).update({
    avatar: url,
  });
  yield call(updateProfileSuccess(payload));
}

export default all([
  takeLatest("@auth/LOGIN_REQUEST", loginUser),
  takeLatest("@auth/LOGOUT_REQUEST", logout),
  takeLatest("@auth/CREATE_USER_REQUEST", createNewUser),
  takeLatest("@auth/UPDATE_PROFILE_REQUEST", updateProfileRequest),
]);
