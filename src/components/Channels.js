import React from "react";

class Channels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: null,
    };
  }

  componentDidMount() {
    console.log("didMount");
    fetch(
      "https://newsapi.org/v2/sources?language=en&country=us&apiKey=d9871a6aba6c4d7c9754bf055f94b3dd"
    )
      .then((res) => res.json())
      .then((data) => this.setState({ channels: data.sources }))
      .catch((err) => console.log(err));
  }

  randomNumber(arr) {
    return Math.floor(Math.random() * (arr.length - 6));
  }

  handleClick(name) {
    console.log("clicked",name);
  }

  render() {
    return (
      <>
        <div className="flex border">
          <button className="btnChannel btn">All</button>
          {this.state.channels
            ? this.state.channels
                .splice(this.randomNumber(this.state.channels), 4)
                .map((data) => {
                  return (
                    <button className="btnChannel btn" onClick={() => this.handleClick(data.id)}>{data.name}</button>
                  );
                })
            : "..Loading"}
        </div>
      </>
    );
  }
}

export default Channels;
