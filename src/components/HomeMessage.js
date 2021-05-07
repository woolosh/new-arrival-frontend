import React from "react"
import { useTranslation } from "react-i18next"

const HomeMessage = () => {
  const { t, i18n } = useTranslation()

  function handleClick(lang) {
    i18n.changeLanguage(lang)
  }

  return (
    <div className="box">
      <nav className="t-bar">
        <button className="t-button" onClick={() => handleClick("en")}>
          English
        </button>
        <button className="t-button" onClick={() => handleClick("sp")}>
          Español
        </button>
        <button className="t-button" onClick={() => handleClick("viet")}>
          Tiếng Việt
        </button>
        <button className="t-button" onClick={() => handleClick("chi")}>
          中國人
        </button>
      </nav>
      <a className="title-text">{t("Purpose.1")}</a>
      <br></br>
      <a className="title-text">{t("Instruction.1")}</a>
      <br></br>
      <a className="title-text">{t("Guide.1")} </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.211texas.org"
        className="sub-link-text"
      >
        https://www.211texas.org
      </a>
    </div>
  )
}

export default HomeMessage
