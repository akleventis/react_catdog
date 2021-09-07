import React from "react";

interface IProps {
  url: string;
  className: string;
  key: number;
}
interface IState {
  item: string;
}
class CreateImage extends React.Component<IProps, IState>{
  constructor(props: IProps) {
    super(props);
    this.state = { item: '' };
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