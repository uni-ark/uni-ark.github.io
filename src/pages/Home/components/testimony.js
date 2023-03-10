import React from "react";
import { Carousel, Container, Row, Card, Col, Image } from "react-bootstrap";
import ReactDOM from "react-dom/client";
import '../src/css/testimony.css'

class Testimony extends React.Component {
    render() {
        return (
            <div className="testimony" style={{  marginTop: '3%' }}>
                <h1 style={{ fontWeight: 'bold',fontSize:'56px' }}>Testimony</h1>
                <Carousel className='carousel' variant='dark' style={{ paddingBottom: '5%' }}>
                    <Carousel.Item>

                        <Container className='carousel-cont'>
                            <Card style={{ textAlign: 'left', flexDirection: 'row' }}>
                                <Card.Img as={Image} fluid={true} variant="center" src={require('../src/img/nematullah.webp')} style={{ width: '13em', height: '13em', border: '1px #eee solid', marginTop: 'auto', marginBottom: 'auto', marginLeft: '3%' }} roundedCircle />
                                <Card.Body style={{ paddingTop: '4%', paddingLeft: '3%' }}>
                                    <Card.Title><h3>Nematullah <span style={{color:'#6370FF',fontWeight:'bold'}}>Ahangosh</span></h3></Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">(Mentee from Afghanistan)</Card.Subtitle>
                                    <Card.Text style={{ textAlign: 'justify', paddingRight: '3%' }}>
                                        I have been getting guidance and assistance from UniArk to apply for development courses in the UK. Affected by poverty, disability, 
                                        and discrimination against my community, the Hazaras in war-torn Afghanistan, I believe I have a strong reason to pursue development 
                                        studies and contribute to the development of my country and even to the region. Thanks to the UniArk team for helping me get an offer from 
                                        the University of Sheffield. I trust UniArk since I searched but couldn’t find such an organization that supports youths like me for free 
                                        and with a lot of dedication. My mentors have been very responsive and supportive during the application process.   
                                    </Card.Text>

                                </Card.Body>

                            </Card>
                        </Container>

                    </Carousel.Item>
                    <Carousel.Item className='carousel-cont'>
                        <Container className='carousel-cont'>
                            <Card style={{ textAlign: 'left', flexDirection: 'row' }}>
                                <Card.Img as={Image} fluid={true} variant="center" src={require('../src/img/aish.png')} style={{ width: '13em', height: '13em', border: '1px #eee solid', marginTop: 'auto', marginBottom: 'auto', marginLeft: '3%' }} roundedCircle />
                                <Card.Body style={{ paddingTop: '4%', paddingLeft: '3%' }}>
                                    <Card.Title><h3>Aishwarya C. <span style={{color:'#6370FF', fontWeight:'bold'}}>Babu</span></h3></Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">(Winner of Bell Burnell Graduate Scholarship Fund, India)</Card.Subtitle>
                                    <Card.Text style={{ textAlign: 'justify', paddingRight: '3%' }}>
                                        I have no words to express how thankful I am to have been chosen as a Bell Burnell Graduate Scholarship Fund awardee. Winning this 
                                        scholarship is a dream come true for me. My career has always been of upmost importance to me and achieving this scholarship validates 
                                        all the hard work and challenges I faced to reach to this point. UniArk also played an important role during the application process. 
                                        Ayngaran, who is a former Bell Burnell Graduate Scholarship Fund awardee, helped me to get in contact with the head of the Bell Burnell 
                                        fund to clarify my queries.

                                    </Card.Text>

                                </Card.Body>

                            </Card>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item className='carousel-cont'>
                        <Container className='carousel-cont'>
                        <Card style={{ textAlign: 'left', flexDirection: 'row' }}>
                                <Card.Img as={Image} fluid={true} variant="center" src={require('../src/img/noimg.webp')} style={{ width: '13em', height: '13em', border: '1px #eee solid', marginTop: 'auto', marginBottom: 'auto', marginLeft: '3%' }} roundedCircle />
                                <Card.Body style={{ paddingTop: '4%', paddingLeft: '3%' }}>
                                    <Card.Title><h3>Qudratullah <span style={{color:'#6370FF',fontWeight:'bold'}}>Jamil</span></h3></Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">(Mentee from Afghanistan)</Card.Subtitle>
                                    <Card.Text style={{ textAlign: 'justify', paddingRight: '3%' }}>
                                    I cannot sufficiently thank you and the UniArk Team for your incredible support on my application procedure and specifically essay reviews. 
                                    Your sense of support in hard times, your energy and motivational support will sustain for long in my memory. I want to say that you all lightened 
                                    up a candle where darkness prevailed all over my country and sense of hope were barely feasible, while your supports made the candle of hopes be continually flaming. 
                                    Therefore, I full heartedly thank you all for your supports and time you all have given me and supported me to get steps closer to what I dreamed
                                    </Card.Text>

                                </Card.Body>

                            </Card>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item className='carousel-cont'>
                        <Container className='carousel-cont'>
                        <Card style={{  textAlign: 'left', flexDirection: 'row' }}>
                                <Card.Img as={Image} fluid={true} variant="center" src={require('../src/img/noimg.webp')} style={{ width: '13em', height: '13em', border: '1px #eee solid', marginTop: 'auto', marginBottom: 'auto', marginLeft: '3%' }} roundedCircle />
                                <Card.Body style={{ paddingTop: '4%', paddingLeft: '3%' }}>
                                    <Card.Title><h3>Khadija <span style={{color:'#6370FF',fontWeight:'bold'}}>.</span></h3></Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">(Mentee from Afghanistan)</Card.Subtitle>
                                    <Card.Text style={{ textAlign: 'justify', paddingRight: '3%' }}>
                                    From my experience, the support UniArk provided has been extremely helpful. Although I couldn't succeed to achieve any scholarship yet but 
                                    I learned many important things like how to write personal statement, recommendations letter and this will definitely can help me to succeed 
                                    in the future. Moreover, when students need help regarding their application UniArk team is doing their  best to help, students feel confident 
                                    and motivated to try and not give up I think this means a lot. I feel grateful to UniArk and the wonderful members. You are doing a great job. 
                                    I really appreciate
                                    </Card.Text>

                                </Card.Body>

                            </Card>
                        </Container>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default Testimony;