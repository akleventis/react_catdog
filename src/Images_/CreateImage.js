import React, { Component}  from "react";


class CreateImage extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] }
  }

  componentDidMount() {
    fetch("https://api.thecatapi.com/v1/images/search ")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          item: data[0].url.toString()
        });
      });
  }

  render() {
    const data = this.state;
    let cls = this.props.className
    return <img alt="cat" className={cls} src={data.item}></img>;
  }
}

export default CreateImage;
