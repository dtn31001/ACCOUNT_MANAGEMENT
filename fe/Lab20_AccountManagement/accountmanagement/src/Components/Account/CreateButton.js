import React from "react";
import { Container, Button } from "reactstrap";

function CreateButton(props) {
  let { onHandleCreateButtuon } = props;
  //
  let handleCreateButtuon = () => {
    onHandleCreateButtuon();
  };
  return (
    <Container>
      <Button color="primary" onClick={handleCreateButtuon}>
        Create Account
      </Button>
    </Container>
  );
}

export default CreateButton;
