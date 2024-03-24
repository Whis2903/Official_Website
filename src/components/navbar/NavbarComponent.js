import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import SRMSIGKDD from "../../assets/Images/srmsigkdd.png";

import "./NavbarComponent.css";

function NavbarComponent() {
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false); // Track submission status
  const handleClose = () => {
    setShow(false);
    setSubmitted(false); // Reset submission status when closing modal
  };
  const handleShow = () => setShow(true);

  const [validated, setValidated] = useState(false);
  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    if (form.checkValidity() === true) {
      // Add your formspree endpoint here
      const formResponse = await fetch('https://formspree.io/f/xleqwvyr', {
        method: 'POST',
        body: new FormData(form)
      });

      if (formResponse.ok) {
        setSubmitted(true); // Update submission status
        setTimeout(() => handleClose(), 3000); // Close modal after 3 seconds
      }
    }
  };

  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        fixed="top"
        collapseOnSelect
        expand="lg"
        className="custom-navbar"
      >
        <Container>
          <Navbar.Brand
            href="/home"
            style={{ fontFamily: "Syne", color: "var(--secondary-color)" }}
          >
            <img src={SRMSIGKDD} width="70" height="60" alt="srm sigkdd logo" style={{paddingRight:"10px"}}/>
            SIGKDD SRM KTR Student Chapter
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{marginTop:"23px"}} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={NavLink} to="/home" style={{fontWeight:"bolder"}}>
                Home
              </Nav.Link>
              <Nav.Link as={HashLink} to="#upcomingevents" style={{fontWeight:"bolder"}}>
                Events
              </Nav.Link>
              <Nav.Link
                href="https://onboard.stackup.dev/community/srmsigkdd"
                target="_blank" style={{fontWeight:"bolder"}}
              >
                Leaderboard
              </Nav.Link>
              {/* <Nav.Link as={HashLink} to="#blogs" style={{fontWeight:"bolder"}}>
                Blogs
              </Nav.Link> */}
              <Nav.Link as={NavLink} to="/team" style={{fontWeight:"bolder"}}>
                Team
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <div className="custom-contact">
                <Nav.Link onClick={handleShow} style={{fontWeight:"bold"}}>Contact Us</Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="row justify-content-center ms-auto">
            <div className="col-lg-10">
              {submitted ? (
                <div className="text-center mb-3">
                  <p className="text-success">Submitted successfully!</p>
                </div>
              ) : (
                <>
                  <h1>
                    <span style={{ color: "var(--secondary-color)" }}>
                      Write us
                    </span>{" "}
                    something
                  </h1>
                  <p style={{fontWeight:"bold"}}>Our team will reply as soon as possible</p>
                  <div className="contact-form">
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                      <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                          <Form.Label style={{fontWeight:"bold"}}>Name</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            placeholder="Full Name"
                            name="Name"
                          />
                          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                          <Form.Label style={{fontWeight:"bold"}}>Email</Form.Label>
                          <Form.Control required type="email" placeholder="Email" name="Email" />
                          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                      </Row>
                      <Row className="mb-3">
                      <Form.Group as={Col} md="12" controlId="validationCustom03">
                          <Form.Label style={{fontWeight:"bold"}}>Subject</Form.Label>
                          <Form.Control
                            required
                            as="textarea" rows={1}
                            placeholder="Type your subject here..."
                            name="Subject"
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide a valid message.
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="12" controlId="validationCustom03" style={{marginTop:"10px"}}>
                          <Form.Label style={{fontWeight:"bold"}}>Message</Form.Label>
                          <Form.Control
                            required
                            as="textarea" rows={4}
                            placeholder="Type your message here..."
                            name="Message"
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide a valid message.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Row>
                      <Button type="submit" className="submit-button btn">Submit</Button>
                    </Form>
                  </div>
                </>
              )}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavbarComponent;
