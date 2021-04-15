const CoCard = ({ company, changeToCoPage }) => {
  return (
    <div
      style={{
        boxShadow: "0 5px 10px 1px",
        padding: "7px",
      }}
    >
      <div className="col-sm-3 mb-1">
        <div className="card text-center">
          <div onClick={() => changeToCoPage(company)} className="card-body">
            <h4 className="card-title">{company.name}</h4>
            <ul className="card-text">ADDRESS: {company.add_street}</ul>
            <ul className="card-text">
              {company.add_city},{company.add_state} {company.add_zip}
            </ul>
            <ul className="text-muted">
              PHONE: {company.phone}, HOURS: {company.hours}
            </ul>
          </div>
          <div className="card-footer"></div>
        </div>
      </div>
    </div>
  )
}

export default CoCard
