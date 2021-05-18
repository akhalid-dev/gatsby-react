import React from "react"
import * as styles from "./navigationbuttons.module.scss"

const ButtonNavigation = ({ text, forwardDirection }) => {
  if (forwardDirection) {
    return <div className={styles.btnForward}>{text}</div>
  }
  return <div className={styles.btnBackwards}>{text}</div>
}

export default ButtonNavigation
