import React from 'react'

const likedVideos = []

const LikeButton = videoId => {
  const addLike = () => {
    likedVideos.push(videoId.videoId)
    console.log(likedVideos)
    localStorage.setItem('likedVideos', JSON.stringify(likedVideos))
  }
  return (
    <button onClick={addLike}>LIKE BUTTON</button>
  )
}

export default LikeButton
