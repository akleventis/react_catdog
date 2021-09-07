import React from "react";
import AddImage from "./Images_/AddImage";
import Header from './headers/Header';
import Footer from "./headers/Footer";
import './App.css'

interface IState {
  isCat: boolean;
}
class App extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isCat: true
    };
  };

  isCatHandler = (flag: boolean): void => {
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