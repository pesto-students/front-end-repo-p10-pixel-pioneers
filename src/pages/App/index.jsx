import { useState } from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from "../Home";
import Layout  from "../Layout";
import Login from "../Login";
import SignUp from "../SignUp";
import User from "../User";
import PropertyList from "../PropertyList";
import PropertyDetails from "../PropertyDetails";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} >
      
    <Route path="/" element={<Home />}/>
      {/* AUTH Routes */}
      <Route path="login" element={<Login />} />
      <Route path="register" element={<SignUp />} />
      <Route path="user" element={<User />} />
      <Route path="properties" element={<PropertyList />} />
      <Route path="property-details" element={<PropertyDetails />} />
    </Route>

    

  )
)

function App() {

  return (
    <>
    <RouterProvider router={router}/>
  </>
  )
}

export default App
