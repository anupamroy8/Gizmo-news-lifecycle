import React from "react";
import Header from "./Header";
import Channels from "./Channels";



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
        
      </>
    );
  }
}

export default App;
