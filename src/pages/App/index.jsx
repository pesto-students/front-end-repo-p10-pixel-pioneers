import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Home from "../Home";
import Layout from "../Layout";
import Login from "../Login";
import SignUp from "../SignUp";
import User from "../User";
import PropertyList from "../PropertyList";
import PropertyDetails from "../PropertyDetails";
import AddPropertyDetails from "../AddPropertyDetails";
import About from "../About";
import Contact from "../Contact";
import Blank from "../Blank";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      {/* AUTH Routes */}
      <Route path="login" element={<Login />} />
      <Route path="register" element={<SignUp />} />
      <Route path="profile" element={<User />} />
      <Route path="properties" element={<PropertyList />} />
      <Route
        path="property-details/:propertyID"
        element={<PropertyDetails />}
      />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      <Route path="add-location" element={<AddPropertyDetails />} />
      <Route path="blank" element={<Blank />} />
    </Route>
  )
);

function App() {
  return (
    <>
<<<<<<< HEAD
        <RouterProvider router={router} />
        <ToastContainer />
      
=======
      <RouterProvider router={router} />
>>>>>>> 1aec9ce6141f27dd3973c3267ac825e3001d0b43
    </>
  );
}

export default App;
