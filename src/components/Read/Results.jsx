import { useDispatch } from "react-redux";
import React, { useState } from "react";
import Swal from "sweetalert2";

import "../../sass/layout/readResults.scss";
import { ACTIONS } from "../../actions/actions";
import { Modal } from "../Modal";
import { deleteUser } from "../../reducers/thunks";

export const Results = ({ kindOfRequest, usuario }) => {
  
  const [selectedUser, setSelectedUser] = useState(null);
  const dispatch = useDispatch();
  const [modalState, setModalState] = useState(false);

  const handleEdit = (e, user) => {
    setSelectedUser([user]);
    setModalState(true);
  };

  const handleDelete = (e, user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You will delete ${user.user_name}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#726D84",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteUser(user));
        dispatch({ type: ACTIONS.ACTIVE_RESULTS, payload: false });
        Swal.fire("Deleted!", "Your user has been deleted.", "success");
      }
    });
  };

  return (
    <>
      <Modal
        title={"Edit"}
        modalState={modalState}
        setModalState={setModalState}
        selectedUser={selectedUser}
      />
      <table className={`${kindOfRequest}Card__table`}>
        <tbody>
          <tr>
            <th>id</th>
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
          {usuario ? (
            React.Children.toArray(
              usuario.map(( user ) => {
                return (
                  <>
                    <tr>
                      <td>{user.user_id}</td>
                      <td>{user.user_name}</td>
                      <td>{user.last_name}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>{user.birthday}</td>
                      {kindOfRequest === "update" ? (
                        <td
                          onClick={(e) => handleEdit(e, user)}
                          className="updateCard__button-edit"
                        >
                          edit
                        </td>
                      ) : kindOfRequest === "delete" ? (
                        <td
                          onClick={(e) => handleDelete(e, user)}
                          className="deleteCard__button-delete"
                        >
                          delete
                        </td>
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
