import React from 'react';
import styled from 'styled-components';
import {Navbar, Nav, NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import {bell} from 'react-icons-kit/icomoon/bell'
import { Icon } from 'react-icons-kit'
import {stopwatch} from 'react-icons-kit/icomoon/stopwatch'
import {history} from 'react-icons-kit/icomoon/history'
import {location2} from 'react-icons-kit/icomoon/location2'



const Styles = styled.div`

`;



const navBar = () => {
    return(
     
        <Navbar bg="light" >
        <Navbar.Brand href="#">Simple Timer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="./"><Icon size={20} icon={bell} /></Nav.Link>
            <Nav.Link href="./setTimer"><Icon size={20} icon={stopwatch} /></Nav.Link>
            <Nav.Link href="./timeMap"><Icon size={20} icon={location2} /></Nav.Link>
          </Nav>
        
        </Navbar.Collapse>
      </Navbar>
      
    )
}

export default navBar;