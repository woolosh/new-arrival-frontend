const CoCard = ({ company, changeToCoPage }) => {
  const {
    name,
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
          <div
            onClick={() => changeToCoPage({ company })}
            className="card-body"
          >
            <h2 className="title-text">{name}</h2>
            <div>
              <h4 className="title-text">Services:</h4>
              <ul>
                {services.map((service) => (
                  <li key={service.id} className="title-text">
                    {service.name}
                  </li>
                ))}
              </ul>
            </div>
            <h4 className="title-text">Address:</h4>
            <ul className="title-text">
              {add_street}
              {add_city},{add_state} {add_zip}
            </ul>
            <ul className="title-text">
              PHONE: {phone}, HOURS: {hours}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoCard
