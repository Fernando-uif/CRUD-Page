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
        user: action.payload,
      };
    case ACTIONS.READ_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case ACTIONS.UPDATE_USER:
      //TODO Estamos afectando al state entonces remueve al los elementos que tenemos en el state
      console.log({ ...state, user: action.payload[0] }, "lo que se regresa");
      console.log(action.payload , "tenemos el payload");

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
