import React from 'react'
import { Link } from 'react-router-dom'

const LikedVideos = () => {
  const likedVideos = JSON.parse(localStorage.getItem('likedVideos'))
  console.log('first console log', likedVideos)
  // const likedVideos = JSON.parse(JSONlikedVideos)
  // console.log('got from local storage', likedVideos)

  if (!likedVideos) return (
    <div className='main-wrapper'>
      <h1 className='search-title'>NO FAVE VIDS!</h1>
    </div>
  )

  return (
    <div className='main-wrapper'>
      <h1 className='search-title'>Fave Videos</h1>
      <div className='like-main-wrapper'>
        {likedVideos &&
        likedVideos.map((video, i) => {
          return (
            <div className='like-wrapper' key={i}>
              <Link to={`/${video.trackId}`} style={{ textDecoration: 'none' }}>
                <h1 className='liked-title'>{video.trackName}</h1>
                <img
                  src={video.artworkUrl100}
                  alt={video.kind}
                />
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default LikedVideos
