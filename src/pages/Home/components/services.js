import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/css/services.css'
import { Container, Row, Col,Image,Card, } from 'react-bootstrap';

class Services extends React.Component {
    render() {
        return (
            <div className='services'>
            <h1 style={{fontSize:'56px',fontWeight:'bold'}}>Services</h1>
            <Container style={{marginTop:'2%'}}>
                <Row >
                    <Col>
                        <Card style={{ width: '25rem', height:'28em', color:'black',marginLeft:'auto',marginRight:'auto',marginTop:'5%'}}>
                            <Card.Img as={Image} fluid={true} variant="center" src={require('../src/img/s1.jpeg')} style={{width:'11em',height:'11em',borderBottom:'1px #aaa solid',marginLeft:'auto',marginRight:'auto',marginTop:'1em'}} roundedCircle />
                            <Card.Body>
                                <Card.Title style={{marginTop:'1em',color:'#000',fontWeight:'bold',fontSize:'28px'}}>Personal <span style={{color:'#6370FF'}}>Statement</span></Card.Title>
                                <Card.Text style={{textAlign:'justify', width:'75%',marginLeft:'auto',marginRight:'auto',marginTop:'1em',fontSize:'18px'}}>
                                Personalised, multidraft feedback on personal statements and other admisssion essay requirements
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '25rem', height:'28em', color:'black',marginLeft:'auto',marginRight:'auto',marginTop:'5%'}}>
                            <Card.Img as={Image} fluid={true} variant="center" src={require('../src/img/s2.jpeg')} style={{width:'11em',height:'11em',borderBottom:'1px #aaa solid',marginLeft:'auto',marginRight:'auto',marginTop:'1em'}} roundedCircle />
                            <Card.Body>
                                <Card.Title style={{marginTop:'1em',color:'#000',fontWeight:'bold',fontSize:'28px'}}>Admission <span style={{color:'#6370FF'}}>Tests</span></Card.Title>
                                <Card.Text  style={{textAlign:'justify', width:'75%',marginLeft:'auto',marginRight:'auto',marginTop:'1em',fontSize:'18px'}}>
                                1:1 support for admissions tests such as the NSAA, PAT, ENGAA and etc to improve test performances
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '25rem', height:'28em', color:'black',marginLeft:'auto',marginRight:'auto',marginTop:'5%'}}>
                            <Card.Img as={Image} fluid={true} variant="center" src={require('../src/img/s3.jpeg')} style={{width:'11em',height:'11em',borderBottom:'1px #aaa solid',marginLeft:'auto',marginRight:'auto',marginTop:'1em'}} roundedCircle />
                            <Card.Body>
                                <Card.Title style={{marginTop:'1em',color:'#000',fontWeight:'bold',fontSize:'28px'}}>Interview <span style={{color:'#6370FF'}}>Practice</span></Card.Title>
                                <Card.Text style={{textAlign:'justify', width:'75%',marginLeft:'auto',marginRight:'auto',marginTop:'1em',fontSize:'18px'}}>
                                Technical Interview preparation provided by tutors who have successfully experienced the interview processes
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row >
                    <Col>
                    <Card style={{ width: '25rem', height:'37em', color:'black',marginLeft:'auto',marginRight:'auto',marginTop:'5%'}}>
                            <Card.Img as={Image} fluid={true} variant="center" src={require('../src/img/s4.PNG')}  style={{width:'11em',height:'11em',borderBottom:'1px #aaa solid',marginLeft:'auto',marginRight:'auto',marginTop:'1em'}} roundedCircle />
                            <Card.Body>
                                <Card.Title style={{marginTop:'1em',color:'#000',fontWeight:'bold',fontSize:'28px'}}>Scholarship <span style={{color:'#6370FF'}}>Applications</span></Card.Title>
                                <Card.Text style={{textAlign:'justify', width:'75%',marginLeft:'auto',marginRight:'auto',marginTop:'1em',fontSize:'18px'}}>
                                Students from 3rd world countries will need scholarships to study abroad, they will be supported at every stage by mentors who have successfully secured scholarships
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '25rem', height:'37em', color:'black',marginLeft:'auto',marginRight:'auto',marginTop:'5%'}}>
                            <Card.Img as={Image} fluid={true} variant="center" src={require('../src/img/s1.jpeg')} style={{width:'11em',height:'11em',borderBottom:'1px #aaa solid',marginLeft:'auto',marginRight:'auto',marginTop:'1em'}} roundedCircle />
                            <Card.Body>
                                <Card.Title style={{marginTop:'1em',color:'#000',fontWeight:'bold',fontSize:'28px'}}>General admis<span style={{color:'#6370FF'}}>sions support</span></Card.Title>
                                <Card.Text style={{textAlign:'justify', width:'75%',marginLeft:'auto',marginRight:'auto',marginTop:'1em',fontSize:'18px'}}>
                                Students needing support beyond the UCAS application to meet all the requirements such as the IELTS test and etc will have a mentor that can guide them through it.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '25rem', height:'37em', color:'black',marginLeft:'auto',marginRight:'auto',marginTop:'5%'}}>
                            <Card.Img as={Image} fluid={true} variant="center" src={require('../src/img/s1.jpeg')} style={{width:'11em',height:'11em',borderBottom:'1px #aaa solid',marginLeft:'auto',marginRight:'auto',marginTop:'1em'}} roundedCircle />
                            <Card.Body>
                                <Card.Title style={{marginTop:'1em',color:'#000',fontWeight:'bold',fontSize:'28px'}}>Admissions - <span style={{color:'#6370FF'}}>not the end</span></Card.Title>
                                <Card.Text style={{textAlign:'justify', width:'75%',marginLeft:'auto',marginRight:'auto',marginTop:'1em',fontSize:'18px'}}>
                                Through our collaboration with Homerton ChangeMakers and our vast network connection of students willing to help, we will be able to assist students in their first year of university whilst they adjust to the UK system if required. Note, this service is only available to international students.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            </div>
        );
    }
}

export default Services;