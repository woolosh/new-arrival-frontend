import React from "react"

const HomeMessage = () => {
  return (
    <div className="box">
      <div className="title-text">
        This site contains resources for those in need during their time of
        pregnancy (and even a little beyond).
        <br></br>
        If you would like to save information and return later, please create an
        account by clicking on the Sign Up button above.
        <br></br>
        If you have needs outside of the scope of this website, and you live in
        Texas, please also visit:{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.211texas.org"
          className="sub-link-text"
        >
          https://www.211texas.org
        </a>{" "}
        or dial and call 2-1-1 from your phone.
      </div>
    </div>
  )
}

export default HomeMessage
