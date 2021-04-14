import React, { Component } from "react"

import SearchResults from "./SearchResults"
import CoPage from "./CoPage"

export default class SearchContainer extends Component {
  state = {
    view: "Search Results",
  }

  changeToSearch = () => this.setState({ view: "Search Results" })

  render() {
    return (
      <>
        {this.state.view === "Search Results" ? <SearchContainer /> : null}
        {this.state.view === "click on Company card" ? <CoPage /> : null}
      </>
    )
  }
}
