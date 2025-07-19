import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router'

function Body() {
    const appRouter = createBrowserRouter([
        {
            path:"/",
            Component: <Body/>
        }
    ])
  return (
    <div>
        <Login/>
        <Browse/>
    </div>
  )
}

export default Body