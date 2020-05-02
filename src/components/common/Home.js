import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  render () {
    return (
      <div className='main-wrapper'>
        <h1>MUSIC VIDEOS!</h1>
        <Link to='/search'>
          <button>SEARCH FOR VIDEOS</button>
        </Link>
      </div>
    )
  }
}

export default Home
