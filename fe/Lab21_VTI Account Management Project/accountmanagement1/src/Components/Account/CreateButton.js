/** @format */

import React from "react";
import { Button, Container } from "reactstrap";

function CreateButton(props) {
  let { onHandleCreateButtuon } = props;
  //
  let handleCreateButtuon = () => {
    onHandleCreateButtuon();
  };
  return (
    <Container>
      <Button color='primary' onClick={handleCreateButtuon}>
        Create New Account
      </Button>
    </Container>
  );
}

export default CreateButton;
