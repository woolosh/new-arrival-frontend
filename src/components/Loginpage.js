import React, { Component } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

// imported components
import Headbar from "./Headbar"
import Menubar from "./Menubar"

class Loginpage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      errors: "",
    }
  }

  componentWillMount() {
    return this.props.loggedInStatus ? this.redirect() : null
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { username, password } = this.state

    let user = {
      username: username,
      password: password,
    }

    axios
      .post("http://localhost:3000/login", { user }, { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in) {
          this.props.handleLogin(response.data)
          this.redirect()
        } else {
          this.setState({
            errors: response.data.errors,
          })
        }
      })
      .catch((error) => console.log("api errors:", error))
  }

  redirect = () => {
    this.props.history.push("/")
  }

  handleErrors = () => {
    return (
      <div>
        <ul>
          {this.state.errors.map((error) => {
            return <li key={error}>{error}</li>
          })}
        </ul>
      </div>
    )
  }

  showUser = () => {
    console.log(this.props.user)
  }

  render() {
    const { username, password } = this.state

    return (
      <div>
        <Headbar />
        <Menubar />
        <div className="box">
          <h1 className="title-text">Log In</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              placeholder="username"
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
            <input
              placeholder="password"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            <button placeholder="submit" type="submit">
              Log In
            </button>
            <div>
              or <Link to="/signup">Sign Up</Link>
            </div>
          </form>
          <div>{this.state.errors ? this.handleErrors() : null}</div>
        </div>
      </div>
    )
  }
}

export default Loginpage
