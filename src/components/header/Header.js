import React,{useState,useEffect} from 'react'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Style from "./Header.module.scss"
import {useHistory} from "react-router-dom"

const Header = () => {
  const [term, setTerm] = useState("")
  const history = useHistory()
  const handleSubmit = e => {
    e.preventDefault();
    history.push(`/search?query=${term}`)
    console.log(history)
  }
  return (
    <div className={Style.header}>
      <div className={Style.item}>
        <Link to="/">VideoTube</Link>
      </div>
      <div className={Style.item}>
        <form onSubmit={handleSubmit}>
          <input
            type="text" placeholder="検索窓"
            onChange={e=>setTerm(e.target.value) } value={term}
          />
          <button type="submit"><FontAwesomeIcon icon={faSearch}/></button>
        </form>
      </div>
    </div>
  )
}

export default Header
