import React from 'react';
import { Outlet, Link } from "react-router-dom";
import {Container,Navbar,Nav} from 'react-bootstrap';
const Layout = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" id="navbar">
        <Container>
        <Nav className="me-auto">
          <Nav.Link><Link to='/' style={{textDecoration:'none', color:'white'}}>Home</Link></Nav.Link>
          <Nav.Link><Link to='/stars' style={{textDecoration:'none', color:'white'}}>Stars</Link></Nav.Link>
          <Nav.Link><Link to='/about' style={{textDecoration:'none', color:'white'}}>About</Link></Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      <Outlet />
    </>
  )
};

export default Layout;