import React, { Component } from "react"

// components
import CoCard from "./CoCard"
import CoPage from "./CoPage"

export default class SearchResults extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row justify-content-md-center">
          {this.props.companies.map((company) => (
            <CoCard
              company={company}
              key={company.id}
              changeToCoPage={this.props.changeToCoPage}
            />
          ))}
        </div>
      </div>
    )
  }
}
