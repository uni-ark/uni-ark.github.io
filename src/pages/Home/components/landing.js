import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import styles from '../src/css/Home.css'
import UniNav from './Navbar'
import Option from './Option'
import '../src/css/landing.css'

class Landing extends Component {
    render(){
        return (
            <div className='landing-page' style={{width:'100%'}}>
                <div style={{width:'100%',position:'fixed',background:'white',zIndex:'1000'}}>
                    <UniNav />
                </div>
                <br />
                <div style={{width:'100%'}}>
                    <Option />
                </div>
            </div>
        );
    }
}

export default Landing;