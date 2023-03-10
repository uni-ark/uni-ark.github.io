import React, {Component} from "react";
import { ReactDOM } from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import '../src/css/contactus.css'

class ContactUs extends Component{
    render(){
        return (
            <div className="contactus" style={{marginTop:'3%'}}>
                <Container style={{paddingTop:'3%',paddingBottom:'3%'}}>
                    <Card style={{height:'24em'}}>
                        <Card.Title style={{paddingTop:'2%',paddingLeft:'3%'}}>
                            <h2 style={{fontWeight:'bold'}}>Contact <span style={{color:'#6730FF'}}>Us</span></h2>
                        </Card.Title>
                        <hr style={{color:'black',backgroundColor:'black',height:'2px',width:'100%'}} />
                        <Card.Body style={{paddingLeft:'3%',fontSize:'18px'}}>
                        UniArk CIO is a registered charity in England and Wales (Charity Reg. Number: 1199070)
                        <Row style={{paddingTop:'3%'}}>
                            <Col>
                                <h5 style={{fontWeight:'bold'}}>For General Enquiries</h5>
                            </Col>
                            <Col>
                                <h5 style={{fontWeight:'bold'}}>Contact a Trustee</h5>
                            </Col>
                        </Row>
                        <Row style={{}}>
                            <Col>
                                UniArkfoundation@gmail.com
                            </Col>
                            <Col>
                                ns650@cam.ac.uk; shukriarezai@gmail.com
                            </Col>
                        </Row>
                        </Card.Body>
                            
                    </Card>
                </Container>
            </div>
        );
    }
}

export default ContactUs;