import React from 'react'
import { Link } from 'react-router-dom'

const VideoCard = ({ trackName, artworkUrl100, kind, trackId }) => (
  <div>
    <Link to={`/videos/${trackId}`}>
      <div className='video-card-wrapper'>
        <h1>{trackName}</h1>
        <img src={artworkUrl100} alt={kind} />
      </div>
    </Link>
  </div>
)

export default VideoCard
