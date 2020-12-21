import React, { createContext, useReducer } from 'react'

const initialState = {
  popular:[]
}

const reducer = ({ state, action }) => {
  switch (action.type) {
    case "SET_POPULAR":
      return { popular: action.payload.popular }
    default:
      return state
  }
}

export const Store = createContext({
  grobalState: initialState,
  setGlobalState: () => null
})

const storeProvider = ({children}) => {
  const [globalState,setGlobalState] = useReducer(reducer,initialState)
  return (
    <Store.provider value={{grobalState,setGrobalState}}></Store.provider>
  )
}

export default storeProvider

