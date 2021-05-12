import React from 'react'
import '../../app.scss';
import Navbar from 'react-bootstrap/Navbar'
import Logo from './TodoLogo.png'
import {Nav} from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar variant="light" className="navbar">
                <Navbar.Brand>
                    <img alt="Logo" src={Logo} width="30" height="30" className="d-inline-block align-top"></img>
                    To-Do List
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link className="Nav-tab">Text 1</Nav.Link>
                    <Nav.Link className="Nav-tab">Text 2</Nav.Link>
                    <Nav.Link className="Nav-tab">Text 3</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Header
