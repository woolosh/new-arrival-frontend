import React, { Component } from "react"
import axios from "axios"
import { BrowserRouter, Switch, Route } from "react-router-dom"

// components
import Homepage from "./components/Homepage"
import Loginpage from "./components/Loginpage"
import Signuppage from "./components/Signuppage"
// import Logoutpage from "./components/Logoutpage"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      user: {},
    }
  }
  showUser = () => {
    console.log(this.state.user)
  }

  componentDidMount() {
    this.loginStatus()
  }

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
    console.log(this.state.user)
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {},
    })
    console.log(this.state.user)
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
                  handleLogout={this.handleLogout}
                  loggedInStatus={this.state.isLoggedIn}
                  showUser={this.showUser}
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
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
