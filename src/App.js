import React from 'react'
import './app.css'
import Nav from './Components/Nav'
import  News from './Components/News'
import {Routes,Route} from 'react-router-dom'

export default function app() {
  return (
    <div>
<Nav />
<Routes>
    <Route path='/'element={< News key={Math.random()} category='General' />} />
    <Route path='/science'element={< News key={Math.random()} category='Science' />} />
    <Route path='/sports'element={< News  key={Math.random()}category='Sports' />} />
    <Route path='/health'element={< News key={Math.random()} category='Health' />} />
    <Route path='/technology'element={< News key={Math.random()} category='Technology' />} />
    <Route path='/entertainment'element={< News key={Math.random()} category='Entertainment' />} />
    <Route path='/business'element={< News key={Math.random()} category='Business' />} />
</Routes>
    </div>
  )
}
