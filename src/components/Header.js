import React from "react";
import Channels from "./Channels";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      search: null,
      select: "en" || null,
    };
  }

  componentDidMount(){
    //   alert("did mount search")
    fetch(`https://cors-anywhere.herokuapp.com/newsapi.org/v2/everything?q=india&pagesize=60&language=en&apiKey=d9871a6aba6c4d7c9754bf055f94b3dd`)
    .then((res) => res.json())
    .then((data) => this.setState({ search: data.articles }))
    .catch((err) => console.log(err));
  }
  handleChange = (event) => {
    this.setState({ value: event.target.value });
    console.log(this.state,"handleChange")
  };
  handleClick = () => {
    console.log(this.state.value,"hdlclk vle");
    console.log(this.state.select,"hdlclk sel");
    this.setState({search:null})
    fetch(`https://cors-anywhere.herokuapp.com/newsapi.org/v2/everything?q=${this.state.value}&pagesize=60&language=${this.state.select}&apiKey=d9871a6aba6c4d7c9754bf055f94b3dd`)
    .then((res) => res.json())
    .then((data) => this.setState({ search: data.articles }))
    .catch((err) => console.log(err));
  }

  handleSelect = (event) => {
    console.log("selected", event.target.value);
    this.setState({select:event.target.value})
  }
  

  preventDefault = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <>
        <nav className="flex header">
          <h1>Gizmo NEWS</h1>
          <form onClick={this.preventDefault}>
            <input
              type="text"
              onChange={this.handleChange}
              placeholder="search"
              value={this.state.value}
            />
            <button type="submit" onClick={this.handleClick}>
              <i class="fa fa-search" aria-hidden="true"></i>
            </button>
            <select name="select" onChange={this.handleSelect}>
                <option value="en"  selected>en</option>
                <option value="ar" >ar</option>
                <option value="de" >de</option>
                <option value="fr" >fr</option>
                <option value="es" >es</option>
                <option value="he" >he</option>
                <option value="it" >it</option>
                <option value="nl" >nl</option>
                <option value="no" >no</option>
                <option value="pt" >pt</option>
                <option value="ru" >ru</option>
                <option value="se" >se</option>
                <option value="ud" >ud</option>
                <option value="zh" >zh</option>

            </select>
          </form>
        </nav>
        {this.state.search? <Channels search={ this.state.search}/>:"..Loading"}
        
      </>
    );
  }
}

export default Header;
