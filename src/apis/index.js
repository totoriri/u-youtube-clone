import axios from "axios"

const KEY = "AIzaSyAuH9NSVkEqBObNzteiOuRATpgyqgMW7eg"

const youtube = axios.create({
  baseURL: "http://www.googleapis.com/youtube/v3"
})

export const fetchPopularData = async () => {
  return await youtube.get("/videos", {
    params: {
      part: "snippet",
      maxResults: 40,
      key: KEY,
      regionCode: "JP",
      type: "video",
      chart: "mostPopular"
    }
  })
}