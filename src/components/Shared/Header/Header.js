import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/red-chilli-logo.png';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Link to='/'>
                        <img src={logo} style={{ 'height': '50px' }} alt="" />
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='d-flex justify-content-end'>
                        <Nav className='d-flex align-items-center'>
                            <li className="nav-item">
                                <Link className='nav-link' to='/login'>Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to='/register'><button className='btn btn-danger rounded-pill'>Sign Up</button></Link>
                            </li>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;