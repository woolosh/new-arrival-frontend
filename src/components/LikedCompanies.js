import React from "react"
import axios from "axios"
import { useState, useEffect } from "react"

// imported components
import SavedCoPage from "./SavedCoPage"

const LikedCompanies = ({ user, companyList, likedCompanyList }) => {
  const [userCos, setUserCos] = useState([])

  // get a logged-in user to persist && retrieve liked_companies
  useEffect(() => {
    console.log(likedCompanyList)
    filterUserCos()
  }, [])

  // //this is a list of companies that the user has liked
  const filterUserCos = () => {
    let list = []
    let renderList = []
    for (let co of likedCompanyList) {
      if (co.user_id === user.id) {
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
