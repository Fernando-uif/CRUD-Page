import Swal from "sweetalert2";

import "../../sass/layout/readResults.scss";
import { justNumbers } from "../../helpers/justNumbers";
import { Results } from "./Results";
import { useForm } from "../../hooks/useForm";
import { emailChecker } from "../../helpers/reviewEmail";
import { useDispatch, useSelector } from "react-redux";
import { readUser, readUsers } from "../../reducers/thunks";
import { ACTIONS } from "../../actions/actions";

export const ReadScreen = () => {
  const dispatch = useDispatch();
  const {
    user: { user },
  } = useSelector((state) => state);

  const [values, handleInputChange, handleInputReset, reset] = useForm({
    user_id: "",
    user_name: "",
    email: "",
    phone: "",
  });
  const handleRequest = () => {
    const { user_id, user_name, email, phone } = values;

    user_id === "" && user_name === "" && email === "" && phone === ""
      ? dispatch(readUsers()) &&
        dispatch({ type: ACTIONS.ACTIVE_RESULTS, payload: true })
      : dispatch(readUser(values)) && dispatch({ type: ACTIONS.ACTIVE_RESULTS, payload: true });
  };
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
  return (
    <div className="readCard">
      <h1>read</h1>
      <section className="readCard__secondCard">
        <div>
          <h2>Search by</h2>
          <div className="readCard__search">
            <div>
              <label htmlFor="readCard-id">id</label>
              <input
                name="user_id"
                onChange={handleInputChange}
                value={values.user_id}
                onKeyPress={justNumbers}
                autoComplete="off"
                className="readCard__input"
                id="readCard-id"
                type="search"
              />
            </div>

            <div>
              <label htmlFor="readCard-search">name</label>
              <input
                autoComplete="off"
                name="user_name"
                onChange={handleInputChange}
                value={values.user_name}
                className="readCard__input"
                id="readCard-search"
                type="search"
              />
            </div>
            <div>
              <label htmlFor="readCard-email">Email</label>
              <input
                name="email"
                onChange={handleInputChange}
                value={values.email}
                autoComplete="off"
                className="readCard__input"
                id="readCard-email"
                type="email"
                onBlur={reviewEmail}
              />
            </div>
            <div>
              <label htmlFor="readCard-phone">Phone</label>
              <input
                autoComplete="off"
                value={values.phone}
                name="phone"
                onChange={handleInputChange}
                className="readCard__input"
                id="readCard-phone"
                type="phone"
                onKeyPress={justNumbers}
              />
            </div>
            <div onClick={handleRequest} className="readCard__sendButton">
              <span>request</span>
            </div>
          </div>
        </div>
        <div className="readCard__results">
          <Results kindOfRequest="read" usuario={user} />
        </div>
      </section>
    </div>
  );
};
