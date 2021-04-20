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
    console.log(userCos)
  }, [])

  //this is a list of companies that the user has liked
  const filterUserCos = () => {
    let list = []
    let renderList = []
    for (let co of likedCos) {
      if (co.user_id === user.id) {
        list.push(co.company_id)
      }
    }

    for (let id of list) {
      companyList.filter((co) => {
        if (co.id == id) {
          renderList.push(co)
        }
      })
    }
    setUserCos(renderList)
  }

  //for each company id in list, check through company list
  //if there is a match then set that company to state
  //this will filter through all of the companies
  //it will then build a list of the company information based on liked companies
  const showCompanies = () => {}

  return (
    <div>
      <Headbar />
      <div className="container mt-5">
        <div className="row justify-content-md-center">
          {userCos.map((company) => (
            <CoCard company={company} key={company.id} />
          ))}
        </div>
        <button onClick={showUser}>show User</button>
        <button onClick={filterUserCos}>show User</button>
      </div>
    </div>
  )
}

export default LikedCompanies
