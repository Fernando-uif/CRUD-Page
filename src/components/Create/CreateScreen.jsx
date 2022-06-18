import React from "react";
import "../../sass/layout/createForm.scss";
import "../../sass/components/buttons.scss";
export const CreateScreen = () => {
  return (
    <>
      <section className="createCard">
        <form action="" className="createCard__form">
          <div>
            <label htmlFor="nombre">nombre</label>
            <input className="createCard__input" id="nombre" type="text" />
          </div>
          <div>
            <label htmlFor="lastName">last name</label>
            <input className="createCard__input" id="lastName" type="text" />
          </div>
          <div>
            <label htmlFor="email">email</label>
            <input className="createCard__input" id="email" type="text" />
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input
              className="createCard__input"
              id="password"
              type="password"
            />
          </div>
          <div>
            <label htmlFor="phone">phone</label>
            <input className="createCard__input" id="phone" type="text" />
          </div>
          <div>
            <label htmlFor="addres">address</label>
            <input className="createCard__input" id="addres" type="text" />
          </div>
          <div>
            <label htmlFor="date">birthday</label>
            <input className="createCard__input" id="date" type="date" />
          </div>
          <div>
            <label htmlFor="genre">genre</label>
            <select name="genre" id="genre" className="createCard__input">
              <option value="" disabled selected>
                Select your option
              </option>{" "}
              <option value="male">Male</option>
              <option value="female">female</option>
            </select>
          </div>
        </form>
      </section>
      <div className="createCard__sendButton">
        <span>Send</span>
      </div>
    </>
  );
};

// usuarios usuarioid, nombre apellido, email, password, telefono, direccion, fecha de nacimiento, genero.
