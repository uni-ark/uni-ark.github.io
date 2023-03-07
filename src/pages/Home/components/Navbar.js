import React, {Component} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ReactDOM from 'react-dom/client';
import '../src/css/navbar.css'


class UniNav extends Component{
    render(){
        const navstyle = {
            width:"100%",
            top:"0"
            // position:"fixed",
            // textAlign:"center",
        }

        const leftnav={
            fontSize:'18px',
            marginRight:'0',
            // color:'#000',
        }
        return (
            <Navbar collapseOnSelect expand='lg' sticky="top" style={{zIndex:'1000'}}>
                <Container >

                    <Navbar.Brand href="#home" style={{fontSize:'36px',marginLeft:"0",paddingLeft:0,fontFamily:'Avenir'}}>
                        <Container>
                            <img src={require('../src/img/logo.png')} width="50" height="50" className='d-inline-block align-top' style={{float:'left'}}/>{' '}
                        </Container>
                        &nbsp; <b>UniArk</b>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    
                    <Nav className="justify-content-end" style={{ width: "100%",fontFamily:"Avenir" }}>
                        <Nav.Item>
                            <Nav.Link className='left-nav' href="/" style={leftnav}>Home &nbsp;</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className='left-nav' href="/AboutUs" style={leftnav}>About Us &nbsp;</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className='left-nav' href="/news" style={leftnav}>News &nbsp;</Nav.Link>
                        </Nav.Item>
                        <Nav.Item><Nav.Link className='left-nav' href="mentorship" style={leftnav}>Mentorship &nbsp;</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link className='left-nav' href="donate" style={leftnav}>Donate</Nav.Link></Nav.Item>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }  
}

export default UniNav;