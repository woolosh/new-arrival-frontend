import axios from "axios"
import { useEffect } from "react"

const SavedCoPage = ({ user, company, likedCompanyList }) => {
  const {
    id,
    like,
    name,
    description,
    add_street,
    add_city,
    add_state,
    add_zip,
    phone,
    website,
    hours,
    services,
  } = company
  // let likedCos = []

  // useEffect(() => {
  //   likedCos = JSON.parse(localStorage.getItem("likedCos"))
  //   console.log(likedCos)
  // }, [])

  // Note. You have to grab the state object user, get it's id, and pass in the body of the delete request
  const handleDelete = () => {
    console.log("company id is: " + company.id)
    console.log("user id is: " + user.id)
    console.log(likedCompanyList)
    likedCompanyList.map((co) => {
      if (co.company_id === company.id && co.user_id === user.id) {
        console.log(co)
        let index = likedCompanyList.indexOf(co)
        likedCompanyList.splice(index, 1)
        axios.delete(`http://localhost:3000/liked_companies/${co}`, {
          withCredentials: true,
        })
        alert(company.name + " has been removed your list!")
        // window.location.reload()
      }
      console.log(likedCompanyList)
    })
  }

  // filterUserCos()
  return (
    <div
      style={{
        boxShadow: "0 5px 10px 1px",
        padding: "7px",
      }}
    >
      <div className="col-sm-3 mb-1">
        <div className="card text-center">
          <div company={company} className="title-text">
            <span>
              <h2 className="title-text">{name}</h2>
            </span>
            <button onClick={handleDelete}>
              Remove From Your List {like}{" "}
            </button>
            <p className="title-text">{description}</p>
            <div>
              <h3 className="title-text">Services:</h3>
              <ul>
                {services.map((service) => (
                  <li key={service.id} className="title-text">
                    {service.name}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="title-text">Address:</h3>
              <p>{add_street}</p>
              <p>
                {add_city}, {add_state} {add_zip}
              </p>
              <h3 className="title-text">Phone:</h3>
              <p>{phone}</p>
              <h3 className="title-text">Hours:</h3>
              <p>{hours}</p>

              <a target="_blank" href="{website}" className="sub-link-text">
                {website}
              </a>
            </div>
          </div>
          <div className="card-footer"></div>
        </div>
      </div>
    </div>
  )
}

export default SavedCoPage
