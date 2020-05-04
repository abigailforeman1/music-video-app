import React from 'react'
import { getMusicVideo } from '../../lib/api'

import VideoCard from '../videos/VideoCard'
import SearchForm from './SearchForm'

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
      this.setState({ results: res.data.results })
    } catch (err) {
      this.props.history.push('./error')
    }
  }

  render () {
    return (
      <div className='main-wrapper'>
        <h1>Search!</h1>

        <SearchForm
          handleChange={this.handleChange}
          handleClick={this.handleClick}
          handleSubmit={this.handleSubmit}
          checked={this.checked}
        />

        {this.state.results &&
          this.state.results.map(video => {
            return <VideoCard key={video.trackId} {...video} />
          })}
      </div>
    )
  }
}

export default Search
