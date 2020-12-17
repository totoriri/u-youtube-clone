import React from 'react'
import Header from "../header/Header"

const layout = ({children}) => {
  return (
    <div>
      <Header/>
      {children}
    </div>
  )
}

export default layout
