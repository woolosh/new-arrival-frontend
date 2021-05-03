import React from "react"
import axios from "axios"
import { NavLink } from "react-router-dom"

// imported components
import "./Menubar.css"

const Menubar = ({ ...props }) => {
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

  // for LikedCompanies functionality

  return (
    <div>
      <div className="menu-box">
        <div>
          <NavLink to="/" exact className="menu-text" activeClassName="current">
            Home
          </NavLink>
        </div>
        <div>
          <NavLink to="/login" className="menu-text" activeClassName="current">
            Log In
          </NavLink>
        </div>
        <div>
          <NavLink to="/signup" className="menu-text" activeClassName="current">
            Sign Up
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/liked_companies"
            className="menu-text"
            activeClassName="current"
          >
            Your List
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/logout"
            className="menu-text"
            activeClassName="current"
            onClick={handleClick}
          >
            Log Out
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Menubar
