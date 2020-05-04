import React from 'react'
import { getSingleVideo } from '../../lib/api'

import LikeButton from '../common/LikeButton'

class VideoShow extends React.Component {
  state = {
    video: null
  }

  async componentDidMount () {
    try {
      const videoId = this.props.match.params.id
      const res = await getSingleVideo(videoId)
      this.setState({ video: res.data.results[0] })
    } catch (err) {
      this.props.history.push('./error')
    }
  }

  render () {
    const video = this.state.video
    if (!this.state.video) return null
    const newReleaseTime = video.releaseDate.slice(0, 10)
    return (
      <>
        <LikeButton
          likedVideos={video}
        />

        <h1>{video.trackName}</h1>
        <h2>{video.artistName}</h2>
        <p>{video.collectionName}</p>
        <p>{video.country}</p>
        <p>{video.primaryGenreName}</p>
        <p>{newReleaseTime}</p>

        <a href={video.previewUrl} target='_blank' rel='noopener noreferrer'>
          <button>watch preview</button>
        </a>
        <img src={video.artworkUrl100} alt={video.artistName} />
      </>
    )
  }
}

export default VideoShow
