import React from "react"

// components
import CoCard from "./CoCard"

const SearchResults = ({ filteredSearch, changeToCoPage }) => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-md-center">
        {filteredSearch.map((company) => (
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
