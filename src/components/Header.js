import React, { useState } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import SignUp from "../page/SignUp";
import SignIn from "../page/SignIn";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Header = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);
  // const is_token = document.cookie;  토큰으로 체크할 경우

  const [signUpOn, setSignUpOn] = useState(false);
  const [signInOn, setSignInOn] = useState(false);

  // React.useEffect(() => {
  //   let cookie = getCookie("userid");
  //   console.log(cookie);

  // });

  // 토큰으로 체크할 경우 if (is_token) 으로 변경해야함
  if (is_login) {
    return (
      <React.Fragment>
        <header>
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand>Home</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="float-right;" style={{ float: "right" }}>
                  <Nav.Link>
                    <Button
                      variant="secondary"
                      onClick={() => {
                        setSignUpOn(false);
                        setSignInOn(false);
                        dispatch(userActions.logOutDB());
                        // deleteCookie("userid");
                      }}
                    >
                      Sign Out
                    </Button>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
      </React.Fragment>
    );
  }else{
    return (
      <>
        <SignUp show={signUpOn} onHide={() => setSignUpOn(false)} />
        <SignIn show={signInOn} onHide={() => setSignInOn(false)} />
        <header>
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand>Home</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="float-right;" style={{ float: "right" }}>
                  <Nav.Link>
                    <Button
                      variant="primary"
                      onClick={() => {
                        setSignInOn(true);
                      }}
                    >
                      Sign In
                    </Button>
                  </Nav.Link>
                  <Nav.Link>
                    <Button variant="secondary" onClick={() => setSignUpOn(true)}>
                      Sign Up
                    </Button>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }

  
};


export default Header;
