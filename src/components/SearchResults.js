import React from "react"

// components
import CoCard from "./CoCard"

const SearchResults = ({ filteredsearch, changeToCoPage }) => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-md-center">
        {filteredsearch.map((company) => (
          <CoCard
            company={company}
            key={company.id}
            changeToCoPage={changeToCoPage}
          />
        ))}
      </div>
    </div>
  )
}

export default SearchResults
