import Swal from "sweetalert2";

import "../../sass/layout/delete.scss";
import { ACTIONS } from "../../actions/actions";
import { emailChecker } from "../../helpers/reviewEmail";
import { justNumbers } from "../../helpers/justNumbers";
import { Results } from "../Read/Results";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { readUser, readUsers } from "../../reducers/thunks";
import { useEffect } from "react";

export const DeleteScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(readUsers());
  }, []);
  
  const {
    user: { users, user },
  } = useSelector((state) => state);

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
    <div className="deleteCard">
      <h1>delete</h1>
      <section className="deleteCard__secondCard">
        <div>
          <h2>Search by</h2>
          <div className="deleteCard__search">
            <div>
              <label htmlFor="deleteCard-id">id</label>
              <input
                autoComplete="off"
                className="deleteCard__input"
                id="deleteCard-id"
                name="user_id"
                onChange={handleInputChange}
                onKeyPress={justNumbers}
                type="text"
                value={values.user_id}
              />
            </div>

            <div>
              <label htmlFor="deleteCard-search">name</label>
              <input
                className="deleteCard__input"
                id="deleteCard-search"
                name="user_name"
                onChange={handleInputChange}
                type="search"
                value={values.user_name}
              />
            </div>
            <div>
              <label htmlFor="deleteCard-email">Email</label>
              <input
                autoComplete="off"
                className="deleteCard__input"
                id="deleteCard-email"
                name="email"
                onChange={handleInputChange}
                onBlur={reviewEmail}
                type="email"
                value={values.email}
              />
            </div>
            <div>
              <label htmlFor="deleteCard-phone">Phone</label>
              <input
                autoComplete="off"
                name="phone"
                value={values.phone}
                className="deleteCard__input"
                onKeyPress={justNumbers}
                onChange={handleInputChange}
                id="deleteCard-phone"
                type="phone"
              />
            </div>
            <div onClick={handleRequest} className="deleteCard__sendButton">
              <span>request</span>
            </div>
          </div>
        </div>
        <div className="deleteCard__results">
          <Results kindOfRequest="delete" usuario={users || user} />
        </div>
      </section>
    </div>
  );
};
