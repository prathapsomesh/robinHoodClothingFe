import React, { useState } from 'react';
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from 'react-bootstrap';
import {
  faEnvelope,
  faPhoneAlt,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import emailjs from 'emailjs-com';
import ErrorOrSuccessModal from './shared/ErrorOrSuccessModal';

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  // const [regex, setRegex] = useState(/^[0-9\b]+$/);

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const [errorModal, setErrorModal] = useState({ toShow: false, message: '' });

  const contactNow = (e) => {
    e.preventDefault();
    switch (true) {
      case !userName:
        setErrorModal({
          toShow: true,
          message: 'Enter your Name Please',
        });
        break;

      case !email:
        setErrorModal({
          toShow: true,
          message: 'Enter your Email Please',
        });
        break;

      case !phoneNumber:
        setErrorModal({
          toShow: true,
          message: 'Enter your Phone Number',
        });
        break;

      case !message:
        setErrorModal({
          toShow: true,
          message: 'Please enter any message',
        });
        break;
      default:
        setLoading(true);
        emailjs
          .sendForm(
            'service_1cc72kc',
            'template_6g3lgpd',
            e.target,
            'I2jdFq8HH1sFqMqOZ'
          )
          .then(
            (result) => {
              setLoading(false);
              setError(null);
              setSuccess(
                'Request received successfully we will get back to you with in 24 hours, Thank you for your interest with us .'
              );
              e.target.reset();
            },
            (error) => {
              console.log('err heeeee', error);
              setLoading(false);
              setSuccess(null);
              setError('Something went wrong please try again later !!');
            }
          );
        break;
    }
  };
  const closeErrorModal = () => {
    setErrorModal({
      toShow: false,
      message: '',
    });
  };
  return (
    <>
      <div className="mt-4" id="contact">
        <Container fluid className="p-4 whiteBackground">
          <h2 className=" pt-4 orange ">CONTACT US</h2>

          <Row className="contactRow">
            <Col md={8} className=" py-2 ">
              <Form onSubmit={contactNow}>
                <Container fluid>
                  <Row>
                    <Col md={12}>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Name"
                          name="from_name"
                          onChange={(e) => setUserName(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col md={12}>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          name="usr_email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <Form.Text className="text-muted">
                          We&#39;ll never share your email with anyone else.
                        </Form.Text>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col md={6}>
                      <Form.Group controlId="formPhoneNumber">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Enter Phone number"
                          name="contact_number"
                          length={10}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col md={12}>
                      <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                          as="textarea"
                          placeholder="Message"
                          name="message"
                          rows={2}
                          onChange={(e) => setMessage(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    variant="outline-dark"
                    type="submit"
                    disabled={loading}
                    className="mt-3"
                  >
                    Submit
                    {loading ? (
                      <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        className="ml-1 mr-1 "
                      />
                    ) : null}
                  </Button>
                  {error ? (
                    <Alert variant={'danger'} className="my-3">
                      {error}
                    </Alert>
                  ) : success ? (
                    <Alert variant={'success'} className="my-3">
                      {success}
                    </Alert>
                  ) : null}
                </Container>
                {errorModal.toShow ? (
                  <ErrorOrSuccessModal
                    handleClose={closeErrorModal}
                    open={errorModal.toShow}
                    type={'error'}
                    heading="Required"
                    body={errorModal.message}
                  />
                ) : null}
              </Form>
            </Col>
            <Col md={4} className=" py-2 mt-2">
              <Card className="p-3">
                <Row className="my-2">
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    <div
                      // className="contactUsSpan"
                      style={{
                        width: '30px',
                        height: '30px',
                        marginRight: '12px',
                      }}
                    >
                      <FontAwesomeIcon
                        id="verified"
                        icon={faUser}
                        size={'sm'}
                        className="contactIcons"
                      />
                    </div>
                    <h5 className="green">ROBINHOOD CLOTHING</h5>
                  </div>
                </Row>
                <Row className="my-2">
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    <div
                      // className="contactUsSpan"
                      style={{
                        width: '30px',
                        height: '30px',
                        marginRight: '12px',
                      }}
                    >
                      <FontAwesomeIcon
                        id="verified"
                        icon={faPhoneAlt}
                        size={'sm'}
                        className="contactIcons"
                      />
                    </div>
                    <h5 className="green">+91 6366001337</h5>
                  </div>
                </Row>
                <Row className="my-2">
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    <div
                      // className="contactUsSpan"
                      style={{
                        width: '30px',
                        height: '30px',
                        marginRight: '12px',
                      }}
                    >
                      <FontAwesomeIcon
                        id="verified"
                        icon={faEnvelope}
                        size={'sm'}
                        className="contactIcons"
                      />
                    </div>
                    <h5 className="green">contact@robinhoodclothing.in</h5>
                  </div>
                </Row>
                {/* <Row>
                  <a
                    href="https://www.google.com/maps/place/NEW+RAJ+TECHNOLOGY/@12.3622147,76.5753674,15z/data=!4m6!3m5!1s0x3baf7bf5d99f8691:0xc05dc7db41185783!8m2!3d12.3622147!4d76.5753674!16s%2Fg%2F11l746sqf1?entry=ttu"
                    target="_blank"
                    rel="noreferrer"
                    variant="outline-dark"
                    className="mt-2"
                  >
                    <Button variant="outline-dark">Get Directions</Button>
                  </a>
                </Row> */}
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ContactUs;
