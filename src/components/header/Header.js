import React,{useState,useEffect,useContext} from 'react'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Style from "./Header.module.scss"
import { useHistory } from "react-router-dom"
import {Store} from "../../store/index"

const Header = () => {
  const [term, setTerm] = useState("")
  const history = useHistory()
  const { globalState, setGlobalState} = useContext(Store)
  const handleSubmit = e => {
    e.preventDefault();
    setGlobalState({type:"SET_TERM",payload: {term}})
    history.push(`/search?query=${term}`)
    console.log(history)
  }

  useEffect(() => {
    setTerm(globalState.term)
  },[])
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
