import { ACTIONS } from "../actions/actions";

const initialState = {
  users: [],
  user: [],
  isResultsActive: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.READ_USER:
      return {
        ...state,
        users: action.payload,
      };
    case ACTIONS.UPDATE_USER:
      return {
        ...state,
        user: action.payload,
      };

    case ACTIONS.ACTIVE_RESULTS:
      return {
        ...state,
        isResultsActive: action.payload,
      };

    default:
      return { state };
  }
};
