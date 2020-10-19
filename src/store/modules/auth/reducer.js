import produce from "immer";

const INITIAL_STATE = {
  user: {},
  admin: {
    admin: false,
    avatar: "",
  },
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@auth/LOGIN_SUCCESS":
      return produce(state, (draft) => {
        const { user, admin } = action.payload;

        draft.user = user;
        draft.admin = { ...admin };
      });
    case "@auth/UPDATE_PROFILE_SUCCESS":
      return produce(state, (draft) => {
        draft.admin.avatar = action.payload;
      });

    case "@auth/LOGOUT_SUCCESS":
      return INITIAL_STATE;
    default:
      return state;
  }
}
