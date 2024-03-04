import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Base from './routes/Base'
import Destination from './routes/Destination'
import Crew from './routes/Crew'
import Technologies from './routes/Technologies'
import Home from './components/home/Home'
import Planet from './components/planets/Planet'
import CrewMates from './components/crewMates/CrewMates'
import Technology from './components/technology/Technology'
import './index.scss'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Base />,
    children: [
      {index: true, element: <Home />}
    ],
  },
  {
    path: 'destination',
    element: <Destination />,
    children: [
      {index: true, element: <Planet />},
      {
        path: ':name',
        element: <Planet />,
      }
    ]
  },
  {
    path: 'crew',
    element: <Crew />,
    children: [
      {index: true, element: <CrewMates />},
      {
        path: ':crew',
        element: <CrewMates />
      }
    ]
  },
  {
    path: 'technology',
    element: <Technologies />,
    children: [
      {index: true, element: <Technology />},
      {
        path: ':technology',
        element: <Technology />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
