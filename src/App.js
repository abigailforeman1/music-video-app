import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Notifications from 'react-notify-toast'
// import P5Wrapper from 'react-p5-wrapper'
// import Sketch from './styles/sketch'

// import Home from './components/common/Home'
import Search from './components/videos/Search'
import ErrorPage from './components/common/ErrorPage'
import VideoShow from './components/videos/VideoShow'
import LikedVideos from './components/videos/LikedVideos'

const App = () => {
  return (
    <>
      {/* <P5Wrapper sketch={Sketch} /> */}
  
      <BrowserRouter>
        <Notifications options={{ zIndex: 200, top: '70px' }} />
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
            <Route path='/error' component={ErrorPage} />
            <Route path='/:id' component={VideoShow} />
            {/* <Route path='/*' component={ErrorPage} /> */}
          </Switch>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
