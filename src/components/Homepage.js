import React from "react"
import { useState } from "react"

// imported components
import Headbar from "./Headbar"
import Menubar from "./Menubar"
import Searchbar from "./Searchbar"
import HomeMessage from "./HomeMessage"
import SearchResults from "./SearchResults"
import CoPage from "./CoPage"

const Homepage = ({
  companyList,
  handleLogout,
  loggedInStatus,
  user,
  ...props
}) => {
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

  const changeToLogout = () => {
    setView("Logout")
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
      <Headbar />
      <header>
        <Menubar
          {...props}
          changeToHome={changeToHome}
          handleLogout={handleLogout}
          loggedInStatus={loggedInStatus}
          changeToLogout={changeToLogout}
        />
      </header>
      <Searchbar
        changeSearchText={changeSearchText}
        filteredSearch={filteredSearch}
        changeToSearch={changeToSearch}
      />
      {view === "Home Message" ? <HomeMessage /> : null}

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
