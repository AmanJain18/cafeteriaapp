import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster } from 'react-hot-toast';
import { Layout, MainContainer, MenuContainer } from "./components";
// import { useStateValue } from "./context/StateProvider";
// import { getAllFoodItems } from "./utils/firebaseFunctions";
// import { actionType } from "./context/reducer";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import axios from "./api/axios";
import { productReducer } from "./app/productSlice";
import { useDispatch } from "react-redux";
import Cart from "./pages/Cart";

const App = () => {
  // const [{ foodItems }, dispatch] = useStateValue();
  const dispatch = useDispatch();

  const fetchData = async () => {
    axios.get("/products").then((res) => {
      // console.log(res.data)
      dispatch(productReducer(res.data))
    })
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <BrowserRouter>
          <Toaster position="top-center" reverseOrder={false} />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<MainContainer />} />
              <Route path="/menus" element={<MenuContainer />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/signin" element={<SignInPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/cart" element={<Cart />} />
              {/* <Route path="/create" element={<CreateContainer />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </AnimatePresence >
    </>
  );
};

export default App;
