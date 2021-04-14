import React, { Component } from "react"

// components
import Headbar from "./components/Headbar"
import Menubar from "./components/Menubar"
import Homepage from "./components/Homepage"
import SearchResults from "./components/SearchResults"
import CoPage from "./components/CoPage"

export default class App extends Component {
  state = {
    view: "Home",
    companies: [],
  }

  // filteredCompanies() {
  //   const filteredCompanies = this.state.companies.filter((company) =>
  //     company.name.toLowerCase()
  //   )
  // }

  componentDidMount = async () => {
    const res = await fetch("http://localhost:3000/companies")
    const companies = await res.json()
    this.setState({ companies })
  }

  changeToHome = () => this.setState({ view: "Home" })

  changeToSearch = () => this.setState({ view: "Search Results" })

  changeToCoPage = () => this.setState({ view: "Company Page" })

  render() {
    return (
      <>
        <Headbar changeToHome={this.changeToHome} />

        <Menubar changeToSearch={this.changeToSearch} {...this.state} />

        {this.state.view === "Home" ? <Homepage /> : null}

        {this.state.view === "Search Results" ? (
          <SearchResults changeToCoPage={this.changeToCoPage} {...this.state} />
        ) : null}

        {this.state.view === "Company Page" ? <CoPage {...this.state} /> : null}
      </>
    )
  }
}
