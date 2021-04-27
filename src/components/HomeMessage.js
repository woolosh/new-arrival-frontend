import React from "react"

const HomeMessage = () => {
  //styling for homepage
  const homeMessageStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }

  return (
    <div className="box">
      <div style={homeMessageStyle}>
        <a>Help for you and your little ones</a>
        <br></br>
        This site contains resources for those in need during their time of
        pregnancy (and even a little beyond).
        <br></br>
        If you would like to save information and return later, please create an
        account by clicking on the LOG IN button above.
        <br></br>
        If you have needs outside of the scope of this website, and you live in
        Texas, please also visit:{" "}
        <a target="_blank" href="https://www.211texas.org">
          https://www.211texas.org
        </a>{" "}
        or dial and call 2-1-1 from your phone.
      </div>
    </div>
  )
}

export default HomeMessage
