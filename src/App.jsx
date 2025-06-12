import { lazy,Suspense } from 'react'

import {Navbar, MovieList,Footer} from './components'
import { fire, popCorn } from './assets'

function App() {

  return (
    <>
    <Navbar/>
      <MovieList type='popular' title ='Popular' emoji={popCorn}/>
      <MovieList type='top_rated' title ='Top Rated' emoji={fire}/>
      <MovieList type='upcoming' title ='UpComing' emoji={fire}/>
      <MovieList type='now_playing' title ='Now Playing' emoji={fire}/>
    <Footer/>
      </>
  )
}

export default App
