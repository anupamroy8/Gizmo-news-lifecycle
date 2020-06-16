import React from "react";
import Header from "./Header";
import Channels from "./Channels";
import Body from "./Body"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "null",
    };
  }

  render() {
    return (
      <>
        <Header/>
        <Channels/>
        <Body/>
      </>
    );
  }
}

export default App;
