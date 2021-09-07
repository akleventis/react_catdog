import React from "react";
import "./headers.css";
import image from "./images/react_typescript.png";

interface IProps {
  onSwitch: (arg0: boolean) => void;
}
interface IState {
  isCat: boolean;
}

class Header extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isCat: true,
    };
  }

  handleSwitch = (): void => {
    this.setState({ isCat: !this.state.isCat }, () => this.props.onSwitch(this.state.isCat));
  };

  render() {
    const headerText: string = `${this.state.isCat ? "Cats! 🐈" : "Dogs! 🐶"}`;
    const buttonText: string = `...${!this.state.isCat ? "cats" : "dogs"} are better?`;
    return (
      <header className="headers">
        <img className='logo' alt='' src={image} />
        {headerText}
        <button className="dog-button" onClick={this.handleSwitch}>
        {buttonText}
        </button>
      </header>
    );
  }
}

export default Header;
