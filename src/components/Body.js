import React from "react";

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      featured: null,
      topHeadlines: null,
      topStories: null,
    };
  }

  componentDidMount() {
    console.log("didMount");
    fetch(
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=d9871a6aba6c4d7c9754bf055f94b3dd"
    )
      .then((res) => res.json())
      .then((data) => this.setState({ topHeadlines: data.articles }))
      .catch((err) => console.log(err));
    fetch(
      "https://newsapi.org/v2/everything?sources=the-times-of-india&pagesize=60&language=en&apiKey=d9871a6aba6c4d7c9754bf055f94b3dd"
    )
      .then((res) => res.json())
      .then((data) => this.setState({ featured: data.articles }))
      .catch((err) => console.log(err));
    // fetch(
    //   "https://newsapi.org/v2/everything?sources=cnn&pagesize=60&language=en&apiKey=d9871a6aba6c4d7c9754bf055f94b3dd"
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data.articles);
    //     this.setState({ topStories: data.articles });
    //   })
    //   .catch((err) => console.log(err));
  }

  randomFeature(arr) {
    return Math.floor(Math.random() * (arr.length - 1));
  }
  randomStories(arr) {
    var abc = Math.floor(Math.random() * (arr.length - 7));
    console.log(abc);
    return abc;
  }
  render() {
    return (
      <>
        <div className="border grid">
          
            {this.state.featured
              ? this.state.featured
                  .splice(this.randomFeature(this.state.featured), 1)
                  .map((data) => {
                    return(
                    <div className="card featured flex">
                      <img
                        className="featureImg"
                        src={data.urlToImage}
                      />
                      <div>
                        <div className="flex">
                        <span className="source">{data.source.name}</span>
                          <span className="left">
                            {new Date(data.publishedAt).toDateString().slice(4)}
                          </span>
                        </div>
                        <h2>
                          {data.title}
                        </h2>
                        <p>
                          {data.content? data.content.slice(0,-14):"..Loading"}
                        </p>
                        <p>{data.author}</p>
                        <div class="stage">
                          <a className="readmore" href="{data.url}">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                    )
                  })
              : "...Loading"}
          

          <div className="card headlines">
            <h2>Top Headlines</h2>
            <div>
              {this.state.topHeadlines
                ? this.state.topHeadlines.slice(0, 10).map((data) => {
                    return (
                      <>
                        <div className="flex">
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
                : ""}
            </div>
          </div>

          {/* {this.state.topStories
            ? this.state.topStories
                .splice(this.randomStories(this.state.topStories), 6)
                .map((data) => {
                  return (
                    <div className="card">
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

                        <h3>{data.description}</h3>
                        <p>{data.author}</p>
                        <a href={data.url} target="_blank">
                          Read more..
                        </a>
                      </div>
                    </div>
                  );
                })
            : ""} */}

          {this.props.topnews
            ? this.props.topnews
                .splice(this.randomStories(this.props.topnews), 6)
                .map((data) => {
                  return (
                    <div className="card">
                      <img
                        className="imgResponsive"
                        src={
                          (data.urlToImage !== null)
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

                        <h3>{data.description}</h3>
                        <p>{data.author}</p>
                        <a href={data.url} target="_blank">
                          Read more..
                        </a>
                      </div>
                    </div>
                  );
                })
            : ""}
        </div>
      </>
    );
  }
}

export default Body;
