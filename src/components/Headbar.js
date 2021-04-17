import React from "react"
import { Link } from "react-router-dom"

const Headbar = ({ changeToHome }) => {
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
        <h1 onClick={changeToHome} style={{ margin: "auto" }}>
          New Arrival
        </h1>
        <h4 style={{ margin: "auto" }}>PREGNANCY ASSISTANCE</h4>
        <Link to="/">Home</Link>
        <Link to="/login">Log In</Link>
        <br></br>
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  )
}

export default Headbar
