import React from "react"
import "./App.css"

const Searchbar = ({ changeToSearch, changeSearchText }) => {
  return (
    <div>
      <div className="box">
        <h1 className="title-text" style={{ margin: "auto" }}>
          Search
        </h1>
        <h4 className="title-text">
          diapers, food, healthcare, housing, financial assistance
        </h4>
        <div>
          <input
            onClick={changeToSearch}
            onChange={changeSearchText}
            type="search"
            className="form-control"
            id="search-text"
            placeholder="Search Here For Items"
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
