import React, { useState } from 'react';
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  Row,
  Spinner,
} from 'react-bootstrap';
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
      <Container className="p-4 d-flex justify-content-center">
        <Col md={10}>
          <Row>
            <h2 className="pt-2 mx-2 orange ">CONTACT US</h2>
            <Form onSubmit={contactNow}>
              <Container>
                <Col md={12}>
                  <Row>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Name"
                        name="from_name"
                        onChange={(e) => setUserName(e.target.value)}
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mt-3">
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
                  </Row>
                  <Row className="mt-3">
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
                  </Row>
                  <Row className="mt-3">
                    <Form.Group
                      controlId="exampleForm.ControlTextarea1"
                      className="w-100"
                    >
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        placeholder="Message"
                        name="message"
                        rows={2}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </Form.Group>
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
                </Col>
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
          </Row>
        </Col>
      </Container>
    </>
  );
};

export default ContactUs;
