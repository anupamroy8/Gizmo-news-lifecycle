import React from "react";
import Body from "./Body";

class Channels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: props.search || null,
    };
  }

  componentDidMount() {
    console.log("didMount");
    // fetch(
    //   "https://newsapi.org/v2/sources?language=en&country=us&apiKey=d9871a6aba6c4d7c9754bf055f94b3dd"
    // )
    //   .then((res) => res.json())
    //   .then((data) => this.setState({ channels: data.sources }))
    //   .catch((err) => console.log(err));
  }

  randomNumber(arr) {
    return Math.floor(Math.random() * (arr.length - 6));
  }

  handleClick(name) {
    console.log("clicked",name);
    this.setState({content: null})
    fetch(`https://cors-anywhere.herokuapp.com/newsapi.org/v2/everything?sources=${name}&pagesize=60&language=en&apiKey=d9871a6aba6c4d7c9754bf055f94b3dd`)
    .then((res) => res.json())
    .then((data) => this.setState({ content: data.articles }))
    .catch((err) => console.log(err));
  }

  render() {
    return (
      <>
        <div className="flex border">
          <button className="btnChannel btn active" onClick={() => this.handleClick("&q=india")}>All</button>
          <button className="btnChannel btn" onClick={() => this.handleClick("the-hindu")}>The Hindu</button>
          <button className="btnChannel btn" onClick={() => this.handleClick("the-times-of-india")}>Times of India</button>
          <button className="btnChannel btn" onClick={() => this.handleClick("bbc-news")}>BBC News</button>
          <button className="btnChannel btn" onClick={() => this.handleClick("abc-news")}>ABC News</button>
          <button className="btnChannel btn" onClick={() => this.handleClick("reuters")}>Reuters</button>
          {console.log(this.state.content,"content")}
          {console.log(this.props.search,"serach")}
          
          {/* {this.state.channels
            ? this.state.channels
                .splice(this.randomNumber(this.state.channels), 4)
                .map((data) => {
                  return (
                    <button className="btnChannel btn" onClick={() => this.handleClick(data.id)}>{data.name}</button>
                  );
                })
            : "..Loading"} */}
        </div>
        {this.state.content ? <Body topnews={ this.state.content }/> : "...loading content"}

        {/* <Body topnews={ this.props.search? this.props.search : this.state.content ||this.handleClick("&q=india")}/> */}
      </>
    );
  }
}

export default Channels;
