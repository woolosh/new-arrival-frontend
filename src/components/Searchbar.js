import React from "react"
import "./App.css"

const Searchbar = ({ changeToSearch, changeSearchText, filteredSearch }) => {
  return (
    <div>
      <div className="box">
        <h1 className="title-text">Search For Help</h1>
        <h4 className="title-text">
          food, healthcare, housing, financial assistance
        </h4>
        <div>
          <input
            onClick={changeToSearch}
            onChange={changeSearchText}
            type="search"
            className="form-control"
            id="search-text"
            placeholder="Click Here To Filter Search"
          ></input>
        </div>
      </div>
    </div>
  )
}

export default Searchbar

// <input
// style={{ margin: "auto" }}
// type="text"
// className="form-control"
// id="search-text"
// placeholder="Search for Service or Company"
// />
