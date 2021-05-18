import React, { useState, useEffect } from "react"
import * as styles from "./styles.module.scss"
import * as cheerio from "cheerio"
import Layout from "../Components/Layout/layout"

const App = () => {
  const navBar = {
    continue: true,
    continueTxt: "Continue",
    continueLink: "",
    back: true,
    backTxt: "Back",
    backLink: "/optin",
  }
  const [isiContent, setisiContent] = useState({ __html: "" })
  const [content, setContent] = useState({ __html: "" })

  useEffect(() => {
    fetch("http://localhost:1337/campaigns")
      .then(res => res.json())
      .then(res => {
        console.log(res)
        const $ = cheerio.load(res[3].Content)
        $("img").each((index, element) => {
          const old = $(element).attr("src")
          const newSrc = "http://localhost:1337" + old
          $(element).attr("src", newSrc)
        })
        setContent({ __html: $.html() })
        setisiContent({ __html: res[3].ISI })
      })
  }, [])

  const [classes, setClasses] = useState({
    content: styles.contentUnExp,
    isi: styles.isiDivUnExp,
  })

  const handleClick = () => {
    if (classes.content == styles.contentUnExp) {
      setClasses({
        content: styles.contentExp,
        isi: styles.isiDivExp,
      })
    } else {
      setClasses({
        content: styles.contentUnExp,
        isi: styles.isiDivUnExp,
      })
    }
  }

  return (
    <Layout navigation={navBar}>
      <div id="content" className={styles.content + " " + classes.content}>
        <div dangerouslySetInnerHTML={content}></div>
      </div>

      <div
        id="isiDrawer"
        className={styles.isiDiv + " " + classes.isi}
        onClick={handleClick}
      >
        <div dangerouslySetInnerHTML={isiContent}></div>
      </div>
    </Layout>
  )
}

export default App
