import React from "react"
import axios from "axios"
import { NavLink } from "react-router-dom"

// imported components
import "./Menubar.css"

const Menubar = ({ changeToHome, handleLogout, changeToLogout, ...props }) => {
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
        props.handleLogout()
        props.history.push("/")
      })
      .catch((error) => console.log(error))
  }

  return (
    <div
      style={{
        boxShadow: "10px 10px 10px 10px",
        padding: "1px",
      }}
    >
      <div style={menuStyle} className="menu-box">
        <div>
          <NavLink
            to="/"
            exact
            activeClassName="current"
            onClick={changeToHome}
          >
            Home
          </NavLink>
        </div>
        <div>
          <NavLink to="/login" activeClassName="current">
            Log In
          </NavLink>
        </div>
        <div>
          <NavLink to="/signup" activeClassName="current">
            Sign Up
          </NavLink>
        </div>
        <div>
          <NavLink to="/liked_companies" activeClassName="current">
            Your List 😌
          </NavLink>
        </div>
        <div>
          <NavLink to="/logout" activeClassName="current" onClick={handleClick}>
            Log Out
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Menubar
