/** @format */

import React from "react";
import { Container } from "reactstrap";
import CreateButton from "../Components/Account/CreateButton";
import ModalCreateNewAccount from "../Components/Account/CreateNewAccount/ModalCreateNewAccount";
import ResultForm from "../Components/Account/ResultForm";
import { useState } from "react";
import { useEffect } from "react";
// import Axios from "axios";
import { addAccountNewAPI, getListAccountAPI } from "../API/AccountApi";
import { getListPositionAPI } from "../API/PositionAPI";
import { getListDepartmentAPI } from "../API/DepartmentAPI";
import { useDispatch, useSelector } from "react-redux";
import { actionCloseForm, actionShowForm } from "./../Redux/Actions/FormAction";
import { actionAddAccountAPI, actionDeleteAccountAPI, actionFetchListAccountAPI, actionUpdateAccountAPI } from "./../Redux/Actions/AccountAction";
import { actionFetchListDepartmentAPI } from "../Redux/Actions/DepartmentAction";
import { actionFetchListPositionAPI } from "../Redux/Actions/PositionAction";
import ModalUpdateAccount from "../Components/Account/UpdateAccount/ModalUpdateAccount";
import { actionFetchAccountUpdateInfoRedux, actionTogleFormRedux } from "../Redux/Actions/FormUpdateAction";
import SearchForm from "../Components/Account/SearchForm";
// import storeRedux from "./../Redux/Store/storeRedux";
import Pagination from "../Components/Account/Pagination/page";

