import React, { useState } from "react";
import "../../sass/layout/readResults.scss";
import { useDispatch, useSelector } from "react-redux";

export const Results = ({ kindOfRequest, users }) => {
  const { user } = useSelector((state) => state);
  const [editable, setEditable] = useState(false);

  const handleEdit = () => {
   
  };
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
          {users ? (
            React.Children.toArray(
              users.map((user, i) => {
                return (
                  <>
                    <tr>
                      <td>{user.user_name}</td>
                      <td>{user.last_name}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>{user.birthday}</td>
                      {kindOfRequest === "update" ? (
                        <td
                          onClick={handleEdit}
                          className="updateCard__button-edit"
                        >
                          edit
                        </td>
                      ) : kindOfRequest === "delete" ? (
                        <td className="deleteCard__button-delete">delete</td>
                      ) : null}
                    </tr>
                  </>
                );
              })
            )
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>
    </>
  );
};
