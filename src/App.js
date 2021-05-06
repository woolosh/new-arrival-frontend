import React, { Component } from "react"
import axios from "axios"
import { BrowserRouter, Switch, Route } from "react-router-dom"

// imported components
import Headbar from "./components/Headbar"
import Menubar from "./components/Menubar"
import Homepage from "./components/Homepage"
import Loginpage from "./components/Loginpage"
import Signuppage from "./components/Signuppage"
import LikedCompanies from "./components/LikedCompanies"
import Logoutpage from "./components/Logoutpage"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      user: {},
      companyList: [],
      likedCompanyList: [],
    }
  }

  // fetch for companies and mounting loginStatus
  componentDidMount() {
    axios
      .get("http://localhost:3000/companies")
      .then((companies) => this.setState({ companyList: companies.data }))
    this.loginStatus()
  }

  // save or like a company

  // unsave or unlike a company

  // login / logout functions
  loginStatus = () => {
    axios
      .get("http://localhost:3000/logged_in", { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in) {
          this.handleLogin(response)
        } else {
          this.handleLogout()
        }
      })
      .catch((error) => console.log("api errors:", error))
  }

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user,
    })
    if (!localStorage.getItem("user")) {
      localStorage.setItem("user", JSON.stringify(this.state.user))
    }
    this.getLikedCompanies()
    console.log(this.state.user)
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {},
    })
    console.log(this.state.user)
  }

  getLikedCompanies() {
    //first we get the COMPLETE list of companies that have been liked
    if (!localStorage.getItem("user")) {
      console.log("no user")
    } else {
      let user = JSON.parse(localStorage.getItem("user"))
      this.setState({ user: user })
    }
    axios.get("http://localhost:3000/liked_companies").then((response) => {
      localStorage.setItem("likedCos", JSON.stringify(response.data))
      this.setState({ likedCompanyList: response.data })
    })

    this.allUserInfo()
  }

  allUserInfo() {
    console.log(this.state.companyList)
    console.log(this.state.likedCompanyList)
    console.log(this.state.user)
  }
  // this function checks if a User is logged in each time the App loads.
  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("user");
  //   if (loggedInUser) {
  //     const foundUser = JSON.parse(loggedInUser);
  //     setUser(foundUser);
  //   }
  // }, [])

  render() {
    return (
      <div>
        <BrowserRouter>
          <Headbar />
          <Menubar
            user={this.state.user}
            loggedInStatus={this.state.loggedInStatus}
            handleLogout={this.handleLogout}
          />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Homepage
                  {...props}
                  companyList={this.state.companyList}
                  loggedInStatus={this.state.isLoggedIn}
                  likedCompanyList={this.state.likedCompanyList}
                  companyList={this.state.companyList}
                  user={this.state.user}
                />
              )}
            />
            <Route
              exact
              path="/login"
              render={(props) => (
                <Loginpage
                  {...props}
                  handleLogin={this.handleLogin}
                  loggedInStatus={this.state.isLoggedIn}
                />
              )}
            />

            <Route
              exact
              path="/signup"
              render={(props) => (
                <Signuppage
                  {...props}
                  handleLogin={this.handleLogin}
                  loggedInStatus={this.state.isLoggedIn}
                />
              )}
            />

            <Route
              exact
              path="/liked_companies"
              render={(props) => (
                <LikedCompanies
                  {...props}
                  handleLogin={this.handleLogin}
                  loggedInStatus={this.state.isLoggedIn}
                  likedCompanyList={this.state.likedCompanyList}
                  companyList={this.state.companyList}
                  user={this.state.user}
                />
              )}
            />

            <Route
              exact
              path="/logout"
              render={() => <Logoutpage handleLogout={this.handleLogout} />}
            />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
