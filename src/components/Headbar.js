import axios from "axios"
import React from "react"
import { Link } from "react-router-dom"
// import { BrowserRouter, Switch, Route } from "react-router-dom"
// import { useHistory } from "react-router"
import "./Headbar.css"

const Headbar = ({ changeToHome, changeToSaved, handleLogout, ...props }) => {
  const headerStyle = {
    display: "flex",
    flexDirection: "column",
  }

  // logout functionality
  const handleClick = () => {
    axios
      .delete("http://localhost:3000/logout", { withCredentials: true })
      .then((response) => {
        console.log(response)
        localStorage.clear()
        handleLogout()
        props.history.push("/")
      })
      .catch((error) => console.log(error))
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
        <span>
          <Link to="/" onClick={changeToHome}>
            Home
          </Link>
          <Link to="/login">Log In</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/liked_companies">Your List</Link>
          {props.loggedInStatus ? (
            <Link to="/logout" onClick={handleClick}>
              Log Out
            </Link>
          ) : null}
        </span>
      </div>
    </div>
  )
}

export default Headbar
