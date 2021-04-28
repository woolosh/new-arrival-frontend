import React from "react"
import axios from "axios"
import { useState, useEffect } from "react"

// imported components
import Headbar from "./Headbar"
import Menubar from "./Menubar"
import CoPage from "./CoPage"

const LikedCompanies = ({ companyList, user }) => {
  const [likedCos, setLikedCos] = useState([])
  const [userCos, setUserCos] = useState([])
  const [currentUser, setCurrentUser] = useState({})

  useEffect(async () => {
    if (!localStorage.getItem("user")) {
      console.log("no user")
    } else {
      let user = JSON.parse(localStorage.getItem("user"))
      setCurrentUser(user)
    }
    axios
      .get("http://localhost:3000/liked_companies")
      .then((response) => setLikedCos(response.data))
    filterUserCos()

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
      if (co.user_id === currentUser.id) {
        list.push(co.company_id)
      }
    }

    for (let id of list) {
      companyList.filter((co) => {
        if (co.id === id) {
          renderList.push(co)
        }
      })
    }
    setUserCos(renderList)
  }

  // const componentDidUpdate = () => {
  //   LikedCompanies()
  // }

  //for each company id in list, check through company list
  //if there is a match then set that company to state
  //this will filter through all of the companies
  //it will then build a list of the company information based on liked companies
  // const showCompanies = () => {}

  return (
    <div>
      <Headbar />
      <Menubar />
      <div className="container mt-5">
        <div className="row justify-content-md-center">
          {userCos.map((company) => (
            <CoPage company={company} key={company.id} />
          ))}
        </div>
        <button onClick={filterUserCos}>See Your List</button>
      </div>
    </div>
  )
}

export default LikedCompanies

// <button onClick={showUser}>show User</button>
