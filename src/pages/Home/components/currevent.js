import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import { Row, Col, Container, Card } from 'react-bootstrap';
import YoutubeEmbed from './YouTubeEmbed';

class CurrEvent extends Component {
    render() {
        return (
            <Container style={{ height: '75vh' , textAlign:'center',marginBottom:'10%',fontSize:'18px'}}>
                <Row style={{ paddingTop: '5%' }}>
                    <Col>
                        <h1 style={{fontWeight:'bold'}}>Invest In <span style={{color:'#6730FF'}}>Her Future</span></h1>
                    </Col>
                </Row>

                <center>
                <Card style={{textAlign:'justify', width:'70%',padding:'3%'}}>
                        <Card.Subtitle><h4>UniArk <span style={{color:'#6730FF'}}>Women's</span> Scholarship</h4></Card.Subtitle><br />
                        <YoutubeEmbed />
                        <Card.Text>
                        Take a stand for educational justice by donating for the education of disadvantaged women.
                        Education is a powerful tool that can change lives and shape futures. Access to education can mean the difference between a life of oppression and a future filled with limitless possibilities. By donating to UniArk's Women's Scholarship, you can help give women the opportunity to receive a higher education and build a brighter future for herself and her community.<br /><br /> Read more about the campaign.
                        </Card.Text>
                </Card>
                </center>
            </Container>
        );
    }
}

export default CurrEvent;