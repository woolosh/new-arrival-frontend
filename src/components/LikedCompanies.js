import { useState, useEffect } from "react"
import React from "react"
import axios from "axios"

// components
import Headbar from "./Headbar"
import CoCard from "./CoCard"

const LikedCompanies = ({ companyList, showUser, user, ...props }) => {
  const [likedCos, setLikedCos] = useState([])
  const [userCos, setUserCos] = useState([])

  useEffect(async () => {
    axios
      .get("http://localhost:3000/liked_companies")
      .then((response) => setLikedCos(response.data))
    console.log(companyList)
    console.log(likedCos)
    console.log(user)
  }, [])

  //this is a list of companies that the user has liked
  const filteredCompanies = () => {
    let list = []
    for (let co of likedCos) {
      if (co.user_id === user.id) {
        list.push(co)
      }
    }
    setUserCos(list)
    console.log(userCos)
  }

  //this will filter through all of the companies
  //it will then build a list of the company information based on liked companies
  const showCompanies = () => {}

  return (
    <div>
      <Headbar />
      <div className="container mt-5">
        <div className="row justify-content-md-center">
          this is the liked company page
        </div>
        <button onClick={showUser}>show User</button>
        <button onClick={filteredCompanies}>show User</button>
      </div>
    </div>
  )
}

export default LikedCompanies
