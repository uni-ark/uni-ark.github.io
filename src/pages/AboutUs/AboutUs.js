import React from "react";
import { ReactDOM } from "react";
import {Col, Row, Container} from "react-bootstrap";
// import Button from '@mui/material/Button';
import UniNav from "../Home/components/Navbar";
// import Particles from 'react-particles-js';
// import particlesConfig from './config/particlesConfig';
import ParticlesBg from 'particles-bg'
import './src/css/aboutus.css'
import AULanding from "./components/landing";
import Mission from "./components/mission";
import TimeLine from "./components/timeline";   
import Vision from "./components/vision";


class AboutUs extends React.Component {
    render(){
        return (
            <div>
                <section className="one">
                        <AULanding />
                </section>
                <section className='two'>
                    <Mission />
                </section>
                <section className='four'>
                    <Vision />
                </section>
                <section className='three'>
                    <TimeLine />
                </section>
                
            </div>
        )
    }
};

export default AboutUs;