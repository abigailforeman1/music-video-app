import React from 'react'
import { getSingleVideo, getMapBoxCoords, getMusicVideo } from '../../lib/api'
import ReactAudioPlayer from 'react-audio-player'
import MapGl, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

import VideoCard from '../videos/VideoCard'
import LikeButton from '../common/LikeButton'

class VideoShow extends React.Component {
  state = {
    video: null,
    query: '',
    seeMore: [],
    latitude: 0,
    longitude: 0,
    likedVideos: []
  }

  async componentDidMount () {
    try {
      const videoId = this.props.match.params.id
      const res = await getSingleVideo(videoId)
      const response = await getMapBoxCoords(res.data.results[0].country)
      const likedVideos = JSON.parse(localStorage.getItem('likedVideos'))

      this.setState({
        video: res.data.results[0],
        query: res.data.results[0].artistName,
        longitude: response.data.features[0].geometry.coordinates[0],
        latitude: response.data.features[0].geometry.coordinates[1],
        likedVideos
      })
    } catch (err) {
      this.props.history.push('./error')
    }
  }

  // async checkAlreadyFave () {
    // const likedVideos = JSON.parse(localStorage.getItem('likedVideos'))
    // console.log(likedVideos)

    // likedVideos.filter((video, videoId) => {
    //   videoId = parseInt(this.props.match.params.id)
    //   console.log(video.trackId === videoId)
    //   return video.trackId === videoId
    // })
  // }

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
    const likedVideos = this.state.likedVideos
    if (!this.state.video || !this.state.latitude) return null
    const newReleaseTime = video.releaseDate.slice(0, 10)

    console.log('fave track id', likedVideos.filter(video => video.trackId))
    console.log('current id', this.props.match.params.id)
    console.log('is this song already in fave?', likedVideos.some(video => video.trackId === parseInt(this.props.match.params.id)))

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

            {/* if checkAlreadyFave() returns true you want to hide the button, if it returns false you want to show the button */}
            {(!likedVideos.some(video => video.trackId === parseInt(this.props.match.params.id))) &&
              <LikeButton likedVideos={video} className='likebutton' />
            }

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
              <Marker
                latitude={this.state.latitude}
                longitude={this.state.longitude}
              >
                <span className='map-marker' role='img' aria-label='marker'>
                  🔴
                </span>
              </Marker>
            </MapGl>
          </div>
        </div>
      </div>
    )
  }
}

export default VideoShow
