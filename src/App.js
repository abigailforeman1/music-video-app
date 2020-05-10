import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
// import P5Wrapper from 'react-p5-wrapper'
// import Sketch from './styles/sketch'

// import Home from './components/common/Home'
import Search from './components/videos/Search'
import ErrorPage from './components/common/Error'
import VideoShow from './components/videos/VideoShow'
import LikedVideos from './components/videos/LikedVideos'

const App = () => {
  return (
    <>
      {/* <P5Wrapper sketch={Sketch} /> */}
  
      <BrowserRouter>
        <main>
          <nav>
            {/* <Link className='nav-item' to='/'>HOME</Link> */}
            <Link className='nav-item' to='/'>SEARCH</Link>
            <Link className='nav-item' to='/likes'>FAVES</Link>
          </nav>
          <Switch>
            {/* <Route exact path='/' component={Home} /> */}
            <Route exact path='/' component={Search} />
            <Route path='/likes' component={LikedVideos} />
            <Route path='/:id' component={VideoShow} />
            <Route path='/error' component={ErrorPage} />
            <Route path='/*' component={ErrorPage} />
          </Switch>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
