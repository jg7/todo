import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Logo from './TodoLogo.png'

const Footer = () => {
    return (
        <footer>
            <Navbar variant="light" className="Navbar-footer">
                <Navbar.Brand>
                    <img alt="Logo" src={Logo} width="30" height="30" className="d-inline-block align-top"></img>
                    Footer
                </Navbar.Brand>
            </Navbar>
        </footer>
    )
}

export default Footer