function AccountContainer(props) {
  // let [showForm, setShowForm] = useState(false);
  let [listAccount, setListAccount] = useState([]);
  let [listDepartment, setListDepartment] = useState([]);
  let [listPosition, setListPosition] = useState([]);
  let dispatchRedux = useDispatch();
  // Khai báo hook để lấy State từ Redux
  let stateRedux = useSelector((state) => state);

  //Ham callback xu ly createnewaccount
  let onHandleCreateButtuon = () => {
    // setShowForm(true);
    // Dispatch Acction acctionShowForm
    dispatchRedux(actionShowForm());
  };
  let onHandleCloseModal = () => {
    // setShowForm(false);
    dispatchRedux(actionCloseForm());
  };

  let onHandleCreateNewAccount = (accountNew) => {
    // // console.log("accountNew: ", accountNew);
    // listAccount.push(accountNew);
    // // Set lại state listAccount
    // setListAccount(listAccount);
    // // Lưu dữ liệu vào LocalStorage
    // // localStorage.setItem("listAccount", JSON.stringify(listAccount));
    // // Thực hiện đóng Form sau khi thêm mới
    // setShowForm(false);
    // "email":"anhtuanku201@gmail.com",
    // "username":"anhtuan",
    // "fullname":"anhtuanku",
    // "departmentId":"3",
    // "positionId":"3"
    let accountNewAPI = {
      email: accountNew.email,
      username: accountNew.username,
      fullname: accountNew.fullname,
      departmentId: accountNew.department,
      positionId: accountNew.position,
    };
    dispatchRedux(actionAddAccountAPI(accountNewAPI));
    addAccountNewAPI(accountNewAPI).then((response) => {
      // console.log(response);
      fetchListAccount();
    });
    // setShowForm(false);
    dispatchRedux(actionCloseForm());
  };
  let fetchListAccount = () => {
    // Axios.get("http://localhost:8080/api/v1/accounts")
    //   .then((response) => {
    //     let listAccount_API = response.data;
    //     console.log("response", response);
    //     setListAccount(listAccount_API);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    getListAccountAPI().then((response) => {
      setListAccount(response);
    });
  };
  let fetchListDepartment = () => {
    // Axios.get("http://localhost:8080/api/v1/departments")
    //   .then((response) => {
    //     let listDepartment_API = response.data;
    //     console.log("response", response);
    //     setListDepartment(listDepartment_API);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    getListDepartmentAPI().then((response) => {
      setListDepartment(response);
    });
  };
  let fetchListPosition = () => {
    // Axios.get("http://localhost:8080/api/v1/possitions")
    //   .then((response) => {
    //     let listPosition_API = response.data;
    //     console.log("response", response);
    //     setListPosition(listPosition_API);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    getListPositionAPI().then((response) => {
      setListPosition(response);
    });
  };

  // useEffect
  useEffect(() => {
    // if (localStorage && localStorage.getItem("listAccount")) {
    //   let listAccount_localStorage = JSON.parse(localStorage.getItem("listAccount"));
    //   setListAccount(listAccount_localStorage);
    // }
    //actionFetchListAccountAPI==> 1. call API, nhan listaccountAPI ==> 2. listaccountAPI ==> listaccountAPI(redux)
    dispatchRedux(actionFetchListAccountAPI());
    dispatchRedux(actionFetchListDepartmentAPI());
    dispatchRedux(actionFetchListPositionAPI());
    // load du lieu o API
    fetchListAccount();
    fetchListDepartment();
    fetchListPosition();
  }, []);
  // HAM CALLBACK XY LY XOA
  let onHandleDelete = (id) => {
    dispatchRedux(actionDeleteAccountAPI(id));
  };
  // Xử lý khi nhấn nút Update
  // let onHandleUpdate = (accountUpdate) => {
  //   console.log("accountUpdate", accountUpdate);
  // };
  // Xử lý khi nhấn nút Update
  let onHandleUpdate = async (accountUpdateForm) => {
    // Lấy của Account Cần update từ Redux
    let id_Update = stateRedux.FormUpdate.accountUpdateInfo.id;
    let accountUpdate_API = {
      id: id_Update,
      account_Update: accountUpdateForm,
    };
    // Gọi API để Update Account
    await dispatchRedux(actionUpdateAccountAPI(accountUpdate_API));

    // Đóng InputForm
    await dispatchRedux(actionTogleFormRedux());

    // Gọi API để cập nhật lại ResultForm
    await dispatchRedux(actionFetchListAccountAPI());
  };

  // Hàm Callback xử lý khi nhấn nút Edit
  let onHandleEdit = (accountEdit) => {
    // Lưu thông tin Account cần Update vào Redux
    dispatchRedux(actionFetchAccountUpdateInfoRedux(accountEdit));
    // Mở UpdateForm
    dispatchRedux(actionTogleFormRedux());
  };

  let handleFiltersChange = (search_Key) => {
    console.log("new:", search_Key);
    if (search_Key) {
      // Sử dụng hàm fillter để lọc các giá trị phần tử của mảng
      // listAccounts =  listAccounts.filter((account) =>{
      //   return account.Username.toLowerCase().indexOf(search_key.toLowerCase()) !==-1;
      // });

      let listAccounts_filter = []; // khai báo list dùng để chưa các giá trị sau khi filter.
      for (let index = 0; index < listAccount.length; index++) {
        // Sử dụng hàm includes để so sánh chuỗi, if chuỗi cha bao gồm chuỗi con sẽ trả về true, https://www.w3schools.com/jsref/jsref_includes.asp
        if (
          listAccount[index].ID.toLowerCase().includes(search_Key.toLowerCase()) ||
          listAccount[index].Email.toLowerCase().includes(search_Key.toLowerCase()) ||
          listAccount[index].Username.toLowerCase().includes(search_Key.toLowerCase()) ||
          listAccount[index].Fullname.toLowerCase().includes(search_Key.toLowerCase()) ||
          listAccount[index].Department.toLowerCase().includes(search_Key.toLowerCase()) ||
          listAccount[index].Position.toLowerCase().includes(search_Key.toLowerCase()) ||
          listAccount[index].Cretate_Date.toLowerCase().includes(search_Key.toLowerCase())
        ) {
          listAccounts_filter.push(listAccount[index]); // Lấy các phần tử thỏa mãn đk search_key lưu vào listAccounts_filter trung gian
        }
      }
      listAccount = listAccounts_filter; // gán lại giá trị sau khi đã filter cho listAccounts.
    }
  };

  // let handleFiltersChange = (newFilters) => {
  //   console.log("new:", newFilters);

  //   // console.log(listAccount);
  //   dispatchRedux(searchAccount(newFilters));
  //   let listAccount_Filters = [];

  //   if (newFilters) {
  //     listAccount_Filters = listAccount.filter((account) => account.email.compareTo(newFilters.toString().toLowerCase()));

  //     return (listAccount = listAccount_Filters);
  //   }
  //   fetchListAccount();
  // };
  // let search_key = search_key;

  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 5,
    _totalRows: 10,
  });
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  });

  let handlePageChange = (newPage) => {
    console.log("newPage", newPage);
  };

  return (
    <Container>
      <CreateButton onHandleCreateButtuon={onHandleCreateButtuon} />
      <br />

      <Pagination pagination={pagination} onPageChange={handlePageChange} />
      <br />
      <SearchForm onsubmit={handleFiltersChange} />
      <ResultForm listAccount={listAccount} onHandleDelete={onHandleDelete} onHandleEdit={onHandleEdit} />
      <ModalCreateNewAccount
        listDepartment={listDepartment}
        listPosition={listPosition}
        // showForm={showForm}
        onHandleCloseModal={onHandleCloseModal}
        onHandleCreateNewAccount={onHandleCreateNewAccount}
      />
      {/* Form Update Account*/}
      <ModalUpdateAccount onHandleUpdate={onHandleUpdate} />
    </Container>
  );
}

export default AccountContainer;
