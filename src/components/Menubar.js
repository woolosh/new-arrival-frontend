import axios from "axios"
import React from "react"
import { Link } from "react-router-dom"
// import { BrowserRouter, Switch, Route } from "react-router-dom"
// import { useHistory } from "react-router"
import "./Menubar.css"

const Menubar = ({ changeToHome, handleLogout, ...props }) => {
  const menuStyle = {
    display: "flex",
    flexDirection: "row",
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
      <div style={menuStyle} className="menu-box">
        <div>
          <Link to="/" onClick={changeToHome}>
            Home
          </Link>
        </div>
        <div>
          <Link to="/login">Log In</Link>
        </div>
        <div>
          <Link to="/signup">Sign Up</Link>
        </div>
        <div>
          <Link to="/liked_companies">Your List</Link>
        </div>
        <div>
          {props.loggedInStatus ? (
            <Link to="/logout" onClick={handleClick}>
              Log Out
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Menubar
