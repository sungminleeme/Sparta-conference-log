import React from "react";
import { Modal, Button, Form, Container } from "react-bootstrap";

const SignIn = ({ show, onHide }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered="centered"
    >
      <Container>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">로그인</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>이메일</Form.Label>
              <Form.Control type="email" placeholder="이메일을 입력해주세요" />
            </Form.Group>

            <Form.Group>
              <Form.Label>비밀번호</Form.Label>
              <Form.Control
                type="password"
                placeholder="비밀번호를 입력해주세요"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button block variant="info" type="button" className="my-3">
            로그인
          </Button>
          {/* 로그인 버튼옆에 닫기버튼,필요없을꺼 같아서 일단 주석처리 */}
          {/* <Button onClick={onHide}>Close</Button> */}
        </Modal.Footer>
      </Container>
    </Modal>
  );
};

export default SignIn;
