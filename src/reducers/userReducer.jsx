import { ACTIONS } from "../actions/actions";

const initialState = {
  users: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_USER:
      return {};
    case ACTIONS.READ_USER:
      return {};
    case ACTIONS.UPDATE_USER:
      return {};
    case ACTIONS.DELETE_USER:
      return {};
    default:
      return { state };
  }
};

