// import { useState, useEffect } from "react"
import axios from "axios"

const CoPage = ({
  company,
  user,
  companyList,
  likedCompanyList,
  getLikedCompanies,
  changeToSearch,
  showUser,
  setLikedCo,
  ...props
}) => {
  // const [userLikedCos, setUserLikedCos] = useState([])
  // const [likedCos, setLikedCos] = useState([])

  const {
    // id,
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

  //next step is create a User's saved company list - to render the saved backend.
  const handleSave = () => {
    let list = []
    let renderList = []
    for (let co of likedCompanyList) {
      if (co.user_id === user.id) {
        list.push(co.company_id)
      }
    }

    for (let id of list) {
      companyList.filter((co) => {
        if (co.id === id) {
          renderList.push(co.id)
        }
      })
    }

    if (!renderList.includes(company.id)) {
      axios
        .post(
          "http://localhost:3000/liked_companies",
          {
            company_id: company.id,
            user_id: user.id,
          },
          { withCredentials: true }
        )
        .then((res) => console.log(res))
        .catch((error) => console.log(error))
      alert(company.name + " has been added to your list!")
      window.location.reload()
    } else {
      alert(company.name + " is already on your list 😁")
    }

    console.log(company.id)
    console.log(user.id)
  }

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
            <button onClick={changeToSearch}>Back to Search Results</button>{" "}
            <button onClick={handleSave}>Save to Your List {like} </button>
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

              <a
                target="_blank"
                href={website}
                onClick={website}
                className="sub-link-text"
              >
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

export default CoPage

//next step is create a User's saved company list - to render the saved backend.
// const handleSave = () => {
// setCoList([...coList, { company_id: company.id, user_id: user.id }])

// const saveToLikedCo = (id) => {
//   if (!userLikedCos.includes(id)) {
//     setLikedCos({ likedCos: [...userLikedCos, id] })
//   }
// }

//   axios
//     .post(
//       "http://localhost:3000/liked_companies",
//       {
//         company_id: company.id,
//         user_id: user.id,
//       },
//       { withCredentials: true }
//     )
//     .then((res) => console.log(res))
//     .catch((error) => console.log(error))
//   console.log(company.id)
//   console.log(user.id)
// }
