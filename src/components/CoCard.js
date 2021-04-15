const CoCard = ({ company, changeToCoPage }) => {
  const {
    name,
    add_street,
    add_city,
    add_state,
    add_zip,
    phone,
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
          <div onClick={changeToCoPage} className="card-body">
            <p className="card-title">{name}</p>
            <ul className="card-text">{add_street}</ul>
            <ul className="card-text">
              {add_city}, {add_state} {add_zip}
            </ul>
            <ul className="text-muted">
              Phone: {phone}, Hours: {hours}
            </ul>
          </div>
          <div className="card-footer"></div>
        </div>
      </div>
    </div>
  )
}

export default CoCard
