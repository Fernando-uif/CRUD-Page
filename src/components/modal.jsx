import { useForm } from "../hooks/useForm";
import "../sass/components/modal.scss";
import { useState } from "react";
import { useSelector } from "react-redux";

export const Modal = ({ title, modalState, setModalState }) => {
  const {
    user: { user },
  } = useSelector((state) => state);

  const handleSaveUser = () => {};
  return (
    <>
      {modalState && (
        <div className="modal modal__fade-in">
          <div className="modal__content">
            <div className="modal__header">
              <span className="modal__header-text">{title}</span>
              <span
                onClick={() => setModalState(false)}
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
                  placeholder={user.user_name}
                  id="name"
                  className="modal__input"
                />
              </div>
              <div>
                <label htmlFor="last_name">Last Name</label>
                <input
                  placeholder={user.last_name}
                  type="text"
                  name="last_name"
                  id="last_name"
                  className="modal__input"
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  placeholder={user.email}
                  type="text"
                  id="email"
                  name="email"
                  className="modal__input"
                />
              </div>
              <div>
                <label htmlFor="phone">Phone</label>
                <input
                  placeholder={user.phone}
                  type="text"
                  id="phone"
                  name="phone"
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
