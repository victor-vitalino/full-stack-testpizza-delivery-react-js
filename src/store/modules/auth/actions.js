export function LoginRequest({ email, password }) {
  return {
    type: "@auth/LOGIN_REQUEST",
    payload: {
      email,
      password,
    },
  };
}

export function LoginRequestSuccess(data) {
  return {
    type: "@auth/LOGIN_SUCCESS",
    payload: data,
  };
}

export function CreateNewUserRequest({ email, password }) {
  return {
    type: "@auth/CREATE_USER_REQUEST",
    payload: {
      email,
      password,
    },
  };
}
export function LogoutRequest() {
  return {
    type: "@auth/LOGOUT_REQUEST",
  };
}
export function LogoutSuccess() {
  return {
    type: "@auth/LOGOUT_SUCCESS",
  };
}
