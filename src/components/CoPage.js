const CoPage = ({ company }) => {
  const {
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
            <h3 className="card-title">{name}</h3>
            <p className="card-title">{description}</p>
            <ul className="card-text">{add_street}</ul>
            <ul className="card-text">
              {add_city}, {add_state} {add_zip}
            </ul>
            <ul className="text-muted">Phone: {phone}</ul>
            <ul className="text-muted">Hours: {hours}</ul>
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

// const CoPage = ({ company }) => {
//     const {
//       name,
//       description,
//       add_street,
//       add_city,
//       add_state,
//       add_zip,
//       phone,
//       website,
//       hours,
//     } = company

//     return (
//       <div className="col-sm-3 mb-1">
//         <div className="card text-center">
//           <div className="card-body">
//             <h3 className="card-title">{name}</h3>
//             <p className="card-title">{description}</p>
//             <ul className="card-text">{add_street}</ul>
//             <ul className="card-text">
//               {add_city}, {add_state} {add_zip}
//             </ul>
//             <ul className="text-muted">
//               Phone: {phone}, Hours: {hours}
//             </ul>
//             <ul className="text-muted">Website: {website}</ul>
//           </div>
//           <div className="card-footer"></div>
//         </div>
//       </div>
//     )
//   }

//   export default CoPage
