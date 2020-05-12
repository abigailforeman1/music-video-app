import React from 'react'
import { toast } from '../../lib/Notifications'

const likedVideosArray = []

const LikeButton = likedVideos => {
  const addLike = (e) => {
    toast('Added to faves')
    likedVideosArray.push(likedVideos.likedVideos)
    localStorage.setItem('likedVideos', JSON.stringify(likedVideosArray))
    e.target.disabled = true
    // console.log('setted in local storage', likedVideosArray)
  }
  return (
    <button className='like-button' onClick={addLike} disabled={false}>ADD TO FAVES</button>
  )
}

export default LikeButton
