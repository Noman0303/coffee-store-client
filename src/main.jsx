
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCofee from './components/UpdateCofee.jsx';
import { StrictMode } from 'react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader:() => fetch('http://localhost:5000/coffee')
  },
  {
    path: "/addCoffee",
    element: <AddCoffee></AddCoffee>
  },
  {
    path: "/updateCoffee/:id",
    element: <UpdateCofee></UpdateCofee>,
    loader:({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path: "/header",
    element: <AddCoffee></AddCoffee>
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
