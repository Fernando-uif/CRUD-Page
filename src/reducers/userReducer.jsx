import { ACTIONS } from "../actions/actions";

const initialState = {
  user: {},
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_USER:
      console.log("Entrando aqui");

      return {
        ...state,
        
      };
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

export const createUser = (userInfo = {}) => {
  console.log(userInfo, "User info");

  return async (dispatch) => {
    const respuesta = await fetch(`http://localhost:8000/api/usuarios/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });
    console.log(await respuesta.json(), "Tenemos respuesta");
  };
};
