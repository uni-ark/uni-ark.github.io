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
                            We envision a world where every student has access to the best education and opportunities. We believe that every student has the potential to achieve their dreams, and we are here to help them achieve it.
                            </p>
                        
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Vision;