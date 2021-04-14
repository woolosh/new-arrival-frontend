const Headbar = ({ changeToHome }) => {
  const headerStyle = {
    display: "flex",
    flexDirection: "column",
  }

  return (
    <div>
      <div style={headerStyle} className="container">
        <h1 onClick={changeToHome} style={{ margin: "auto" }}>
          New Arrival
        </h1>
        <h4 onClick={changeToHome} style={{ margin: "auto" }}>
          Pregnancy Assistance
        </h4>
      </div>
    </div>
  )
}

export default Headbar
