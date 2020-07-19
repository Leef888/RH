import React from 'react';
import './NavBar.css';
import * as ReactBootStrap from 'react-bootstrap';

function NavBar(props) {

    return (
        <ReactBootStrap.Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" fixed="top">
            <ReactBootStrap.Nav.Link href="#"><button className="homeButton" onClick={props.displayHome}>HOME</button></ReactBootStrap.Nav.Link>
            <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav" >
                <ReactBootStrap.Nav className="ml-auto">
                    <ReactBootStrap.Nav.Link href="#"><button className="navBarNavButtons" onClick={props.displayAuth}>Author</button></ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="#"><button className="navBarNavButtons" onClick={props.displayPageOne}>Page One</button></ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="#"><button className="navBarNavButtons" onClick={props.displayPageTwo}>Page Two</button></ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="#"><button className="navBarNavButtons" onClick={props.displayContacts}>Contacts</button></ReactBootStrap.Nav.Link>                    
                </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
    )
}

export default NavBar;