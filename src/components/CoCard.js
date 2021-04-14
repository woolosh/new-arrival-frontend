const CoCard = ({ company }) => {
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
    <div className="col-sm-3 mb-1">
      <div className="card text-center">
        <div className="card-body">
          <p className="card-title">{name}</p>
          <span className="card-text">
            {add_street} {add_city}, {add_state} {add_zip}
          </span>
          <div>
            <span className="text-muted">
              Phone: {phone}, Hours: {hours}
            </span>
          </div>
        </div>
        <div className="card-footer"></div>
      </div>
    </div>
  )
}

export default CoCard
