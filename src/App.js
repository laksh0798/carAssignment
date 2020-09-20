import React from 'react';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import './styles/index.scss'
import AboutUs from './containers/AboutUs';
import Product from './containers/Product';
import Client from './containers/Client';
import Map from './containers/Map';
import ContactUs from './containers/ContactUs';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <Navbar />
        <Slider />
        <AboutUs />
        <Product />
        <Client />
        <Map />
        <ContactUs />
      </div>
    </ParallaxProvider>
  );
}

export default App;
