const CoPage = ({ company, changeToSearch }) => {
  const {
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

  return (
    <div
      style={{
        boxShadow: "0 5px 10px 1px",
        padding: "7px",
      }}
    >
      <div className="col-sm-3 mb-1">
        <div className="card text-center">
          <div company={company} className="card-body">
            <span>
              <h2 className="card-title">
                {name}
                <button> Save{like}</button>
              </h2>
            </span>
            <button onClick={changeToSearch}>Back to Search Results</button>
            <p className="card-title">{description}</p>
            <div>
              <h3>Services:</h3>
              <ul>
                {services.map((service) => (
                  <li>{service.name}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="card-text">Address:</h3>
              <p>{add_street}</p>
              <p>
                {add_city}, {add_state} {add_zip}
              </p>
              <h3 className="card-text">Phone:</h3>
              <p>{phone}</p>
              <h3 className="card-text">Hours:</h3>
              <p>{hours}</p>
              <p className="text-muted"></p>
              <a target="_blank" href="{website}">
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
