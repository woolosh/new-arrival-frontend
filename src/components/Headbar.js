const Headbar = ({ changeToHome }) => {
  const headerStyle = {
    display: "flex",
    flexDirection: "column",
  }

  return (
    <div
      style={{
        boxShadow: "0 1px 10px 1px",
        padding: "1px",
      }}
    >
      <div style={headerStyle} className="container">
        <h1 onClick={changeToHome} style={{ margin: "auto" }}>
          New Arrival
        </h1>
        <h4 onClick={changeToHome} style={{ margin: "auto" }}>
          PREGNANCY ASSISTANCE
        </h4>
      </div>
    </div>
  )
}

export default Headbar
