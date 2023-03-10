import React, { Component } from "react";
import { ReactDOM } from "react";
import {Col, Row, Container} from "react-bootstrap";
import '../src/css/mission.css'

class Mission extends Component{

    render(){
        return (
            <div className='mission-div'>
                <Container>
                    <Row>
                        <Col>
                            <h1>Our Mission</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.
                                Nullam id dolor id nibh ultricies vehicula ut id elit.
                                Nullam id dolor id nibh ultricies vehicula ut id elit.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Mission;