import React, { Component } from "react"

import CoCard from "./CoCard"

export default class SearchResults extends Component {
  state = {
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

  render() {
    return (
      <div className="container mt-5">
        <div className="row justify-content-md-center">
          {this.state.companies.map((company) => (
            <CoCard company={company} />
          ))}
        </div>
      </div>
    )
  }
}
