import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

// const URL =  "https://intense-savannah-69632.herokuapp.com";
const URL = "localhost:3001";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: "",
    };
  }

  onEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value });
  };

  onSubmitSignIn = () => {
    console.log(this.state);

    // fetch(`${URL}/signin`, {
    //   method: "post",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     email: this.state.signInEmail,
    //     password: this.state.signInPassword,
    //   }),
    // })
    //   .then((response) => response.json()) //looking at response, in order to do route change or not.
    //   .then((user) => {
    //     if (user.id) {
    //       // if server returned "success" in response body.
    //       this.props.loadUser(user);
    //       this.props.onRouteChange("home"); //do the route change.
    //     } else {
    //       //show to user that incorrect data was submitted.
    //     }
    //   });

    this.props.loadUser({
      id: "1",
      email: "user@example.com",
      name: "Aa",
      messages: [
        {
          id: 1,
          name: "Anant",
          message: "Hi",
        },
        {
          id: 2,
          name: "Anant1",
          message: "Hello",
        },
      ],
    });
    this.props.onRouteChange("home");
  };

  render() {
    return (
      <div className="center br3 shadow-2 pa5 ma4 w-50">
        <Form>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Col>
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={this.onEmailChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Col>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={this.onPasswordChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Col>
              <Button className="w-100 mv3" onClick={this.onSubmitSignIn}>
                Sign in
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default Signin;
