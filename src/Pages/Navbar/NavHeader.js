import React from 'react';
import { Container, Navbar,Nav,NavDropdown,Button, NavLink} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import useAuth from './../../Hooks/useAuth';
import { useDispatch } from 'react-redux';
import { addItem } from '../Redux-feature/EngineersSlice';
import useFirebase from './../../Hooks/useFirebase';

const NavHeader = () => {
  const {user,loginWithGoogle,logOut}=useFirebase()
  console.log(user)
  const dispatch=useDispatch()
     return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Engineers World</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto text-light">
    <NavLink as={Link} to="/">Home</NavLink>
      {user?.email?<p onClick={logOut}>{user?.displayName}</p>
        :<p onClick={loginWithGoogle}>Login</p>}
        <NavLink as={Link} to="favorite">Favorite List</NavLink>
        <NavLink as={Link} to="hire">Hired List</NavLink>

    </Nav>
 </Navbar.Collapse>
  </Container>
 </Navbar>
    );
};

export default NavHeader;