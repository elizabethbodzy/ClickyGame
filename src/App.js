import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Character from './components/Character';
// import images from '../src/images';
import images from './images.json';
// import logo from './logo.svg';
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
    navMessage: "Click on an image to begin!",
    clicked: [],
  };

  shuffle = array => {
    array.sort(() => Math.random() - 0.5);
    for (let i = 0; i < array.length; i++) {
      array[i].id = i;
    }
  }

  componentDidMount() {
    var newImagesArray = this.state.images;
    this.shuffle(newImagesArray);
    this.setState({ images: newImagesArray});
  }

  clickCount = id => {
    var newImagesArray = this.state.images;
    console.log(newImagesArray);
  }

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
            id = {image.id}
            key = {image.id}
            image = {image.image}
            clicked = {image.clicked}
            onClick = {() => this.clickCount(image.id)}
          />
        ))}
        
      
      
      
      </Wrapper>

      <Footer />
      
      





      </>
    )
  }
}

export default App;
