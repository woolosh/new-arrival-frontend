import { useState } from "react"
import React from "react"
import axios from "axios"

import Headbar from "./Headbar"
import Menubar from "./Menubar"
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

  // const changeToList = () => {
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
      <Headbar {...props} handleLogout={handleLogout} />
      <Menubar
        changeSearchText={changeSearchText}
        filteredSearch={filteredSearch}
        changeToSearch={changeToSearch}
      />
      <div style={homePageStyle}>
        <a>Help for you and your little ones</a>
        <br></br>
        This site contains resources for those in need during their time of
        pregnancy (and even a little beyond).
        <br></br>
        If you would like to save information and return later, please create an
        account by clicking on the LOG IN button above.
        <br></br>
        If you have needs outside of the scope of this website, and you live in
        Texas, please also visit:{" "}
        <a target="_blank" href="https://www.211texas.org">
          https://www.211texas.org
        </a>{" "}
        or dial and call 2-1-1 from your phone.
      </div>
      {view === "Search Results" ? (
        <SearchResults
          changeToCoPage={changeToCoPage}
          filteredsearch={filteredSearch()}
        />
      ) : null}
      {view === "Company Page" ? (
        <CoPage {...company} user={user} changeToSearch={changeToSearch} />
      ) : null}
    </div>
  )
}

export default Homepage
