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
              <h3 className="card-title">
                {name}
                <button> Save{like}</button>
              </h3>
            </span>
            <button onClick={changeToSearch}>Back to Search Results</button>
            <p className="card-title">{description}</p>
            <ul className="card-text">ADDRESS:</ul>
            <ul className="card-text">{add_street}</ul>
            <ul className="card-text">
              {add_city}, {add_state} {add_zip}
            </ul>
            <ul className="card-text">PHONE: {phone}</ul>
            <ul className="card-text">HOURS: {hours}</ul>
            <ul className="text-muted">
              <a target="_blank" href="{website}">
                {website}
              </a>{" "}
            </ul>
          </div>
          <div className="card-footer"></div>
        </div>
      </div>
    </div>
  )
}

export default CoPage
