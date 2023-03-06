import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import styles from '../src/css/Home.css'
import UniNav from './Navbar'
// import Option from './Option'
import '../src/css/option.css'
import '../src/css/landing.css'
import { Container, Row, Col,Button } from 'react-bootstrap';

class Option extends Component {
    render(){
        return (
            <Container fluid className='main-container' style={{fontFamily:'Avenir'}}>
                <Row>
                    <Col className='left'>
                        <div className='option'>
                            <div className='option-text' style={{textAlign:'right'}}>
                                <h2>Compete For The Best Universities</h2>
                                <Button size='lg' style={{background:"#6730FF",width:'150px'}}>Apply Here</Button>
                            </div>
                        </div>
                    </Col>
                    <Col style={{paddingTop:'2%',paddingLeft:'2%'}}>
                        <div className='option'>
                            <div className='option-text' style={{textAlign:'left'}}>
                                <h2>Support Us On Our Mission</h2>
                                <Button size='lg' style={{background:"#6730FF",width:'150px'}}>Donate</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Option;