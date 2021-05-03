import React from "react"
import axios from "axios"
import { useState, useEffect } from "react"

// imported components
import SavedCoPage from "./SavedCoPage"

const LikedCompanies = ({ isLoggedIn, user, company, companyList }) => {
  const [likedCos, setLikedCos] = useState([])
  const [userCos, setUserCos] = useState([])
  const [currentUser, setCurrentUser] = useState({})
  const id = company

  // const componentDidUpdate = () => {
  //   LikedCompanies()
  // }

  // get a logged-in user to persist && retrieve liked_companies
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

    console.log(likedCos)
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

  //for each company id in list, check through company list
  //if there is a match then set that company to state
  //this will filter through all of the companies
  //it will then build a list of the company information based on liked companies
  // const showCompanies = () => {}

  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-md-center">
          <button onClick={filterUserCos}>See Your List</button>
          {userCos.map((company) => (
            <SavedCoPage company={company} key={company.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default LikedCompanies

// <button onClick={showUser}>show User</button>
