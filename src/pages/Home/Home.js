import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import Landing from './components/landing'
import CurrEvent from './components/currevent'


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
                    {/* <Services /> */}
                </section>
            </div>
        );
    }
}


export default Home;