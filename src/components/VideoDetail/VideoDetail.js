import React,{useEffect,useContext} from 'react'
import {Store} from "../../store/index"
import VideoPlay from "../VideoPlay/VideoPlay"
import Style from "./VideoDetail.module.scss"
import Linkify from "react-linkify"

const VideoDetail = () => {
  const {globalState,setGlobalState} = useContext(Store)
  // #12で削除
  // const location = useLocation();
  // const setSelectedVideo = async () => {
  //   const searchParams = new URLSearchParams(location.search)
  //   const id = searchParams.get("v")
  //   // console.log("id", id)
  //   await fetchSelectedData(id).then((res) => {
  //     console.log("res", res)
  //     const item = res.data.items.shift()
  //     setGlobalState({ type: "SET_SELECTED",payload: {selected: item}})
  //   })
  // }
  // useEffect(() => {
  //   setSelectedVideo();
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // },[location.search])
  return globalState.selected&& globalState.selected.id?(
    <div className={Style.wrap}>
      <VideoPlay id={globalState.selected.id} />
      <p>{globalState.selected.snippet.title}</p>
      <hr />
      <Linkify>
        <pre> {globalState.selected. snippet.description}</ pre>
      </Linkify>
    </div>
  ):(<span>No data</span>)
}

export default VideoDetail
