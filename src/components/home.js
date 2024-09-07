import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import ContactUs from './contact';
import {
  faEnvelope,
  faPhoneAlt,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
  return (
    <Container fluid className="gradient-back">
      <Row>
        <Col
          md={3}
          className="d-flex justify-content-center align-items-center"
        >
          <Image
            src="/whiteshirt.jpg"
            width={250}
            height={300}
            alt="Picture of the author"
            quality={100}
          />
        </Col>
        <Col md={6}>
          <ContactUs />
        </Col>
        <Col
          md={3}
          className="d-flex justify-content-center align-items-center"
        >
          <Container className="p-4 m-0">
            <Col md={12}>
              <Row>
                <div
                  style={{ backgroundColor: '#303427', borderRadius: '6px' }}
                >
                  <h4
                    className="pt-2 pb-2 orange"
                    style={{ color: '#fff', textAlign: 'center' }}
                  >
                    ROBINHOOD WHITE SHIRT
                  </h4>

                  <Image
                    src="/halfwhite.png"
                    width={'100%'}
                    alt="Picture of the author"
                    quality={100}
                  />
                </div>
              </Row>
              <Row>
                <Card className="p-3 mt-3">
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
                      <h5 className="green">+91 8217539049</h5>
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
              </Row>
            </Col>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
