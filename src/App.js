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
    searchText: "",
    company: null,
  }

  componentDidMount = async () => {
    const res = await fetch("http://localhost:3000/companies")
    const companies = await res.json()
    this.setState({ companies })
  }

  changeToHome = () => this.setState({ view: "Home" })

  changeToSearch = () => this.setState({ view: "Search Results" })

  changeToCoPage = (company) =>
    this.setState({ view: "Company Page", company: company })

  changeSearchText = (event) => {
    this.setState({ searchText: event.target.value })
  }

  filteredSearch = () => {
    return this.state.companies.filter((company) =>
      company.name.toLowerCase().includes(this.state.searchText.toLowerCase())
    )
  }

  render() {
    return (
      <>
        <Headbar changeToHome={this.changeToHome} />

        <Menubar
          {...this.state}
          changeToSearch={this.changeToSearch}
          changeSearchText={this.changeSearchText}
          filteredSearch={this.filteredSearch}
        />

        {this.state.view === "Home" ? <Homepage /> : null}

        {this.state.view === "Search Results" ? (
          <SearchResults
            changeToCoPage={this.changeToCoPage}
            filteredSearch={this.filteredSearch()}
          />
        ) : null}

        {this.state.view === "Company Page" ? (
          <CoPage {...this.state} changeToSearch={this.changeToSearch} />
        ) : null}
      </>
    )
  }
}
