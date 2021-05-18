import React from "react"

import Caret from "../../assets/si-sprite.svg"
import * as styles from "./styles.module.scss"

const IsiHeader = () => {
  return (
    <>
      <div
        style={{
          height: 24,
          color: "#eb3300",
          backgroundColor: "#d7d2cb",
          lineHeight: "1.5",
          fontWeight: 700,
          padding: "3px",
        }}
      >
        &nbsp;&nbsp;&nbsp;&nbsp;WHAT IS SYMTUZA®?
        <Caret className={styles.caretSvg} />
      </div>
    </>
  )
}

export default IsiHeader
