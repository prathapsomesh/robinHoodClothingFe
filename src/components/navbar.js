import { labels } from '@/Config/labels';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavbarTop = () => {
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container fluid>
          <Navbar.Brand href="/">
            <Image
              src="/vercel.svg"
              width={55}
              height={55}
              alt="Picture of the author"
              className="mr-5"
              quality={100}
            />
            <span style={{ marginLeft: '10px' }}>{labels.navbar.title}</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarTop;
