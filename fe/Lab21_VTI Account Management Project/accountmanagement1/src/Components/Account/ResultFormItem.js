/** @format */

import React from "react";
import { Button } from "reactstrap";
import { useSelector } from "react-redux";

function ResultFormItem(props) {
  let { onHandleDelete, onHandleEdit } = props;

  let stateRedux = useSelector((state) => state);
  let listAccount = stateRedux.listAccount;
  let handleDelete = (id) => {
    onHandleDelete(id);
  };
  // Hàm xử lý khi nhấn nút Edit
  let handleEdit = (AccountEdit) => {
    onHandleEdit(AccountEdit);
  };

  // console.log("listAccount", listAccount);
  let rowItem = listAccount.map((account, index) => {
    return (
      <tr key={index}>
        <td>{account.id}</td>
        <td>{account.email}</td>
        <td>{account.username}</td>
        <td>{account.fullname}</td>
        <td>{account.department}</td>
        <td>{account.position}</td>
        <td>{account.createDate}</td>
        <td>
          <Button color='warning' onClick={() => handleEdit(account)}>
            Edit
          </Button>
        </td>
        <td>
          <Button color='warning' onClick={() => handleDelete(account.id)}>
            Delete
          </Button>
        </td>
      </tr>
    );
  });

  return rowItem;
}

export default ResultFormItem;
