import { ACTIONS } from "../actions/actions";

const initialState = {
    user: {},
    isLoggedIn: false,
    isLoading: false,
    error: null
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_USER:
      return {};
    case ACTIONS.GET_USER:
      return {};
    case ACTIONS.UPDATE_USER:
      return {};
    case ACTIONS.DELETE_USER:
      return {};
    default:
      return { state };
  }
};
