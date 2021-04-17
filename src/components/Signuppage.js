import React, { Component, useDebugValue } from "react"
import axios from "axios"
import Headbar from "./Headbar"

class Signuppage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      email: "",
      password: "",
      password_confirmation: "",
      errors: "",
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { username, password, password_confirmation } = this.state
    let user = {
      username: username,
      password: password,
      password_confirmation: password_confirmation,
    }

    axios
      .post("http://localhost:3000/users", { user }, { withCredentials: true })
      .then((response) => {
        if (response.data.status === "created") {
          this.props.handleLogin(response.data)
          console.log(response.data)
          this.redirect()
        } else {
          this.setState({ errors: response.data.errors })
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
            return <li key={error}> {error}</li>
          })}
        </ul>
      </div>
    )
  }

  render() {
    const { username, password, password_confirmation } = this.state
    return (
      <div>
        <Headbar />
        <h1>Sign Up</h1>
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
          <input
            placeholder="password confirmation"
            type="password"
            name="password_confirmation"
            value={password_confirmation}
            onChange={this.handleChange}
          />
          <button placeholder="submit" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    )
  }
}

export default Signuppage
