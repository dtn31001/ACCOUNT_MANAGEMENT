import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import CreateButton from "../Components/Account/CreateButton";
import ResultForm from "../Components/Account/ResultForm";
import ModalCreateNewAccount from "./../Components/Account/CreateNewAccount/ModalCreateNewAccount";
import Axios from "axios";
import { addAccountNewAPI, getListAccountAPI } from "../API/AccountApi";
import { getListDepartmentAPI } from "../API/DepartmentAPI";
import { getListPositionAPI } from "../API/PositionAPI";
import { useDispatch } from "react-redux";
import { actionCloseForm, actionShowForm } from "../Redux/Actions/FormAction";

function AccountContainer(props) {
  // let [showForm, setShowForm] = useState(false);
  // Khai báo State để quản lý danh sách Account trên hệ thống
  let [listAccount, setListAccount] = useState([]);
  let [listDepartment, setListDepartment] = useState([]);
  let [listPosition, setListPosition] = useState([]);
  let dispatchRedux = useDispatch();
  // Hàm callback xử lý khi nhấn nút CreateNewAccount
  let onHandleCreateButtuon = () => {
    //
    // console.log("onHandleCreateButtuon");
    // setShowForm(true);
    //dispatch action actionShowForm
    dispatchRedux(actionShowForm());
  };

  // Hàm callback xử lý khi nhấn nút Close
  let onHandleCloseModal = () => {
    //
    // console.log("onHandleCloseModal");
    // setShowForm(false);
    dispatchRedux(actionCloseForm());
  };
  // Xử lý tạo mới Account
  let onHandleCreateNewAccount = (accountNew) => {
    // console.log("accountNew: ", accountNew);
    // listAccount.push(accountNew);
    // setListAccount(listAccount);
    // Lưu dữ liệu vào LocalStorage
    // localStorage.setItem("listAccount", JSON.stringify(listAccount));
    // "id": 1,
    // "email": "Email1@gmail.com",
    // "username": "Username1",
    // "fullname": "Fullname1",
    // "department": "Kỹ thuật",
    // "position": "Dev",
    // "createDate": "2020-03-04"
    let accountNewAPI ={
    email: accountNew.email ,
    username: accountNew.username ,
    fullname: accountNew.fullname ,
    departmentId: accountNew.department,
    positionId: accountNew.position ,
    };
    addAccountNewAPI(accountNewAPI).then((response)=>{
        console.log(response);
        fetchListAccount();
    });
    // setShowForm(false);
  };
  //Ham fetchListAccount
  let fetchListAccount = ()=>{
    // Axios.get("http://localhost:8080/api/v1/accounts")
    // .then((response)=>{
    //   let ListAccount_API = response.data;
    //   console.log("response", response);
    //   setListAccount(ListAccount_API);
    // })
    // .catch((error)=>{
    //   console.log(error);
    // });
    getListAccountAPI().then((response)=>{
      setListAccount(response);
    });
  };
  // ham fetchListPosition
  let fetchListPosition = ()=>{
    // Axios.get("http://localhost:8080/api/v1/possitions")
    // .then((response)=>{
    //   let ListPosition_API = response.data;
    //   console.log("response", response);
    //   setListAccount(ListPosition_API);
    // })
    // .catch((error)=>{
    //   console.log(error);
    // });
    getListPositionAPI().then((response)=>{
      setListPosition(response);
    });
  };
  //ham fetchListDepartment
  let fetchListDepartment = ()=>{
    // Axios.get("http://localhost:8080/api/v1/departments")
    // .then((response)=>{
    //   let ListDepartment_API = response.data;
    //   console.log("response", response);
    //   setListAccount(ListDepartment_API);
    // })
    // .catch((error)=>{
    //   console.log(error);
    // });
    getListDepartmentAPI().then((response) => {
      setListDepartment(response);
    });

  };
  // useEffect
  useEffect(() => {
    //load o LocalStorage
    // if (localStorage && localStorage.getItem("listAccount")) {
    //   let listAccount_LocalStorage = JSON.parse(localStorage.getItem("listAccount"));
    //   setListAccount(listAccount_LocalStorage);
    // }
    //load du lieu API
    dispatchRedux(actionFetchListAccount());

    // fetchListAccount();
    fetchListPosition();
    fetchListDepartment();
  }, []);
  return (
    <Container>
      <CreateButton onHandleCreateButtuon={onHandleCreateButtuon} />
      {/*  */}
      <ModalCreateNewAccount 
      // showForm={showForm} 
      onHandleCloseModal={onHandleCloseModal} 
      onHandleCreateNewAccount={onHandleCreateNewAccount} 
      listDepartment={listDepartment}
      listPosition={listPosition}/>
      {/*  */}
      <ResultForm listAccount={listAccount} />
    </Container>
  );
}

export default AccountContainer;
