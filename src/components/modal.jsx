import { useState } from "react";
import { useForm } from "../hooks/useForm";
import "../sass/components/modal.scss";
export const Modal = ({ title, modalState, setModalState, user }) => {
  const [values, handleInputChange, handleInputReset, reset] = useForm({
    ...user,
  });

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
                  value={values.user_name}
                  onChange={handleInputChange}
                  id="name"
                  className="modal__input"
                />
              </div>
              <div>
                <label htmlFor="last_name">Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  value={values.last_name}
                  onChange={handleInputChange}
                  id="last_name"
                  className="modal__input"
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleInputChange}
                  className="modal__input"
                />
              </div>
              <div>
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={values.phone}
                  onChange={handleInputChange}
                  className="modal__input"
                />
              </div>
              <div className="modal__button">
                <div className="modal__button-save">Save</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
