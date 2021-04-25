import { useState } from "react"
import React from "react"
import axios from "axios"

import Headbar from "./Headbar"
import Menubar from "./Menubar"
import HomeMessage from "./HomeMessage"
import SearchResults from "./SearchResults"
import CoPage from "./CoPage"
// import LikedCompanies from "./LikedCompanies"

const Homepage = ({ companyList, handleLogout, user, ...props }) => {
  const [searchText, setSearchText] = useState("")
  const [view, setView] = useState("")
  const [company, setCompany] = useState(null)

  const changeSearchText = (event) => {
    setSearchText(event.target.value)
  }

  const changeToSearch = () => {
    setView("Search Results")
  }

  const changeToHome = () => {
    setView("Home Message")
  }

  // const changeToSaved = () => {
  //   setView("Liked Companies")
  // }

  const changeToCoPage = (co) => {
    setView("Company Page")
    setCompany(co)
  }

  const filteredSearch = () => {
    return companyList.filter((co) => {
      for (const service of co.services) {
        if (service.name.includes(searchText.toLowerCase())) {
          return co
          console.log(co)
        }
      }
    })
  }

  //styling for homepage
  const homePageStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }

  return (
    <div>
      <Headbar
        {...props}
        changeToHome={changeToHome}
        handleLogout={handleLogout}
      />
      <Menubar
        changeSearchText={changeSearchText}
        filteredSearch={filteredSearch}
        changeToSearch={changeToSearch}
      />

      {view === "Search Results" ? (
        <SearchResults
          changeToCoPage={changeToCoPage}
          filteredsearch={filteredSearch()}
        />
      ) : null}
      {view === "Home Message" ? <HomeMessage /> : null}
      {view === "Company Page" ? (
        <CoPage
          {...company}
          {...props}
          user={user}
          changeToSearch={changeToSearch}
        />
      ) : null}
    </div>
  )
}

export default Homepage

// {view === "Liked Companies" ? <LikedCompanies /> : null}
