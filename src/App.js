import React, { Component }from "react";
import AddImage from "./Images_/AddImage";
import Header from './headers/Header';
import Footer from "./headers/Footer";
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      isCat: true
    };
  };

  isCatHandler = (flag) => {
    this.setState({isCat: flag});
  };

  render () {
    return (
      <div>
      <Header onSwitch={this.isCatHandler} />
      <AddImage isCat={this.state.isCat}/>
      <Footer />
    </div>
    )
  }
}

export default App;