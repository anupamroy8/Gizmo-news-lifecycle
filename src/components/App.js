import React from "react";
import Header from "./Header";

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
      </>
    );
  }
}

export default App;
