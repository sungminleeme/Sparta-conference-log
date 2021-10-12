import React from "react";
import { Modal, Button, Form, Container } from "react-bootstrap";
import { getCookie, setCookie, deleteCookie } from "../shared/Cookie";

const SignIn = (props) => {
  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const changeId = (e) => {
    setId(e.target.value);
  };

  const changePwd = (e) => {
    setPwd(e.target.value);
  };

  const signin = () => {
    setCookie("userid", id, 3);
    setCookie("userpwd", pwd, 3);
  };

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered="centered"
    >
      <Container>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>아이디</Form.Label>
              <Form.Control
                value={id}
                onChange={changeId}
                type="id"
                placeholder="아이디를 입력하세요"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>패스워드</Form.Label>
              <Form.Control
                value={pwd}
                onChange={changePwd}
                type="password"
                placeholder="비밀번호를 입력하세요"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            block
            variant="info"
            type="button"
            className="my-3"
            onClick={() => {
              console.log("로그인 했어!");
              signin();
            }}
          >
            Sign In
          </Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Container>
    </Modal>
  );
};

export default SignIn;
