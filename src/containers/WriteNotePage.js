import React from "react";
//import "./WriteNotePage.css";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

class WriteNotePage extends React.Component {
  constructor() {
    super();
  }

  onSendClick = () => {
    console.log("Clicked Send");
  };

  render() {
    return (
      <div className="tc white">
        {/* <Alert key="banner1" variant="success">
        This is a success alert—check it out!
      </Alert> */}

        <Container>
          <Row>
            <div className="center">
              <Col>
                <img
                  className="shadow-4 tc"
                  src="https://picsum.photos/100/100?random=1"
                  style={{ width: 100, height: 100, borderRadius: 100 / 2 }}
                />
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label className="f4 ma4">
                    Leave an anonymous message for Anant
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="7"
                    className="f5 bold center w-100"
                  />
                </Form.Group>
              </Col>
              <div>
                <Button
                  variant="success"
                  className="w-90 pa3 f3"
                  onClick={this.onSendClick}
                >
                  Send
                </Button>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default WriteNotePage;
