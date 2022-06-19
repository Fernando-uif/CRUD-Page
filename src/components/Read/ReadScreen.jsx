import React from "react";
import "../../sass/layout/readResults.scss";
import { Results } from "./Results";

export const ReadScreen = () => {
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
                autoComplete="off"
                className="readCard__input"
                id="readCard-id"
                type="text"
              />
            </div>

            <div>
              <label htmlFor="readCard-search">name</label>
              <input
                autoComplete="off"
                className="readCard__input"
                id="readCard-search"
                type="search"
              />
            </div>
            <div>
              <label htmlFor="readCard-email">Email</label>
              <input
                autoComplete="off"
                className="readCard__input"
                id="readCard-email"
                type="email"
              />
            </div>
            <div>
              <label htmlFor="readCard-phone">Phone</label>
              <input
                autoComplete="off"
                className="readCard__input"
                id="readCard-phone"
                type="phone"
              />
            </div>

            <div className="createCard__sendButton">
              <span>Send</span>
            </div>
          </div>
        </div>
        <div className="readCard__results">
          <Results />
        </div>
      </section>
    </div>
  );
};
