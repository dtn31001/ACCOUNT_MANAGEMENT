import React, { useState } from "react";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { generateId } from "../../../Utils/Helpers/generateId";
import { getNowDate } from "../../../Utils/Helpers/getNowDate";


function InputForm(props) {
  let { onHandleCreateNewAccount,listDepartment,listPosition  } = props;
  console.log("listDepartment",listDepartment);
  console.log("listPosition",listPosition);
  // State lưu trữ dữ liệu trong ô nhập liệu
  let [Email, SetEmail] = useState("");
  let [Username, SetUsername] = useState("");
  let [Fullname, SetFullname] = useState("");
  let [Department, SetDepartment] = useState("");
  let [Postion, SetPostion] = useState("");

  //
  let handleCreate = () => {
    // console.log("Email: ", Email);
    // console.log("Username: ", Username);

    let accountNew = {
      id: generateId(),
      email: Email,
      username: Username,
      fullname: Fullname,
      department: Department,
      position: Postion,
      createDate: getNowDate(),
    };

    onHandleCreateNewAccount(accountNew);
  };
  // Hàm xử lý reset
  let handleReset = () => {
    SetEmail("");
    SetUsername("");
    SetFullname("");
    SetDepartment("0");
    SetPostion("0");
  };
  //
  let DepartmentItems = listDepartment.map((department, index) =>{
    return(
      <option value={department.id}>{department.name}</option>
    )
  });
  let PositionItems = listPosition.map((position, index) =>{
    return(
      <option value={position.id}>{position.name}</option>
    )
  });
  return (
    <Container>
      <Form>
        {/* Email */}
        <FormGroup>
          <Label for="Email">Email: </Label>
          <Input id="Email" name="Email" placeholder="Input Email" type="email" value={Email} onChange={(event) => SetEmail(event.target.value)} />
        </FormGroup>

        {/* Username */}
        <FormGroup>
          <Label for="Username">Username: </Label>
          <Input
            id="Username"
            name="Username"
            placeholder="Input Username"
            type="text"
            value={Username}
            onChange={(event) => {
              SetUsername(event.target.value);
            }}
          />
        </FormGroup>

        {/* Fullname */}
        <FormGroup>
          <Label for="Fullname">Fullname: </Label>
          <Input
            id="Fullname"
            name="Fullname"
            placeholder="Input Fullname"
            type="text"
            value={Fullname}
            onChange={(event) => {
              SetFullname(event.target.value);
            }}
          />
        </FormGroup>

        {/* Department */}
        <FormGroup>
          <Label for="Department">Select a Department: </Label>
          <Input
            id="Department"
            name="Department"
            type="select"
            value={Department}
            onChange={(event) => {
              SetDepartment(event.target.value);
            }}
          >
            <option value={"0"}>--- Choose Department---</option>
            {/* <option value={"Bán hàng"}>Bán hàng</option>
            <option value={"Bảo vệ"}>Bảo vệ</option>
            <option value={"Giám đốc"}>Giám đốc</option>
            <option value={"Kỹ thuật"}>Kỹ thuật</option>
            <option value={"Marketing"}>Marketing</option> */}
          {DepartmentItems}
          </Input>
        </FormGroup>

        {/* Postion */}
        <FormGroup>
          <Label for="Postion">Select a Postion: </Label>
          <Input
            id="Postion"
            name="Postion"
            type="select"
            value={Postion}
            onChange={(event) => {
              SetPostion(event.target.value);
            }}
          >
            <option value={"0"}>--- Choose Position---</option>
            {/* <option value={"Dev"}>Dev</option>
            <option value={"Test"}>Test</option>
            <option value={"Scrum_Master"}>Scrum_Master</option>
            <option value={"PM"}>PM</option> */}
            {PositionItems}
          </Input>
        </FormGroup>
      </Form>
      {/* Nút xử lý */}
      <Button color="primary" onClick={handleCreate}>
        Create
      </Button>
      <Button color="danger" onClick={handleReset}>
        Reset
      </Button>
    </Container>
  );
}

export default InputForm;
