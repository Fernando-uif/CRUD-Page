import React from "react";
import "../../sass/layout/readResults.scss";
export const Results = () => {
  return (
    <>
      <table className="readCard__table">
        <tbody>
          <tr>
            <th>name</th>
            <th>last name</th>
            <th>email</th>
            <th>phone</th>
            <th>Birthday</th>
          </tr>
          <tr>
            <td>Sunny</td>
            <td>Sunny</td>
            <td>Sunny</td>
            <td>Mostly sunny</td>
            <td>Partly cloudy</td>
          </tr>
          <tr>
            <td>Sunny</td>
            <td>Sunny</td>
            <td>Sunny</td>
            <td>Mostly sunny</td>
            <td>Partly cloudy</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
