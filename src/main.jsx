import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { TodoPage, LoginForm, SignupForm, Home, ErrorPage, Layout } from './components'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "/todos/:title",
        element: <TodoPage />
      },
      {
        path: "/login",
        element: <LoginForm />
      },
      {
        path: "/signup",
        element: <SignupForm />
      }

    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>

  </StrictMode>,
)
