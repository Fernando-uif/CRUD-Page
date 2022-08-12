import { ACTIONS } from "../actions/actions";

const initialState = {
  users: [],
  user: [],
  isResultsActive: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.READ_USER:
      
      console.log(action.payload,'lo que tenemos del payload');
      return {
        
        user: action.payload,
      };
      case ACTIONS.READ_USERS:
        console.log(action.payload,'lo que tenemos del payload2');
      return {
        
        users: action.payload,
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
