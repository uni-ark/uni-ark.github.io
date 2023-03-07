import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import Landing from './components/landing'
import CurrEvent from './components/currevent'
import Services from './components/services'
import Testimony from './components/testimony'

class Home extends Component{
    render() {
        return (
            <div className = "wrapper">
                <section className='one'>
                    <Landing />
                </section>
                <section className='two'>
                    <CurrEvent />
                </section>
                <section className='three'>
                    <Services />
                </section>
                <section className='four'>
                    <Testimony />
                </section>
                <section className='five'>
                    {/* <ContactUs /> */}
                </section>
            </div>
        );
    }
}


export default Home;