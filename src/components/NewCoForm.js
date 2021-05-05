import React, { Component } from "react"

export default class NewCoForm extends Component {
  state = {
    name: "",
    description: "",
    add_street: "",
    add_city: "",
    add_state: "",
    add_zip: "",
    phone: "",
    website: "",
    hours: "",
    services: []
  }

  handleSubmit = (e) => {
    e.preventDefault()

    let newCo = {
        like: false,
        name: this.state.name,
        description: this.state.description,
        add_street: this.state.add_street,
        add_city: this.state.add_city,
        add_state: this.state.add_state
        add_zip: this.state.add_zip,
        phone: this.state.phone,
        website: this.state.website,
        hours: this.state.hours,
        services: []
    }

    let reqObj = {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(newCo),
    }

    fetch(URL, reqObj)
      .then((r) => r.json())
      .then((newCompany) => {
        this.props.addnewCompany(newCompany)
        this.setState({
            name: "",
            description: "",
            add_street: "",
            add_city: "",
            add_state: "",
            add_zip: "",
            phone: "",
            website: "",
            hours: "",
            services: []
        })
      })
  }

  render() {
    return (
      <>
        <h3 className="title-text">Want to Help?</h3>
        <form
          onSubmit={this.handleSubmit}
          className="mb-4 p-3 border border-primary"
        >
          <div className="form-group">
            <label htmlFor="co-name">Name</label>
            <input
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
              type="text"
              className="form-control"
              id="co-name"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="co-image">Description</label>
            <input
              value={this.state.image}
              onChange={(e) => this.setState({ image: e.target.value })}
              type="text"
              className="form-control"
              id="co-image"
              placeholder="image URL"
            />
          </div>
          <div className="form-group">
            <label htmlFor="co-house">House</label>
            <input
              value={this.state.house}
              onChange={(e) => this.setState({ house: e.target.value })}
              type="text"
              className="form-control"
              id="co-house"
              placeholder="Enter email"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </>
    )
  }
}
