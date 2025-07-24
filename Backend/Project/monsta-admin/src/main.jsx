import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Home.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./Pages/Dashboard.jsx";
import Login from "./Pages/LoginAuth/Login.jsx";
import Profile from "./Pages/Profile.jsx";
import AddColor from "./Pages/Color/AddColor.jsx";
import ViewColor from "./Pages/Color/ViewColor.jsx";
import AddCategory from "./Pages/Parent_Category/AddCategory.jsx";
import ViewCategory from "./Pages/Parent_Category/ViewCategory.jsx";
import AddSubCategory from "./Pages/Sub Category/AddSubCategory.jsx";
import ViewSubCategory from "./Pages/Sub Category/ViewSubCategory.jsx";
import ProductDetails from "./Pages/Product/ProductDetails.jsx";
import ProductItems from "./Pages/Product/ProductItems.jsx";
import StoryDetails from "./Pages/Story/StoryDetails.jsx";
import StoryView from "./Pages/Story/StoryView.jsx";
import Orders from "./Pages/Orders/Orders.jsx";
import SliderDetails from "./Pages/Slider/SliderDetails.jsx";
import SliderView from "./Pages/Slider/SliderView.jsx";
import RootLayout from "./layout/RootLayout.jsx";
import AddSubSubCategory from "./Pages/Sub Sub Category/AddSubSubCategory.jsx";
import ViewSubSubCategory from "./Pages/Sub Sub Category/ViewSubSubCategory.jsx";
import Addmeterials from "./Pages/Meterials/Addmeterials.jsx";
import ViewMeterials from "./Pages/Meterials/ViewMeterials.jsx";
import Company_profile from "./Pages/Company-profile.jsx";
import TestimonialAdd from "./Pages/Testimonial/TestimonialAdd.jsx";
import TestimonialView from "./Pages/Testimonial/TestimonialView.jsx";
import AddLocation from "./Pages/Location/AddLocation.jsx";
import ViewLocation from "./Pages/Location/ViewLocation.jsx";
import AddFaq from "./Pages/Faq/AddFaq.jsx";
import ViewFaq from "./Pages/Faq/ViewFaq.jsx";
import Users from "./Pages/Users.jsx";
import Newsletters from "./Pages/NewsLetters.jsx";
import Enquiry from "./Pages/Enquirys.jsx";



const route = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} />
      <Route path="/" element={<RootLayout />}>
        <Route path="home" element={<Home />} />
      </Route>
      <Route element={<RootLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="company-profile" element={<Company_profile />} />

        <Route path="color">
          <Route path="add" element={<AddColor />}></Route>
          <Route path="update/:id?" element={<AddColor />}></Route>
          <Route path="view" element={<ViewColor />}></Route>
        </Route>

        
        <Route path="material">
          <Route path="add" element={<Addmeterials />}></Route>
          <Route path="update/:id?" element={<Addmeterials />}></Route>
          <Route path="view" element={<ViewMeterials />}></Route>
        </Route>


        <Route path="category">
          <Route path="add" element={<AddCategory />}></Route>
          <Route path="update/:id?" element={<AddCategory />}></Route>
          <Route path="view" element={<ViewCategory />}></Route>
        </Route>


        <Route path="category/sub-category">
          <Route path="add" element={<AddSubCategory />}></Route>
          <Route path="update/:id?" element={<AddSubCategory />}></Route>
          <Route path="view" element={<ViewSubCategory />}></Route>
        </Route>

        <Route path="category/sub-sub-category">
          <Route path="add" element={<AddSubSubCategory />}></Route>
          <Route path="update/:id?" element={<AddSubSubCategory />}></Route>
          <Route path="view" element={<ViewSubSubCategory />}></Route>
        </Route>

        <Route path="product">
          <Route path="add" element={<ProductDetails />}></Route>
          <Route path="update/:id?" element={<ProductDetails />}></Route>
          <Route path="view" element={<ProductItems />}></Route>
        </Route>

        <Route path="why-choose-us">
          <Route path="add" element={<StoryDetails />}></Route>
          <Route path="update/:id?" element={<StoryDetails />}></Route>
          <Route path="view" element={<StoryView />}></Route>
        </Route>

        <Route path="orders">
          <Route path="orders" element={<Orders />}></Route>
        </Route>


        <Route path="slider">
          <Route path="add" element={<SliderDetails />}></Route>
          <Route path="update/:id?" element={<SliderDetails />}></Route>
          <Route path="view" element={<SliderView />}></Route>
        </Route>

        <Route path="country">
          <Route path="add" element={<AddLocation />}></Route>
          <Route path="update/:id?" element={<AddLocation />}></Route>
          <Route path="view" element={<ViewLocation />}></Route>
        </Route>


        <Route path="/user" element={<Users />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/newsletter" element={<Newsletters />} />


        <Route path="faq">
          <Route path="add" element={<AddFaq />}></Route>
          <Route path="update/:id?" element={<AddFaq />}></Route>
          <Route path="view" element={<ViewFaq />}></Route>
        </Route>


        <Route path="testimonial">
          <Route path="add" element={<TestimonialAdd />}></Route>
          <Route path="update/:id?" element={<TestimonialAdd />}></Route>
          <Route path="view" element={<TestimonialView />}></Route>
        </Route>
      </Route>
    </>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </StrictMode>
);
