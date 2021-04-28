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
          <NavLink to="/" onClick={changeToHome}>
            Home
          </NavLink>
        </div>
        <div>
          <NavLink to="/login">Log In</NavLink>
        </div>
        <div>
          <NavLink to="/signup">Sign Up</NavLink>
        </div>
        <div>
          <NavLink to="/liked_companies">Your List 😌</NavLink>
        </div>
        <div>
          <NavLink
            to="/logout"
            onClick={handleClick}
            changeToLogout={changeToLogout}
          >
            Log Out
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Menubar
