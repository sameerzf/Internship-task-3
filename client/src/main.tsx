import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Shop from './pages/Shop';
import Checkout from './pages/Checkout';
const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    // errorElement:,
    children:[
      {index:true,element:<Home/>},
      {path:'/about-us',element:<AboutUs/>},
      {path:'/contact-us',element:<ContactUs/>},
      {path:'/shop',element:<Shop/>},
      {path:'/checkout',element:<Checkout/>}
    ]

  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
