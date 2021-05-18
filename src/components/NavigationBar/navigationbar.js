import React from "react"
import { Link } from "gatsby"
import ButtonGuides from "../PDFButtons/pdfbuttons"
import ButtonNavigation from "../NavigationButtons/navigationbuttons"

import * as styles from "./navigationbar.module.scss"

const NavigationBar = ({ navigation }) => {
  let continueBtn
  if (navigation.continue) {
    continueBtn = (
      <Link to={navigation.continueLink} style={{ textDecoration: "none" }}>
        <ButtonNavigation
          text={navigation.continueTxt}
          forwardDirection={true}
        />
      </Link>
    )
  }

  let backBtn
  if (navigation.back) {
    backBtn = (
      <Link to={navigation.backLink} style={{ textDecoration: "none" }}>
        <ButtonNavigation text={navigation.backTxt} forwardDirection={false} />
      </Link>
    )
  }

  return (
    <div className={styles.navbar}>
      <ButtonGuides text="Prescribing Information" />
      <div className={styles.navbtns}>
        {backBtn}
        {continueBtn}
      </div>
    </div>
  )
}

export default NavigationBar
