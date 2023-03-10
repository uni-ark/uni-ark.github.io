import React from "react";
import { ReactDOM } from "react";
import {Col, Row, Container} from "react-bootstrap";
// import Button from '@mui/material/Button';
import UniNav from "../../Home/components/Navbar";
// import Particles from 'react-particles-js';
// import particlesConfig from './config/particlesConfig';
import ParticlesBg from 'particles-bg'
import '../src/css/aboutus.css'


class AULanding extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            status:""
        };
    }

    componentDidMount() {
        this.listener = document.addEventListener("scroll", e => {
            var scrolled = document.scrollingElement.scrollTop;
            if (scrolled >= 120) {
              if (this.state.status !== "white") this.setState({ status: "white" })
            } else {
              if (this.state.status !== "") this.setState({ status: "" })
          }
        });
   };

   
   

    render() {
        const mystyle = {
            width:'100%',
            backgroundColor: this.state.status,
            position:'fixed',
            zIndex:'1000'
            };
        return (
            <div className="about-us">
                <ParticlesBg type="square" bg={true}  num={7} />
                <div style={mystyle}>
                <UniNav />
                </div>
                <Container style={{paddingTop:'20%'}}>
                    <h1 style={{fontSize:'80px'}}>About Us</h1>
                </Container>
            </div>
        );
    };
};

export default AULanding;