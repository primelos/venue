import React, { Component } from 'react';
import './resources/styles.css'
import { Element } from 'react-scroll'

import Header from './components/header_footer/Header'
import Featured from './components/featured'
import VenueNfo from './components/venueNfo'
import HighLights from './components/highlights'
import Pricing from './components/pricing'
import Location from './components/location'
import Footer from './components/header_footer/Footer'



class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: '1500px', background: 'cornflowerblue'}}>

      <Element>
        <Header />
      </Element>

      <Element name='featured'>
       <Featured />
      </Element>

      <Element name='venuenfo'>
        <VenueNfo />
      </Element>

      <Element name='highlights'>
        <HighLights />
      </Element>

      <Element name='pricing'>
        <Pricing />
      </Element>
      
      <Element name='location'>
        <Location />
      </Element>
     
      <Footer />
      
    </div>
    )
  }
}


export default App;

//rcc - class component
//rafce - stateless component