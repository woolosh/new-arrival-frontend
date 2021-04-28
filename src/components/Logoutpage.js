import React from "react"
import { Link } from "react-router-dom"

// imported components
import Headbar from "./Headbar"
import Menubar from "./Menubar"

const Logoutpage = () => {
  return (
    <div>
      <Headbar />
      <Menubar />
      <div className="box">
        <h1 className="title-text">You are logged out</h1>
      </div>
      <div className="box">
        <Link to="/login" className="sub-link-text">
          Click Here to Log In
        </Link>
      </div>
      <div className="box">
        <Link to="/signup" className="sub-link-text">
          Click Here to Sign Up
        </Link>
      </div>
    </div>
  )
}

export default Logoutpage
