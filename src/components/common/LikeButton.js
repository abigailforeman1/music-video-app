import React from 'react'

const likedVideosArray = []

const LikeButton = likedVideos => {
  const addLike = () => {
    likedVideosArray.push(likedVideos.likedVideos)
    localStorage.setItem('likedVideos', JSON.stringify(likedVideosArray))
    console.log('setted in local storage', likedVideosArray)
  }
  return (
    <button className='like-button' onClick={addLike}>ADD TO FAVES</button>
  )
}

export default LikeButton
