// import axios from "axios"
import React from "react"
// import { Link } from "react-router-dom"
// import { BrowserRouter, Switch, Route } from "react-router-dom"
// import { useHistory } from "react-router"
import "./App.css"

const Headbar = () => {
  const headerStyle = {
    display: "flex",
    flexDirection: "column",
  }

  return (
    <div
      style={{
        boxShadow: "0 1px 10px 1px",
        padding: "1px",
      }}
    >
      <div style={headerStyle} className="container">
        <h1 style={{ margin: "auto" }}>New Arrival</h1>
        <h4 style={{ margin: "auto" }}>PREGNANCY ASSISTANCE</h4>
      </div>
    </div>
  )
}

export default Headbar
