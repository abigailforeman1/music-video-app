import React from 'react'
import { getMusicVideo } from '../../lib/api'

import VideoCard from '../videos/VideoCard'

class Search extends React.Component {
  state = {
    query: '',
    searchTerms: [],
    results: null
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleClick = e => {
    if (e.target.checked) {
      const newSearch = e.target.value
      const searchTerms = [...this.state.searchTerms, newSearch]
      this.setState({ searchTerms: searchTerms })
    } else {
      const index = this.state.searchTerms.indexOf(e.target.value)
      const searchTerms = [...this.state.searchTerms]
      searchTerms.splice(index, 1)
      this.setState({ searchTerms: searchTerms })
    }
  }

  handleSubmit = async e => {
    e.preventDefault()

    try {
      const res = await getMusicVideo(this.state)
      console.log(res.data)
      this.setState({ results: res.data.results })
    } catch (err) {
      this.props.history.push('./error')
    }
  }

  render () {
    console.log('state is', this.state.results)
    return (
      <div className='main-wrapper'>
        <h1>Search!</h1>

        <form onSubmit={this.handleSubmit}>
          <input
            className='search-form'
            placeholder='Start your search'
            name='query'
            onChange={this.handleChange}
          />

          <h1>Search by</h1>

          <input
            type='checkbox'
            id='artist'
            name='searchTerms'
            value='artist'
            onChange={this.handleClick}
            checked={this.checked}
          />
          <label htmlFor='artist'>Artist</label>

          <input
            type='checkbox'
            id='song'
            name='searchTerms'
            value='song'
            onChange={this.handleClick}
            checked={this.checked}
          />
          <label htmlFor='song'>Song</label>

          <input
            type='checkbox'
            id='album'
            name='searchTerms'
            value='album'
            onChange={this.handleClick}
            checked={this.checked}
          />
          <label htmlFor='album'>Album</label>

          <button type='submit'>FIND VIDEOS</button>
        </form>

        {this.state.results &&
        this.state.results.map(video => {
          return (
            <VideoCard key={video.trackId} {...video} />
          )
        })
        }

      </div>
    )
  }
}

export default Search
