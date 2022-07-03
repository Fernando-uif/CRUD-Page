import React from "react";
import "../../sass/layout/update.scss";
import { Results } from "../Read/Results";

export const UpdateScreen = () => {
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
                autoComplete="off"
                className="updateCard__input"
                id="updateCard-id"
                type="text"
              />
            </div>

            <div>
              <label htmlFor="updateCard-search">name</label>
              <input
                autoComplete="off"
                className="updateCard__input"
                id="updateCard-search"
                type="search"
              />
            </div>
            <div>
              <label htmlFor="updateCard-email">Email</label>
              <input
                autoComplete="off"
                className="updateCard__input"
                id="updateCard-email"
                type="email"
              />
            </div>
            <div>
              <label htmlFor="updateCard-phone">Phone</label>
              <input
                autoComplete="off"
                className="updateCard__input"
                id="updateCard-phone"
                type="phone"
              />
            </div>
            <div className="updateCard__sendButton">
              <span>request</span>
            </div>
          </div>
        </div>
        <div className="updateCard__results">
          <Results kindOfRequest = 'update'/>
        </div>
      </section>
    </div>
  );
};
