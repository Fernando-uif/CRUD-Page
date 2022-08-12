import { ACTIONS } from "../actions/actions";

const createUser = (userInfo = {}) => {
  return async () => {
    await fetch(`http://localhost:8000/api/usuarios/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });
  };
};

const updateUser = (userInfo = {}) => {
  return async () => {
    await fetch(`http://localhost:8000/api/usuarios/${userInfo.user_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });
  };
};
const deleteUser = (userInfo = {}) => {
  return async () => {
    await fetch(`http://localhost:8000/api/usuarios/${userInfo.user_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
};

const readUsers = () => {
  console.log('read users');
  return async (dispatch) => {
    const answer = await fetch(`http://localhost:8000/api/usuarios/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const users = await answer.json();
    dispatch({ type: ACTIONS.READ_USERS, payload: users });
    console.log(users);
  };
};
const readUser = (userInfo = {}) => {
  console.log('Entrando a read user');
  return async (dispatch) => {
    const answer = await fetch(`http://localhost:8000/api/usuarios/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const users = await answer.json();
    const user = users.filter(
      (user) =>
        user.user_id === +userInfo.user_id ||
        user.user_name === userInfo.user_name ||
        user.email === userInfo.email ||
        user.phone === userInfo.phone
    );
    dispatch({ type: ACTIONS.READ_USER, payload: user });
  };
};

export { createUser, updateUser, readUser, readUsers, deleteUser };
