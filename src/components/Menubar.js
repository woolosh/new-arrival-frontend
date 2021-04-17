import React from "react"

const Menubar = ({ changeToSearch, changeSearchText, filteredSearch }) => {
  const headerStyle = {
    display: "flex",
    flexDirection: "column",
    color: "green",
  }

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <div style={headerStyle} className="container">
        <h2 style={{ margin: "auto" }} htmlFor="search-text">
          Search For Help
        </h2>
        <h4 style={{ margin: "auto" }}>
          food, healthcare, housing, financial assistance
        </h4>
        <span style={{ margin: "auto" }}>
          <input
            onClick={changeToSearch}
            onChange={changeSearchText}
            type="search"
            className="form-control"
            id="search-text"
            placeholder="Click Here To Search"
          ></input>
        </span>
      </div>
    </div>
  )
}

export default Menubar

// <input
// style={{ margin: "auto" }}
// type="text"
// className="form-control"
// id="search-text"
// placeholder="Search for Service or Company"
// />
