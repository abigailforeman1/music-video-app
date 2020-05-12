import React from 'react'
import { Link } from 'react-router-dom'

import Loading from '../common/Loading'

const LikedVideos = () => {
  const likedVideos = JSON.parse(localStorage.getItem('likedVideos'))
  console.log('first console log', likedVideos)
  // const likedVideos = JSON.parse(JSONlikedVideos)
  // console.log('got from local storage', likedVideos)

  // if (!likedVideos) return (
  //   <div className='main-wrapper'>
  //     <h1 className='search-title'>NO FAVE TUNES!</h1>
  //   </div>
  // )
  
  if (!likedVideos) return <Loading />

  return (
    
    <div className='main-wrapper'>
      <h1 className='search-title'>FAVE TUNES!</h1>
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
