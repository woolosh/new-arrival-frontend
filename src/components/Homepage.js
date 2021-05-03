import React from "react"
import { useState } from "react"

// imported components
import Searchbar from "./Searchbar"
import HomeMessage from "./HomeMessage"
import SearchResults from "./SearchResults"
import CoPage from "./CoPage"

const Homepage = ({ companyList, loggedInStatus, user, ...props }) => {
  const [searchText, setSearchText] = useState("")
  const [view, setView] = useState("")
  const [company, setCompany] = useState(null)

  // const changeToHome = () => {
  //   setView("Home Message")
  // }

  // const changeToSaved = () => {
  //   setView("Liked Companies")
  // }

  const changeToCoPage = (co) => {
    setView("Company Page")
    setCompany(co)
  }

  // const changeToLogout = () => {
  //   setView("Logout")
  // }

  const changeSearchText = (event) => {
    setSearchText(event.target.value)
  }

  const changeToSearch = () => {
    setView("Search Results")
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

  return (
    <div>
      <Searchbar
        changeSearchText={changeSearchText}
        filteredSearch={filteredSearch}
        changeToSearch={changeToSearch}
      />
      <HomeMessage />

      {view === "Search Results" ? (
        <SearchResults
          changeToCoPage={changeToCoPage}
          filteredsearch={filteredSearch()}
        />
      ) : null}
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
