import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/common/Home'
import Search from './components/common/Search'
import ErrorPage from './components/common/Error'
import VideoShow from './components/videos/VideoShow'
import LikedVideos from './components/videos/LikedVideos'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/videos/likes' component={LikedVideos} />
        <Route path='/videos/:id' component={VideoShow} />
        <Route path='/videos' component={Search} />
        <Route path='/error' component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
