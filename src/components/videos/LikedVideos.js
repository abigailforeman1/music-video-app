import React from 'react'
import { getSingleVideo } from '../../lib/api'

class LikedVideos extends React.Component {
  state = {
    likedVideos: null
  }


  async componentDidMount () {
    try {

      const JSONlikedVideos = localStorage.getItem('likedVideos')
      const likedVideosDisplay = JSON.parse(JSONlikedVideos)
      // console.log(likedVideosDisplay)
      // console.log(likedVideosDisplay[0].videoId.trackId)

      likedVideosDisplay.map(video => {
        console.log(video)
        const res = getSingleVideo(video)
        console.log(res)
      })

      // const res = await getSingleVideo(likedVideosDisplay)
      // console.log(res.data.results)
      // this.setState({ likedVideos: res.data.results })
    } catch (err) {
      this.props.history.push('./error')
    }
  }

  render () {
    if (!this.state.likedVideos) return null
    // console.log(this.state.likedVideos)
    return (
      <h1>LIKED VIDEOS</h1>
    )
  }
}

export default LikedVideos
