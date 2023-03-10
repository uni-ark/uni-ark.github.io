import logo from './logo.svg';
import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
  HashRouter,
  Switch,
} from "react-router-dom";
import Home from './pages/Home/Home';
// import News from './pages/News/News';
import AboutUs from './pages/AboutUs/AboutUs';
// import Mentorship from './pages/Mentorship/Mentorship'
// import Support from './pages/Support/Support'


function App() {
  return (
    // <BrowserRouter>
      <HashRouter basename='/'>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/AboutUs' element={<AboutUs />}></Route>
          {/* <Route exact path='/' element={<Home />}></Route> */}
          {/* <Route exact path='/' element={<Home />}></Route> */}
          {/* <Route exact path='/' element={<Home />}></Route> */}
        </Routes>
      </HashRouter>
    // </BrowserRouter>
  );
}

export default App;
