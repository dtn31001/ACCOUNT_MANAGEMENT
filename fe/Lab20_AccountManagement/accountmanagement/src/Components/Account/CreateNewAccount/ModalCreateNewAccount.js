import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container } from "reactstrap";
import InputForm from "./InputForm";
import { useSelector } from "react-redux";

function ModalCreateNewAccount(props) {
  let {  onHandleCloseModal, onHandleCreateNewAccount,listDepartment,listPosition } = props;

  //
  let handleCloseModal = () => {
    onHandleCloseModal();
  };
  //lay state: showForm tu redux
  let stateRedux = useSelector((state)=>state);
  let showForm = stateRedux.showForm;
  return (
    <Container>
      <br />
      <Modal isOpen={showForm}>
        <ModalHeader>
          <h3>Create New Account</h3>
        </ModalHeader>
        <ModalBody>
          <InputForm onHandleCreateNewAccount={onHandleCreateNewAccount}  listDepartment={listDepartment}
      listPosition={listPosition}/>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={handleCloseModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}

export default ModalCreateNewAccount;
