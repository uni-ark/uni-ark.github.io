import React from "react";
import { ReactDOM } from "react";
import {Col, Row, Container} from "react-bootstrap";
import { VerticalTimeline,VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import '../src/css/timeline.css'

class TimeLine extends React.Component {
    render(){
        return (
            <div className='timeline-div'>
                <Container>
                    <Row>
                        <Col>
                            <h1 style={{textAlign:'center'}}>Our Theory of Change</h1>
                            <center>
                                <hr size='5px' color='black' width="20%" />
                            </center>
                            <VerticalTimeline lineColor="#bbb">
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    contentStyle={{ background: 'rgb(255, 156, 156)', color: '#000' }}
                                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 156, 156)' }}
                                    iconStyle={{ background: 'rgb(255, 156, 156)', color: '#000' }}
                                >
                                    <h3 className="vertical-timeline-element-title">Problem</h3>
                                    {/* <h4 className="vertical-timeline-element-subtitle">Founder</h4> */}
                                    <p style={{textAlign:'justify'}}>
                                    Bright students from discriminated & persecuted backgrounds (ethnic, religious, sexual orientation etc.) from third-world countries are denied higher educational opportunities due to their identity and membership of a certain group, have poor chances of development and employment.
                                    </p>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    contentStyle={{ background: 'rgb(255, 239, 194)', color: '#000' }}
                                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 239, 194)' }}
                                    iconStyle={{ background: 'rgb(255, 239, 194)', color: '#000' }}
                                >
                                    <h3 className="vertical-timeline-element-title">Admission Applications Support</h3>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    contentStyle={{ background: 'rgb(255, 239, 194)', color: '#000' }}
                                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 239, 194)' }}
                                    iconStyle={{ background: 'rgb(255, 239, 194)', color: '#000' }}
                                >
                                    <h3 className="vertical-timeline-element-title">Admission Test Support</h3>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    contentStyle={{ background: 'rgb(255, 239, 194)', color: '#000' }}
                                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 239, 194)' }}
                                    iconStyle={{ background: 'rgb(255, 239, 194)', color: '#000' }}
                                >
                                    <h3 className="vertical-timeline-element-title">Interview Support</h3>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    contentStyle={{ background: 'rgb(255, 239, 194)', color: '#000' }}
                                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 239, 194)' }}
                                    iconStyle={{ background: 'rgb(255, 239, 194)', color: '#000' }}
                                >
                                    <h3 className="vertical-timeline-element-title">Financial Support</h3>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    contentStyle={{ background: 'rgb(164, 222, 173)', color: '#000' }}
                                    contentArrowStyle={{ borderRight: '7px solid  rgb(164, 222, 173)' }}
                                    iconStyle={{ background: 'rgb(164, 222, 173)', color: '#000' }}
                                >
                                    <h3 className="vertical-timeline-element-title">Outputs</h3>
                                    <p style={{textAlign:'justify'}}>
                                        <ul>
                                            <li>Increase the number of previously excluded students from persecuted backgrounds in elite higher education institutions in the UK/US</li>
                                            <li>More access to universities through Fully funded scholarships for the most excluded groups.</li>
                                            <li>Influence funders and partners to tackle the exclusion of the most persecuted groups in accessing higher educational opportunities</li>
                                        </ul>
                                    </p>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    contentStyle={{ background: 'rgb(255, 208, 161)', color: '#000' }}
                                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 208, 161)' }}
                                    iconStyle={{ background: 'rgb(255, 208, 161)', color: '#000' }}
                                >
                                    <h3 className="vertical-timeline-element-title">Short Term Outcomes</h3>
                                    <p style={{textAlign:'justify'}}>
                                        <ul>
                                            <li>Enabling bright individuals to leave their oppressive backgrounds to seek further education and giving them the chance to bring positive change in their home countries themselves</li>
                                            <li>More attention paid to the most excluded and vulnerable groups</li>
                                            <li>Better employment, development and removal of individuals from cycle of discrimination and persecution</li>
                                        </ul>
                                    </p>
                                </VerticalTimelineElement>
                                
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    contentStyle={{ background: '#D4F1F4', color: '#000' }}
                                    contentArrowStyle={{ borderRight: '7px solid  #D4F1F4' }}
                                    iconStyle={{ background: '#D4F1F4', color: '#000' }}
                                >
                                    <h3 className="vertical-timeline-element-title">Long Term Outcomes</h3>
                                    {/* <h4 className="vertical-timeline-element-subtitle">BSc Computer Science</h4> */}
                                    <p style={{textAlign:'justify'}}>
                                        <ul>
                                            <li>Increased participation of persecuted communities in higher education this better chances of employment</li>
                                            <li>Improved prosperity and social mobility</li>
                                            <li>A more inclusive and effective system with educational opportunities for all</li>
                                        </ul>
                                    </p>
                                </VerticalTimelineElement>
                            </VerticalTimeline>
                        </Col>
                    </Row>
                </Container>
                <center>
                <hr size='5px' color='black' width="20%" />
                </center>
            </div>
        )
    }
};

export default TimeLine;
