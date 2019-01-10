import React, { Component } from 'react';
import "./style.css"

const Nav = (props) => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg">
      <a className="navbar-brand" href="#">Clicky Game</a>
      {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> */}
      <div >
        <ul className="navbar-nav">
          <li className="nav-item color">
            <span >score: {props.score}</span>
          </li>
          {/* <li className="nav-item color">
            <span >losses: {props.losses}</span>
          </li> */}
        </ul>
      </div>
    </nav>
  )

}


export default Nav;