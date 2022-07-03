import React from "react";
import "../../sass/layout/readResults.scss";

export const Results = ({ kindOfRequest }) => {
  return (
    <>
      <table className={`${kindOfRequest}Card__table`}>
        <tbody>
          <tr>
            <th>name</th>
            <th>last name</th>
            <th>email</th>
            <th>phone</th>
            <th>Birthday</th>
            {kindOfRequest === "update" ? (
              <th>Edit</th>
            ) : kindOfRequest === "delete" ? (
              <th>Delete</th>
            ) : null}
          </tr>
          <tr>
            <td>Sunny</td>
            <td>Sunny</td>
            <td>Sunny</td>
            <td>Mostly sunny</td>
            <td>Partly cloudy</td>
            {kindOfRequest === "update" ? (
              <td className="updateCard__button-edit">edit</td>
            ) : kindOfRequest === "delete" ? (
              <td className="deleteCard__button-delete">delete</td>
            ) : null}
          </tr>
        </tbody>
      </table>
    </>
  );
};
