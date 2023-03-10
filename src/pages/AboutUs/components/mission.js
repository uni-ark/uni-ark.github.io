import React, { Component } from "react";
import { ReactDOM } from "react";
import {Col, Row, Container} from "react-bootstrap";
import '../src/css/mission.css'

class Mission extends Component{

    render(){
        return (
            <div className='mission-div'>
                <Container>
                    <Row className="align-items-center">
                        <Col style={{padding:'auto 0'}}>
                            <h1>Our Mission</h1>
                            <p style={{textAlign:'justify',fontSize:'20px'}}>
                            At UniArk, we provide 1:1 personalised guidance with your university application at every stage of the application process. Our experienced mentors will deliver guidance with university selection strategy, personal statement support, admissions test monitoring, and interview practice. With the aim to reduce the educational attainment gap of disadvantaged students, we also provide support with seeking scholarships and fundings.
                            </p>
                        </Col>
                        <Col style={{display:'flex',justifyContent:'right'}}>
                        {/* <center> */}
                            <img src={require('../src/img/p1.jpeg')} alt='mission' width='80%'  />
                            {/* </center> */}
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Mission;