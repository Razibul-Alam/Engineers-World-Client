import React from 'react';
import { Container, Navbar,Nav,NavDropdown,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import useAuth from './../../Hooks/useAuth';

const NavHeader = () => {
  const{loginWithGoogle}=useAuth() 
     return (
//         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//   <Container>
//   <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//   <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto text-light">
      <NavDropdown  title="More" id="collasible-nav-dropdown">
        <NavDropdown.Item as={Link} to="favorite">Favorite-List</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/">Home</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="post-job">Post Job</NavDropdown.Item>
        <p onClick={loginWithGoogle}>Login</p>
        <NavDropdown.Item as={Link} to="post-job">Admin Dashboard</NavDropdown.Item>
        
      </NavDropdown>
    </Nav>
//   </Navbar.Collapse>
//   </Container>
// </Navbar>
    );
};

export default NavHeader;