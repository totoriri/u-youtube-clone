import React from 'react'
import Header from "../header/Header"
import Style from "./Layout.module.scss"
const layout = ({children}) => {
  return (
    <div className={Style.wrapper}>
      <Header />
      <div className={Style.main}>
        {children}
      </div>
    </div>
  )
}

export default layout
