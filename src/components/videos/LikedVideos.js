import React from 'react'
import { Link } from 'react-router-dom'

const LikedVideos = () => {
  const JSONlikedVideos = localStorage.getItem('likedVideos')
  const likedVideos = JSON.parse(JSONlikedVideos)

  if (!likedVideos) return <h1>NO FAVE VIDS!</h1>

  return (
    <>
      <h1>FAVE VIDEOS!</h1>

      {likedVideos &&
        likedVideos.map((video, i) => {
          return (
            <div key={i}>
              <Link to={`/videos/${video.trackId}`}>
                <div className='video-card-wrapper'>
                  <h1>{video.trackName}</h1>
                  <img
                    src={video.artworkUrl100}
                    alt={video.kind}
                  />
                </div>
              </Link>
            </div>
          )
        })}
    </>
  )
}

export default LikedVideos
