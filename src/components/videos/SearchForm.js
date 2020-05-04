import React from 'react'

const SearchForm = ({ handleSubmit, handleChange, handleClick, checked }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        className='search-form'
        placeholder='Start your search'
        name='query'
        onChange={handleChange}
      />

      <h1>Search by</h1>

      <input
        type='checkbox'
        id='artist'
        name='searchTerms'
        value='artist'
        onChange={handleClick}
        checked={checked}
      />
      <label htmlFor='artist'>Artist</label>

      <input
        type='checkbox'
        id='song'
        name='searchTerms'
        value='song'
        onChange={handleClick}
        checked={checked}
      />
      <label htmlFor='song'>Song</label>

      <input
        type='checkbox'
        id='album'
        name='searchTerms'
        value='album'
        onChange={handleClick}
        checked={checked}
      />
      <label htmlFor='album'>Album</label>

      <button type='submit'>FIND VIDEOS</button>
    </form>
  )
}

export default SearchForm
