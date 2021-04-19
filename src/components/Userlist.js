import React, { Component } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

// components
import Headbar from "./Headbar"
import CoCard from "./CoCard"

const Userlist = ({ showCo }) => {
  return (
    <div>
      <Headbar />
      <div className="container mt-5">
        <div className="row justify-content-md-center">
          This is the User List Page
        </div>
      </div>
    </div>
  )
}

export default Userlist
