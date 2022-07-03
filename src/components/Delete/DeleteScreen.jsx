import React from "react";
import "../../sass/layout/delete.scss";
import { Results } from "../Read/Results";

export const DeleteScreen = () => {
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
                type="text"
              />
            </div>

            <div>
              <label htmlFor="deleteCard-search">name</label>
              <input
                autoComplete="off"
                className="deleteCard__input"
                id="deleteCard-search"
                type="search"
              />
            </div>
            <div>
              <label htmlFor="deleteCard-email">Email</label>
              <input
                autoComplete="off"
                className="deleteCard__input"
                id="deleteCard-email"
                type="email"
              />
            </div>
            <div>
              <label htmlFor="deleteCard-phone">Phone</label>
              <input
                autoComplete="off"
                className="deleteCard__input"
                id="deleteCard-phone"
                type="phone"
              />
            </div>
            <div className="deleteCard__sendButton">
              <span>request</span>
            </div>
          </div>
        </div>
        <div className="deleteCard__results">
          <Results kindOfRequest = 'delete'/>
        </div>
      </section>
    </div>
  );
};
