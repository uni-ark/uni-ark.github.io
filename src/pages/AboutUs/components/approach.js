import React, { Component } from "react";
import { ReactDOM } from "react";
import {Col, Row, Container} from "react-bootstrap";

import '../src/css/mission.css'

class Approach extends Component{

    render(){
        return (
            <div className='mission-div'>
                <Container>
                    <Row className="align-items-center">
                        <Col style={{padding:'auto 0'}}>
                            <h1>Our Approach</h1>
                            <p style={{textAlign:'justify',fontSize:'20px'}}>
                            There are a large number of organisations that help students from disadvantaged backgrounds, however, these organisations do not provide personalised support to individual students and are mostly restricted to home students. The admission experience and requirements of students are specific to their geographical background and our diverse team, enables our approach to be tailored to meet the needs of the student. We will provide strategy support in finding your best-fit university, 1:1 help on admission tests, and technical interview to build a strong candidacy. We are well aware that most of you from abroad will require scholarships, we have experienced mentors who have successfully secured scholarships that will help you throughout
                            </p>
                        </Col>
                        <Col style={{display:'flex',justifyContent:'right'}}>
                        {/* <center> */}
                            <img src={require('../src/img/p3.jpeg')} alt='mission' width='80%'  />
                            {/* </center> */}
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Approach;