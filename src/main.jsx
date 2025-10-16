import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import Root from './LayOuts/Root/Root.jsx'
import Home from './Pages/Home/Home.jsx'
import Register from './Pages/Register/Register.jsx'
import Login from './Pages/LogIn/Login.jsx'
import AuthProvider from './Context/AuthContext/AuthProvider.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/home',
        element: <Navigate to={'/'}></Navigate>
      },
      {
        path: '/register',
        Component: Register,
      },
      {
        path: '/login',
        Component: Login
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
