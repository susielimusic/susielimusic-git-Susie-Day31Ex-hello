import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">  
      <body bgcolor="#000000">
        
        <img clasaName="topleft" src="/images/ironhack-logo.svg" alt="Company Logo" />
        <img className="topright" src="/images/menu-top.svg" alt="Hamberger" />

        <div className="container">
        <h1 className="headline"> Say Hello to ReactJS </h1>
        <h3 className="smallTitle"> You will learn a Frontend framework from scratch, to became an Ninka Developer. </h3>
        </div>
        <div>
        <button className="button">Awesome!</button>
        </div>
        </body>

        <footer>
        <div className="flex-container">
        <div>
        <img src="/images/icon1.png" alt="icon1" />;
        <h1 className="icon1"> Declarative </h1>
        <h3 className="icon1_2"> React makes it painless to create interactive UIs.</h3>
        </div>
        <div>
        <img src="/images/icon2.png" alt="icon2" />;
        <h1 className="icon2"> Components </h1>
        <h3 className="icon2_2"> Build encapsulated components that manage their states.</h3>
        </div>
        <div>
        <img src="/images/icon3.png" alt="icon3" />;
        <h1 className="icon3"> Single-Way </h1>
        <h3 className="icon3_2"> A set of immutable values are passed to the component's.</h3>
        </div>
        <div>
        <img src="/images/icon4.png" alt="icon4" />;
        <h1 className="icon4"> JSX </h1>
        <h3 className="icon4_2"> Statically-typed, designed to run on modern browsers.</h3>
        </div>

        </div>
        

        </footer>
      </div>
    );
  }
}

export default App;