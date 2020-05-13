import React from 'react'
import { getSingleVideo, getMapBoxCoords, getMusicVideo } from '../../lib/api'
import ReactAudioPlayer from 'react-audio-player'
import MapGl, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

import VideoCard from '../videos/VideoCard'
import LikeButton from '../common/LikeButton'

const ig = require('instagram-scraping')

class VideoShow extends React.Component {
  state = {
    video: null,
    query: '',
    seeMore: [],
    instagram: [],
    latitude: 0,
    longitude: 0
  }

  async componentDidMount () {
    try {
      const videoId = this.props.match.params.id
      const res = await getSingleVideo(videoId)
      const insta = []

      ig.scrapeTag(res.data.results[0].artistName).then(result => {
        insta.push(result)
      })
      
      const response = await getMapBoxCoords(res.data.results[0].country)

      this.setState({
        video: res.data.results[0],
        query: res.data.results[0].artistName,
        instagram: insta,
        longitude: response.data.features[0].geometry.coordinates[0],
        latitude: response.data.features[0].geometry.coordinates[1]
      })
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
    if (!this.state.video || !this.state.latitude) return null
    const newReleaseTime = video.releaseDate.slice(0, 10)

    return (
      <div className='videoshow-main'>
        <div className='videoshow-wrapper'>
          <h1 className='show-title'>
            <img src={video.artworkUrl100} alt={video.artistName} />
            <img src={video.artworkUrl100} alt={video.artistName} />
            <img src={video.artworkUrl100} alt={video.artistName} />
            <img src={video.artworkUrl100} alt={video.artistName} />
            <br />
            <span className='background'>Title</span> {video.trackName}
          </h1>
          <p className='show-title'>
            <span className='background'>Artist</span> {video.artistName}
          </p>
          <p className='show-title'>
            <span className='background'>Genre</span> {video.primaryGenreName}
          </p>
          <p className='show-title'>
            <span className='background'>Release</span> {newReleaseTime}
          </p>

          <div className='controls-wrapper'>
            <ReactAudioPlayer
              src={video.previewUrl}
              autoPlay={false}
              controls={true}
              style={{ width: '250px' }}
            />

            <a
              className='video-preview-button'
              href={video.previewUrl}
              target='_blank'
              rel='noopener noreferrer'
            >
              <button>WATCH MUSIC VIDEO</button>
            </a>

            <LikeButton likedVideos={video} className='likebutton' />

            <button className='seemore' onClick={this.handleClick}>
              SEE MORE FROM {video.artistName}
            </button>
          </div>

          {seeMore &&
            seeMore.map((video, index) => {
              return <VideoCard key={video.trackId} {...video} count={index} />
            })}

          <div className='map'>
            <MapGl
              mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
              height={'50vh'}
              width={'50vw'}
              mapStyle='mapbox://styles/abigailforeman1/ck5leceot3qs81io9spljustc'
              zoom={2}
              latitude={this.state.latitude}
              longitude={this.state.longitude}
            >

              <Marker latitude={this.state.latitude} longitude={this.state.longitude}>
                <span className='map-marker' role='img' aria-label='marker'>
                🔴
                </span>
              </Marker>
              
            </MapGl>
          </div>
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
