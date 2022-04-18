import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import CustomLink from '../CustomLink/CustomLink'



const Header = () => {
  const [user]= useAuthState(auth)
const hanleSignOut = ()=>{
  signOut(auth)
}

    return (
        <>
           <Navbar collapseOnSelect expand="lg" sticky='top' style={{ background:"#a4a4a4"}}>
                <Container>
                    <Navbar.Brand  >
                       <h1 className='text-white '>the Traveler</h1>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={CustomLink} to="/">Home</Nav.Link>
                            <Nav.Link as={CustomLink} to="/service">Services</Nav.Link>
                            <Nav.Link as={CustomLink} to="/checkout">Checkout</Nav.Link>
                            <Nav.Link as={CustomLink} to="/blogs">Blogs</Nav.Link>
                            
                        </Nav>
                        <Nav>
                        <Nav.Link as={CustomLink} to="/about">About</Nav.Link>
                            {
                                user ?
                                    <button style={{fontSize:'20px'}} className='btn btn-link text-white text-decoration-none' onClick={hanleSignOut}>sign out</button>
                                :
                                <Nav.Link as={CustomLink} to="login">
                                Login
                            </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;