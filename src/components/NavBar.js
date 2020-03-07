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
                    <ReactBootStrap.Nav.Link href="#"><button className="navBarNavButtons" onClick={props.displayStLots}>StLots</button></ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="#"><button className="navBarNavButtons" onClick={props.displayDetLots}>DetLots</button></ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="#"><button className="navBarNavButtons" onClick={props.displayContacts}>Contacts</button></ReactBootStrap.Nav.Link>
                    {/* <div className="navBarNavButtons">
                        <ul className="navbar-nav">
                            <li className="nav-item"><button onClick={props.displayStLots}>StLots</button></li>
                            <li className="nav-item"><button onClick={props.displayDetLots}>DetLots</button></li>
                            <li className="nav-item"><button onClick={props.displayContacts}>Contacts</button></li>
                        </ul>
                    </div> */}
                </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
    )
}

export default NavBar;