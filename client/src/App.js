import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './RootLayout'
import Open from './components/Open'
import Booking from './components/customer/Booking'
import Login from './components/Login'
import Hello from './components/Hello'
import Register from './components/Register'
import Otp from './components/Otp'
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
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
        },{
          path:"/hello",
          element: <Hello />
        },{
          path:"/booking",
          element: <Booking />
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