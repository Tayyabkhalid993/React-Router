import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.tsx'
import './index.css'
import { About, Home, Contact, User, Github } from './components/index.ts'
import { githubInfoLoader } from './components/github/Github.tsx'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Home/> },
        { path: 'about', element:<About/> },
        {path: 'contact', element:<Contact/>},
        {path: 'user/:userId', element:<User/>},
        {path: 'github', loader: async () => {
          const data = await githubInfoLoader(); // Replace with your fetch logic
          return data;
        }, element:<Github/>},

      ],  
    }
  ]
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
