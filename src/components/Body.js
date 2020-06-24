import React from "react";
import uuid from "react-uuid";

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      featured: null,
      topHeadlines: null,
      topStories: null,
      abc: null,
    };
  }

  componentDidMount() {
    // console.log("didMount");
    fetch(
      "https://cors-anywhere.herokuapp.com/newsapi.org/v2/top-headlines?country=in&apiKey=d9871a6aba6c4d7c9754bf055f94b3dd"
    )
      .then((res) => res.json())
      .then((data) => this.setState({ topHeadlines: data.articles }))
      .catch((err) => console.log(err));
    fetch(
      "https://cors-anywhere.herokuapp.com/newsapi.org/v2/everything?sources=the-times-of-india&pagesize=60&language=en&apiKey=d9871a6aba6c4d7c9754bf055f94b3dd"
    )
      .then((res) => res.json())
      .then((data) => this.setState({ featured: data.articles }))
      .catch((err) => console.log(err));
    if (this.props.topnews) {
      console.log(this.props.topnews, "topnews");
      this.setState({ abc: this.shuffle(this.props.topnews) });
    }
  }

  shuffle = (array) => {
    console.log(array, "first");
    var currentIndex = array.length - 1,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    console.log(array, "last");
    return array;
  };

  render() {
    return (
      <>
        <div className="border grid">
          {/*  */}
          {/* {console.log(this.props.topnews)} */}
          {/*  */}
          {this.state.abc ? (
            this.state.abc.slice(0, 1).map((data) => {
              return (
                <>
                  <div key={uuid()} className="card featured flex">
                    <img className="featureImg" src={data.urlToImage} />
                    <div>
                      <div className="flex">
                        <span className="source">{data.source.name}</span>
                        <span className="left">
                          {new Date(data.publishedAt).toDateString().slice(4)}
                        </span>
                      </div>
                      <h2>{data.title}</h2>
                      <p className="author">{data.author}</p>
                      <p>
                        {data.content
                          ? data.content.slice(0, -14)
                          : "..Loading"}
                      </p>
                      <div className="stage">
                        <a className="readmore" href={data.url} target="_blank">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <div className="lds-hourglass"></div>
          )}

          <div className="card headlines">
            <h2>Top Headlines</h2>
            <div>
              {this.state.topHeadlines ? (
                this.state.topHeadlines.slice(0, 10).map((data) => {
                  return (
                    <>
                      <div key={uuid()} className="flex">
                        <span className="source">{data.source.name}</span>
                        <span className="left">
                          {new Date(data.publishedAt).toDateString().slice(4)}
                        </span>
                      </div>

                      <div className="topheadline">
                        {data.title}
                        <br />
                        <a href={data.url} target="_blank">
                          Read more..
                        </a>
                        <br />
                      </div>
                    </>
                  );
                })
              ) : (
                <div className="lds-hourglass"></div>
              )}
            </div>
          </div>

          {this.state.abc ? (
            this.state.abc.slice(1, 7).map((data) => {
              return (
                <div key={uuid()} className="card">
                  <img
                    className="imgResponsive"
                    src={
                      data.urlToImage !== null
                        ? data.urlToImage
                        : "https://us.123rf.com/450wm/pe3check/pe3check1710/pe3check171000054/88673746-stock-vector-no-image-available-sign-internet-web-icon-to-indicate-the-absence-of-image-until-it-will-be-download.jpg?ver=6]"
                    }
                    alt={data.title}
                  />
                  <div>
                    <div className="flex">
                      <span className="source">{data.source.name}</span>
                      <span className="left">
                        {new Date(data.publishedAt).toDateString().slice(4)}
                      </span>
                    </div>
                    <p className="author">{data.author}</p>
                    <h3>{data.description}</h3>

                    <a href={data.url} target="_blank">
                      Read more..
                    </a>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="lds-hourglass"></div>
          )}
        </div>
      </>
    );
  }
}

export default Body;
