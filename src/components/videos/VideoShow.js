import React from 'react'
import { getSingleVideo } from '../../lib/api'
import { getMusicVideo } from '../../lib/api'
import ReactAudioPlayer from 'react-audio-player'

import VideoCard from '../videos/VideoCard'
import LikeButton from '../common/LikeButton'

const ig = require('instagram-scraping')

class VideoShow extends React.Component {
  state = {
    video: null,
    query: '',
    seeMore: [],
    instagram: []
  }

  async componentDidMount () {
    try {
      const videoId = this.props.match.params.id
      const res = await getSingleVideo(videoId)
      const insta = []

      ig.scrapeTag(res.data.results[0].artistName).then(result => {
        insta.push(result)
      })

      this.setState({ video: res.data.results[0], query: res.data.results[0].artistName, instagram: insta })
    } catch (err) {
      this.props.history.push('./error')
    }
  }

  handleClick = async e => {
    e.preventDefault()
    try {
      const res = await getMusicVideo(this.state)
      this.setState({ seeMore: res.data.results })
    } catch (err) {
      this.props.history.push('./error')
    }
  }

  render () {
    const video = this.state.video
    const seeMore = this.state.seeMore

    if (!this.state.video) return null

    console.log(this.state.instagram)

    const newReleaseTime = video.releaseDate.slice(0, 10)

    return (
      <div className='videoshow-main'>
        <div className='videoshow-wrapper'>
          <h1 className='show-title'><span className='background'>Title</span> {video.trackName}</h1>
          <p className='show-title'><span className='background'>Artist</span> {video.artistName}</p>
          <p className='show-title'><span className='background'>Country</span> {video.country}</p>
          <p className='show-title'><span className='background'>Genre</span> {video.primaryGenreName}</p>
          <p className='show-title'><span className='background'>Release</span> {newReleaseTime}</p>

          {/* <img src={video.artworkUrl100} alt={video.artistName} /> */}

          <div className='controls-wrapper'>

            <ReactAudioPlayer
              src={video.previewUrl}
              autoPlay={false}
              controls={true}
              style={{ width: '250px' }}
            />

            <a className='video-preview-button' href={video.previewUrl} target='_blank' rel='noopener noreferrer'>
              <button>WATCH MUSIC VIDEO</button>
            </a>
  
            <LikeButton
              likedVideos={video}
              className='likebutton'
            />
  
            <button className='seemore' onClick={this.handleClick}>SEE MORE FROM {video.artistName}</button>
          </div>
  
          {seeMore && 
            seeMore.map((video, index) => {
              return <VideoCard key={video.trackId} {...video} count={index} />
            })}

          {/* {this.state.instagram &&
            this.state.instagram.map(post => {
              return (

              )
            })
          } */}
        </div>
      </div>
    )
  }
}

export default VideoShow
