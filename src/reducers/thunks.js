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
    await fetch(`http://localhost:8000/api/usuarios/${userInfo.id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });
  };
};

export { 
    createUser, 
    updateUser,
 };
