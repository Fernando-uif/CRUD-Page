import { useForm } from "../hooks/useForm";
import "../sass/components/modal.scss";
import { useDispatch, useSelector } from "react-redux";
import { readUser, readUsers, updateUser } from "../reducers/thunks";
import Swal from "sweetalert2";
import { ACTIONS } from "../actions/actions";

export const Modal = ({ title, modalState, setModalState }) => {
  const dispatch = useDispatch();
  const {
    user: { user },
  } = useSelector((state) => state);

  const [values, handleInputChange, , reset] = useForm({
    user_name: "",
    email: "",
    phone: "",
    last_name: "",
  });
  const { user_name, email, phone, last_name } = values;

  const handleSaveUser = () => {
    let obj = {};
    for (let i in values) {
      if (values[i] !== "") {
        obj = { ...obj, [i]: values[i] };
      }
    }
    
    if (user_name === "" && email === "" && phone === "" && last_name === "") {
      Swal.fire({
        title: "Error",
        text: "Please, fill at least one field",
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: "#726D84",
      });
    } else {
      dispatch(
        updateUser({
          ...user[0],
          ...obj,
        })
      );
      setModalState(false);
      reset();
      dispatch(readUsers());
      dispatch({ type: ACTIONS.ACTIVE_RESULTS, payload: false });
      Swal.fire({
        title: "The user has been updated",
        text: `The user ${user.user_name} has been updated`,
        icon: "success",
        confirmButtonText: "Ok",
        confirmButtonColor: "#726D84",
      });
    }
  };

  const setModalFalse = () => {
    setModalState(false);

    reset();
  };

  return (
    <>
      {modalState && (
        <div className="modal modal__fade-in">
          <div className="modal__content">
            <div className="modal__header">
              <span className="modal__header-text">{title}</span>
              <span
                onClick={() => setModalFalse()}
                className="modal__closeButton"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
              </span>
            </div>
            <div className="modal__info">
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="user_name"
                  placeholder={user[0].user_name}
                  id="name"
                  onChange={handleInputChange}
                  value={values.user_name}
                  className="modal__input"
                />
              </div>
              <div>
                <label htmlFor="last_name">Last Name</label>
                <input
                  placeholder={user[0].last_name}
                  type="text"
                  name="last_name"
                  id="last_name"
                  onChange={handleInputChange}
                  value={values.last_name}
                  className="modal__input"
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  placeholder={user[0].email}
                  type="text"
                  id="email"
                  value={values.email}
                  onChange={handleInputChange}
                  name="email"
                  className="modal__input"
                />
              </div>
              <div>
                <label htmlFor="phone">Phone</label>
                <input
                  placeholder={user[0].phone}
                  type="text"
                  id="phone"
                  name="phone"
                  onChange={handleInputChange}
                  value={values.phone}
                  className="modal__input"
                />
              </div>
              <div className="modal__button">
                <div onClick={handleSaveUser} className="modal__button-save">
                  Save
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
