import React, { Component } from 'react';
import './headers.css'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCat: true
        };
    }


    handleSwitch = () => {
        this.setState({ isCat: !this.state.isCat }, () => this.props.onSwitch(this.state.isCat))
    }

    render() {
        const headerText = `${this.state.isCat ? 'Cats with React 🐈' : 'Dogs with React 🐶'}`;
        const buttonText = `...${!this.state.isCat ? 'cats' : 'dogs'} are better?`;
        return (
            <header className="headers">{headerText}
            <button className="dog-button" onClick={this.handleSwitch}>{buttonText}</button>
            </header>
        )
    }
}

export default Header;