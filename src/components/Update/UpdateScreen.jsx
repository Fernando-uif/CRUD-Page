import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

import "../../sass/layout/update.scss";
import { ACTIONS } from "../../actions/actions";
import { emailChecker } from "../../helpers/reviewEmail";
import { justNumbers } from "../../helpers/justNumbers";
import { readUser, readUsers } from "../../reducers/thunks";
import { Results } from "../Read/Results";
import { useForm } from "../../hooks/useForm";
import { useState, useEffect } from "react";

export const UpdateScreen = () => {
  const dispatch = useDispatch();
  const {
    user: { users, user },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(readUsers());
  }, []);

  const [values, handleInputChange, handleInputReset, reset] = useForm({
    user_id: "",
    user_name: "",
    email: "",
    phone: "",
  });


  const reviewEmail = (e) => {
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

  const handleRequest = async () => {
    const { user_id, user_name, email, phone } = values;

    if (user_id === "" && user_name === "" && email === "" && phone === "") {
      dispatch({ type: ACTIONS.ACTIVE_RESULTS, payload: true });
      dispatch(readUsers());
    } else {
      dispatch({ type: ACTIONS.ACTIVE_RESULTS, payload: true });
      dispatch(readUser(values));
    }
  };

  return (
    <div className="updateCard">
      <h1>update</h1>
      <section className="updateCard__secondCard">
        <div>
          <h2>Search by</h2>
          <div className="updateCard__search">
            <div>
              <label htmlFor="updateCard-id">id</label>
              <input
                name="user_id"
                onChange={handleInputChange}
                value={values.user_id}
                autoComplete="off"
                onKeyPress={justNumbers}
                className="updateCard__input"
                id="updateCard-id"
                type="text"
              />
            </div>

            <div>
              <label htmlFor="updateCard-search">name</label>
              <input
                name="user_name"
                onChange={handleInputChange}
                value={values.user_name}
                autoComplete="off"
                className="updateCard__input"
                id="updateCard-search"
                type="search"
              />
            </div>
            <div>
              <label htmlFor="updateCard-email">Email</label>
              <input
                name="email"
                onChange={handleInputChange}
                value={values.email}
                autoComplete="off"
                className="updateCard__input"
                id="updateCard-email"
                type="email"
                onBlur={reviewEmail}
              />
            </div>
            <div>
              <label htmlFor="updateCard-phone">Phone</label>
              <input
                autoComplete="off"
                value={values.phone}
                name="phone"
                onChange={handleInputChange}
                onKeyPress={justNumbers}
                className="updateCard__input"
                id="updateCard-phone"
                type="phone"
              />
            </div>
            <div onClick={handleRequest} className="updateCard__sendButton">
              <span>request</span>
            </div>
          </div>
        </div>
        <div className="updateCard__results">
          <Results kindOfRequest="update" usuario={user || users} />
        </div>
      </section>
    </div>
  );
};
