import React from "react"
import NavigationBar from "../NavigationBar/navigationbar"
import * as styles from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={styles.layout}>
      {props.children}
      <NavigationBar navigation={props.navigation} />
    </div>
  )
}

export default Layout
