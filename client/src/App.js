import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './RootLayout'
import Open from './components/Open'
import Login from './components/Login'
import Register from './components/Register'
import Otp from './components/Otp'
import Analytics from './components/Analytics'
import Cards from './components/Cards'
import Content from './components/Content'
import Quiz from './components/Quiz'
import Chapter from './components/Chapter'

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<RootLayout/>,
      children: [
        {
          path: "/",
          element: <Open />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/register",
          element: <Register />
        },
        {
          path: "/otp",
          element: <Otp />
        },
        {
          path: "/chapters",
          element: <Cards />,
        },
        // {
        //   path:'/chapter/:chapterNumber',
        //   element:<Content/>
        // },
        {
          path:'/quiz',
          element:<Quiz/>
        },
        {
          path:'/analytics',
          element:<Analytics/>
        },{
          path:'/chapters/:chapterNumber',
          element:<Chapter />
        }
      ]
    }
  ])

  return (
    <div className="">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  )
}

export default App