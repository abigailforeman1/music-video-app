import React from 'react'

const SearchForm = ({ handleSubmit, handleChange, handleClick, checked }) => {
  return (
    <form className='form-wrapper' onSubmit={handleSubmit}>
      <div className="searchbar-wrapper">
        <input
          className='search-form'
          placeholder='TYPE HERE'
          name='query'
          onChange={handleChange}
          id='search-bar'
        />
      </div>

      {/* <h1 className="search-by">search by:</h1> */}

      <div className='checkbox-wrapper'>
        <div className='checkbox'>
          <input
            type='checkbox'
            id='artist'
            name='searchTerms'
            value='artist'
            onChange={handleClick}
            checked={checked}
          />
          <label htmlFor='artist'>ARTIST</label>
        </div>

        <div className='checkbox'>
          <input
            type='checkbox'
            id='song'
            name='searchTerms'
            value='song'
            onChange={handleClick}
            checked={checked}
          />
          <label htmlFor='song'>SONG</label>
        </div>

        <div className='checkbox'>
          <input
            type='checkbox'
            id='album'
            name='searchTerms'
            value='album'
            onChange={handleClick}
            checked={checked}
          />
          <label htmlFor='album'>ALBUM</label>
        </div>
      </div>

      <div>
        <button type='submit'>SEARCH</button>
      </div>
    </form>
  )
}

export default SearchForm
