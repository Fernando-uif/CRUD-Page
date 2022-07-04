import { useEffect } from "react";
import Swal from "sweetalert2";

import { justNumbers } from "../../helpers/justNumbers";
import { useForm } from "../../hooks/useForm";
import "../../sass/layout/createForm.scss";
import { emailChecker } from "../../helpers/reviewEmail";

export const CreateScreen = () => {
  const [values, handleInputChange, handleInputReset] = useForm({
    name: "",
    last_name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    birthday: "",
    genre: "",
  });

  const handleSubmit = () => {
    const { name, email, password, phone } = values;
    if (name === "" || email === "" || password === "" || phone === "") {
      Swal.fire({
        title: "Error",
        text: "Todos los campos son obligatorios",
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: "#726D84",

      });
      return;
    }
    //TODO Hacer peticion fetch para crear usuario
  };

  const correoExiste = (e) => {
    !emailChecker.test(e.target.value)
      ? Swal.fire({
          title: "Invalid email",
          text: "Please, enter a valid email",
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#726D84",
        }) && handleInputReset({ name: "email" })
      : null;
  };

  return (
    <>
      <section className="createCard">
        <h1>create</h1>
        <form className="createCard__form">
          <div>
            <label htmlFor="name">name</label>
            <input
              autoComplete="off"
              className="createCard__input"
              id="name"
              name="name"
              onChange={handleInputChange}
              type="text"
              value={values.name}
            />
          </div>
          <div>
            <label htmlFor="lastName">last name</label>
            <input
              autoComplete="off"
              className="createCard__input"
              id="lastName"
              name="last_name"
              onChange={handleInputChange}
              value={values.last_name}
            />
          </div>
          <div>
            <label htmlFor="email">email</label>
            <input
              autoComplete="off"
              className="createCard__input"
              id="email"
              name="email"
              onChange={handleInputChange}
              type="text"
              onBlur={correoExiste}
              value={values.email}
            />
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input
              autoComplete="off"
              className="createCard__input"
              id="password"
              name="password"
              onChange={handleInputChange}
              type="password"
              value={values.password}
            />
          </div>
          <div>
            <label htmlFor="phone">phone</label>
            <input
              autoComplete="off"
              className="createCard__input"
              id="phone"
              maxLength="10"
              name="phone"
              onChange={handleInputChange}
              onKeyPress={justNumbers}
              type="tel"
              value={values.phone}
            />
          </div>
          <div>
            <label htmlFor="addres">address</label>
            <input
              name="address"
              onChange={handleInputChange}
              className="createCard__input"
              autoComplete="off"
              value={values.address}
              id="addres"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="date">birthday</label>
            <input
              onChange={handleInputChange}
              name="birthday"
              value={values.birthday}
              className="createCard__input"
              autoComplete="off"
              id="date"
              type="date"
            />
          </div>
          <div>
            <label htmlFor="genre">genre</label>
            <select
              className="createCard__input"
              id="genre"
              name="genre"
              onChange={handleInputChange}
              value={values.genre}
            >
              <option value="" disabled>
                Select your option
              </option>
              <option value="male">Male</option>
              <option value="female">female</option>
            </select>
          </div>
        </form>
      </section>
      <div className="createCard__sendButton">
        <span onClick={handleSubmit}>Send</span>
      </div>
    </>
  );
};

