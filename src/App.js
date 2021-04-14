import React, { Component } from "react"

// components
import Headbar from "./components/Headbar"
import Menubar from "./components/Menubar"
import Homepage from "./components/Homepage"
import SearchContainer from "./components/SearchContainer"

export default class App extends Component {
  state = {
    view: "Home",
  }

  changeToHome = () => this.setState({ view: "Home" })

  changeToSearch = () => this.setState({ view: "Search Results" })

  render() {
    return (
      <>
        <Headbar changeToHome={this.changeToHome} />
        <Menubar changeToSearch={this.changeToSearch} />
        {this.state.view === "Home" ? <Homepage /> : null}
        {this.state.view === "Search Results" ? <SearchContainer /> : null}
      </>
    )
  }
}
