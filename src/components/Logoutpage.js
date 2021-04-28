import React from "react"
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
    </div>
  )
}

export default Logoutpage
