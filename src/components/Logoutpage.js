import React from "react"
import { NavLink } from "react-router-dom"

const Logoutpage = () => {
  return (
    <div>
      <div className="box">
        <h1 className="title-text">You are logged out</h1>
      </div>
      <div className="box">
        <NavLink to="/login" className="sub-link-text">
          Click Here to Log In
        </NavLink>
      </div>
      <div className="box">
        <NavLink to="/signup" className="sub-link-text">
          Click Here to Sign Up
        </NavLink>
      </div>
    </div>
  )
}

export default Logoutpage
