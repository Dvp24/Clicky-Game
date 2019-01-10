import React, { Component } from 'react';
import "./style.css"

function Game(props) {
  return (
    // <div className="content">
    <span onClick={() => props.shuffleImage(props.id)} className="shuffle">
          {/* <div className="img-container"> */}
            <img className="imageSize" alt={props.name} src={props.image} />
          {/* </div> */}
        </span>
      // </div>
  );
}
export default Game;