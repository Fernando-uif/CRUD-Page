import { ACTIONS } from "../actions/actions";

const initialState = {
  users: [],
  user:[]
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_USER:
      return {};
    case ACTIONS.READ_USER:
      return {
        users: action.payload,
      };
    case ACTIONS.UPDATE_USER:
      return {
        ...state,
        user: action.payload
      };
    case ACTIONS.DELETE_USER:
      return {};
    default:
      return { state };
  }
};
