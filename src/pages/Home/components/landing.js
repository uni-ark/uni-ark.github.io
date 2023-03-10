import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import styles from '../src/css/Home.css'
import UniNav from './Navbar'
import Option from './Option'
import '../src/css/landing.css'
import ParticlesBg from 'particles-bg';

class Landing extends Component {
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

   
   

    render(){
        const mystyle = {
            width:'100%',
            backgroundColor: this.state.status,
            position:'fixed',
            zIndex:'1000'
            };
        return (
            <div className='landing-page' style={{width:'100%'}}>
                <div style={mystyle}>
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