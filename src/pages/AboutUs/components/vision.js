import React, { Component } from "react";
import { ReactDOM } from "react";
import {Col, Row, Container} from "react-bootstrap";

class Vision extends Component{

    render(){
        return (
            <div className='vision-div' style={{paddingTop:'5%'}}>
                <Container>
                    <Row className="align-items-center">
                        <Col>
                        {/* <center> */}
                            <img src={require('../src/img/p2.jpg')} alt='vision' width='80%'  />
                            {/* </center>     */}
                        </Col>
                        <Col>
                        <h1>Our Vision</h1>
                            <p style={{textAlign:'justify',fontSize:'20px'}}>
                            Our vision is to help students from disadvantaged backgrounds to gain entry to some of the world’s most competitive universities including UK universities like Oxford, and Cambridge. These world-class universities truly provide a platform to transform one’s life and the skills to become world leaders in their respective fields. We hope to empower entire minority communities by preparing the students to succeed both academically and personally.
                            </p>
                        
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Vision;