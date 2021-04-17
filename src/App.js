import React, { Component } from "react"
import axios from "axios"
import { BrowserRouter, Switch, Route } from "react-router-dom"

// components
import Homepage from "./components/Homepage"
import Loginpage from "./components/Loginpage"
import Signuppage from "./components/Signuppage"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      user: {},
    }
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
      user: data.data.user,
    })
    console.log(data)
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
            <Route exact path="/" component={Homepage} />
            <Route exact path="/login" component={Loginpage} />
            <Route exact path="/signup" component={Signuppage} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
