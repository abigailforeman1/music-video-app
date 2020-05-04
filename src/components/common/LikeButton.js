import React from 'react'

const likedVideosArray = []

const LikeButton = likedVideos => {
  const addLike = () => {
    likedVideosArray.push(likedVideos.likedVideos)
    localStorage.setItem('likedVideos', JSON.stringify(likedVideosArray))
  }
  return (
    <button onClick={addLike}>LIKE BUTTON</button>
  )
}

export default LikeButton
