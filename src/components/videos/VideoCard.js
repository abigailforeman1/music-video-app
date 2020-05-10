import React from 'react'
import { Link } from 'react-router-dom'

const VideoCard = ({ trackName, artistName, trackId, count, primaryGenreName, country }) => (
  <Link to={`/${trackId}`} style={{ textDecoration: 'none' }}>
    <div className='video-card-main'>
    
      <div className='number video-card-wrapper'>
        <p>{count}</p>
      </div>

      <div className='track video-card-wrapper'>
        <p>{trackName}</p>
      </div>

      <div className='artist video-card-wrapper'>
        <p>{artistName}</p>
      </div>

      <div className='country video-card-wrapper'>
        <p>{country}</p>
      </div>

      <div className='genre video-card-wrapper'>
        <p>{primaryGenreName}</p>
      </div>

    </div>
  </Link>
)

export default VideoCard
