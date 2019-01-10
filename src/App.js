import React, { Component } from 'react';
import Nav from "./Components/Nav/Nav"
import Game from "./Components/Game/Game"
// import Wrapper from "./Components/Wrapper/Wrapper"
import images from "./images.json";
import score from "./score.json";
import "./style.css"
import { randomFill } from 'crypto';
import { random } from 'node-forge';
import { selectOne } from 'css-select';
var done = [];
var mem = []
// import Wrapper from "./Components/Wrapper/index"
class App extends Component {

  state = {
    images,
    score:0
  };

  losses =()=>{
    let lossscore = this.state.score;
    lossscore--;
    this.setState({score:lossscore})
  }
  wins =() =>{
    let winscore = this.state.score;
    winscore++;
    this.setState({score: winscore})

  }

  imgmatch = (id) =>{
    console.log(this.state.images, id)
    
    for(var i= 0; i< done.length; i++){
      if(id == done[i]) {
        console.log("matched")
        // return false
        this.losses()
        // return false;
      }else
      this.wins() 
    }
    // if(score < 1){
    //   console.log("looser")
    // }
    // const images = this.state.images.filter(image => image.id !== id);
    done.push(id)
    // this.setState({images})
  }
  
  shuffleImage = id => {
    // 
    this.imgmatch(id);
    let newImages = this.state.images
    newImages = newImages.sort(function() { return 0.5 - Math.random() });
    this.setState({images:newImages})
  };

  render() {
    return (
      <div key={images.id}>
        <Nav
        // wins={this.wins}
        score = {this.state.score}
        // losses = {this.state.score}
        />
        <div className="outerContainer">
        {this.state.images.map(image => (
          <Game
            shuffleImage={this.shuffleImage}
            id={image.id}
            key={image.id}
            name={image.name}
            image={image.image}
          />
        ))}
        </div>
      </div>
    )
  }
}
export default App;
