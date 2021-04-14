const Homepage = () => {
  const homePageStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }

  return (
    <div style={homePageStyle}>
      <h1>Find help for you and your little ones</h1>
      <p>
        This site contains resources for those in need during their time of
        pregnancy (and a little beyond).
      </p>
      <p>
        If you would like to save information and return later,please create an
        account by clicking on the ACCOUNT button above.
      </p>
      <p>
        If you have needs outside of the scope of this website, and you live in
        Texas, please also visit:{" "}
        <a target="_blank" href="https://www.211texas.org">
          https://www.211texas.org
        </a>{" "}
        or dial and call 2-1-1 from your phone.
      </p>
    </div>
  )
}

export default Homepage
