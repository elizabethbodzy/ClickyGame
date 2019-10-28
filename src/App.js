import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Character from './components/Character';
// import images from '../src/images';
import images from './images.json';
import logo from './logo.svg';
import './App.css';

// const App = () => (
//   <>
//     <Navbar />
//     {/* <Container /> */}
//     <Banner />
//     <Character  />
//     <Character />
//     <Footer />
   
   
//   </>
// )

class App extends Component {
  state = {
    images,
    score: 0,
    highScore: 0,
    navMessage: "Click on an image to begin!"
  };

  render() {
    const state = this.state;
    return (
      <>
      
      <Navbar 
        score = {state.score}
        highScore = {state.highScore}
        navMessage = {state.navMessage}
      />
      <Banner />
      <Wrapper>
        {this.state.images.map(image => (
          <Character 
            clickCount = {this.clickCount}
            id = {image.id}
            key = {image.id}
            image = {image.image}
          />
        ))}
        
      
      
      
      </Wrapper>

      <Footer />
      
      





      </>
    )
  }
}

export default App;
