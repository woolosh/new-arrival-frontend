import React, { Component } from "react"
import axios from "axios"
import { BrowserRouter, Switch, Route } from "react-router-dom"

// imported components
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
    }
  }

  // showUser = () => {
  //   console.log(this.state.user.id)
  // }

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
    console.log(this.state.user)
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {},
    })
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

  // fetch for companies
  componentDidMount() {
    axios
      .get("http://localhost:3000/companies")
      .then((companies) => this.setState({ companyList: companies.data }))
    console.log(this.state.companyList)
    this.loginStatus()
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Homepage
                  {...props}
                  companyList={this.state.companyList}
                  handleLogout={this.handleLogout}
                  loggedInStatus={this.state.isLoggedIn}
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
                  companyList={this.state.companyList}
                  handleLogin={this.handleLogin}
                  loggedInStatus={this.state.isLoggedIn}
                />
              )}
            />

            <Route exact path="/logout" render={() => <Logoutpage />} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
