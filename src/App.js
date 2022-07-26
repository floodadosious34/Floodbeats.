import { render } from '@testing-library/react';
import { Component, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages';
import About from './components/pages/about';
import Blogs from './components/pages/blogs';
import Contact from './components/pages/contact';
// import * as Tone from 'tone';
import './App.css';
// import makeSound from './components/makeSound'
import NavBar from './components/navbar';
// import MidSection from './components/midSection';
// import Sequencer from './components/sequencer';


function App() {
   

    return (
      <div className="App">
        <NavBar />
          {/* You need Routes and Routes from react to route through your pages in the website. */}
        <header className="Main-Content">
          <Routes> 
            <Route exact path='/' element={<Home />} /> 
            <Route exact path='/about' element={<About/>} />
            <Route exact path='/blogs' element={<Blogs/>} />
            <Route exact path='/contact' element={<Contact/>} />
          </Routes>
        </header>
      </div>
    );
}

export default App;
