import React from "react";
import { useSelector } from "react-redux";
import { Button } from "reactstrap";

function ResultFormItem(props) {
  let {} = props;
  let stateRedux = useSelector((state)=>state);
  let listAccount = stateRedux.listAccount;
  //
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
          <Button color="warning">Edit</Button>
        </td>
        <td>
          <Button color="warning">Delete</Button>
        </td>
      </tr>
    );
  });

  //
  return rowItem;
}

export default ResultFormItem;
