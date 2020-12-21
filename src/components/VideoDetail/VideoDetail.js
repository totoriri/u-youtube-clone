import React,{useEffect,useContext} from 'react'
import { useLocation } from "react-router-dom"
import {Store} from "../../store/index"
import { fetchSelectedData } from "../../apis/index"
import VideoPlay from "../VideoPlay/VideoPlay"

const VideoDetail = () => {
  const {globalState,setGlobalState} = useContext(Store)
  const location = useLocation();
  const setSelectedVideo = async () => {
    const searchParams = new URLSearchParams(location.search)
    const id = searchParams.get("v")
    // console.log("id", id)
    await fetchSelectedData(id).then((res) => {
      console.log("res", res)
      const item = res.data.items.shift()
      setGlobalState({ type: "SET_SELECTED",payload: {selected: item}})
    })
  }
  useEffect(() => {
    setSelectedVideo();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return globalState.selected&& globalState.selected.id?(
    <div>
      <VideoPlay id={globalState.selected.id} />
      <p>{globalState.selected.snippet.title}</p>
    </div>
  ):(<span>No data</span>)
}

export default VideoDetail
