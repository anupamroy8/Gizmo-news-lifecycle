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
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=d9871a6aba6c4d7c9754bf055f94b3dd"
    )
      .then((res) => res.json())
      .then((data) => this.setState({ topHeadlines: data.articles }))
      .catch((err) => console.log(err));
    fetch(
      "https://newsapi.org/v2/everything?sources=cnn&pagesize=60&language=en&apiKey=d9871a6aba6c4d7c9754bf055f94b3dd"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.articles);
        this.setState({ topStories: data.articles });
      })
      .catch((err) => console.log(err));
  }

  randomHeadlines(arr) {
    return Math.floor(Math.random() * (arr.length - 10));
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
        <div className="card featured">
            <div className="flex">
              <img
                className="featureImg"
                src="https://i.dailymail.co.uk/1s/2020/06/15/13/29627166-0-image-a-11_1592225228212.jpg"
              />
              <div>
                <div className="flex">
                  <span className="source">ABC</span>
                  <span className="left">
                    Jun 17 2020
                    {/* {new Date(data.publishedAt).toDateString().slice(4)} */}
                  </span>
                </div>
                <h2>
                  Coronavirus: Minnesota cases fall despite George Floyd
                  protests - Daily Mail
                </h2>
                <p>
                  "Early coronavirus testing for George Floyd protesters in
                  Minnesota is showing that one in 70 Black Lives Matter
                  protesters have tested positive for COVID-19."
                </p>
                <div class="stage">
                  <a className="readmore" href="#">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="card headlines">
            <h2>Top Headlines</h2>
            <div>              
              {this.state.topHeadlines
                ? this.state.topHeadlines
                    .splice(this.randomHeadlines(this.state.topHeadlines), 10)
                    .map((data) => {
                      return (
                        <>
                          <div className="flex">
                            <span className="source">{data.source.name}</span>
                            <span className="left">
                              {new Date(data.publishedAt)
                                .toDateString()
                                .slice(4)}
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



          {this.state.topStories
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
            : ""}
        </div>
      </>
    );
  }
}

export default Body;
