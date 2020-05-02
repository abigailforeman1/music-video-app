import React from 'react'
import { getMusicVideo } from '../../lib/api'

class Search extends React.Component {
  state = {
    query: '',
    searchTerm: ''
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = async e => {
    e.preventDefault()

    try {
      const res = await getMusicVideo(this.state)
      console.log(res.data)
    } catch (err) {
      console.log(err.response)
    }
  }

  render () {
    console.log('state is', this.state)
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
            type='radio'
            id='artist'
            name='searchTerm'
            value='artist'
            onChange={this.handleChange}
          />
          <label htmlFor='artist'>Artist</label>

          <input
            type='radio'
            id='genre'
            name='searchTerm'
            value='genre'
            onChange={this.handleChange}
          />
          <label htmlFor='genre'>Genre</label>

          <input
            type='radio'
            id='song'
            name='searchTerm'
            value='song'
            onChange={this.handleChange}
          />
          <label htmlFor='song'>Song</label>

          <input
            type='radio'
            id='album'
            name='searchTerm'
            value='album'
            onChange={this.handleChange}
          />
          <label htmlFor='album'>Album</label>

          <button type='submit'>FIND VIDEOS</button>
        </form>
      </div>
    )
  }
}

export default Search
