import React, { Component}  from "react";


class CreateImage extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  };

  componentDidMount() {
    fetch(this.props.url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          item: data[0].url.toString()
        });
      });
  };

  render() {
    return <img alt=" " className={this.props.className} src={this.state.item}></img>
  };
};

export default CreateImage;