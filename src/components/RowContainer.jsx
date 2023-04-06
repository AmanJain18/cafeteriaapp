import React, { useEffect, useRef, useState } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import NotFound from "../img/NotFound.svg";
import { categories } from "../utils/data";
import { useDispatch } from "react-redux";
import { addCartItem, increaseQty } from "../app/productSlice";



const RowContainer = ({ flag, productJuice, name, price, category, id, image}) => {
  const slider = useRef();
  const prevProduct = () => {
    slider.current.scrollLeft -= 350;
  };
  const nextProduct = () => {
    slider.current.scrollLeft += 350;
  };
  const dispatch = useDispatch()

  const handleAddCartProduct = (e) => {
    dispatch(addCartItem({
      _id: productJuice._id,
      name: productJuice.name,
      price: productJuice.price,
      category: productJuice.category,
      image: productJuice.image
    }))
  };

  return (
    <>
      <div className="w-full flex items-center justify-between">
        <p className={`text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 ${flag
          ? "overflow-x-scroll scrollbar-none"
          : "hidden md:hidden"
          }`}>
          Our fresh & healthy juices
        </p>

        <div className={`hidden md:flex gap-3 items-center ${flag
          ? "overflow-x-scroll scrollbar-none"
          : "hidden md:hidden"
          }`}>
          <motion.div
            whileTap={{ scale: 0.75 }}
            className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer  hover:shadow-lg flex items-center justify-center"
            onClick={prevProduct}
          >
            <MdChevronLeft className="text-lg text-white" />
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.75 }}
            className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
            onClick={nextProduct}
          >
            <MdChevronRight className="text-lg text-white" />
          </motion.div>
        </div>
      </div>
      <div
        ref={slider}
        className={`w-full flex items-center gap-3 mt-6 md:mt-12 scroll-smooth  ${flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap justify-center"
          }`}
      >
        {productJuice && productJuice?.length > 0 ? (
          productJuice.map((item) => (
            <div
              key={item?._id}
              className="w-275 h-[175px] min-w-[275px] md:w-300 md:min-w-[300px] bg-orange-50 rounded-lg py-2 px-4 my-6 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
            >
              <div className="w-full flex items-center justify-between">
                <motion.div
                  className="w-40 h-40 -mt-8 drop-shadow-2xl"
                  whileHover={{ scale: 1.2 }}
                >
                  <img
                    src={item?.image}
                    alt="productImage"
                    className="w-full h-full object-contain"
                  />
                </motion.div>
                <motion.div
                  whileTap={{ scale: 0.75 }}
                  className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8"
                // onClick={() => setItems([...cartItems, item])}
                  onClick={handleAddCartProduct}
                >
                  <MdShoppingBasket className="text-white" />
                </motion.div>
              </div>

              <div className="w-full flex flex-col items-end justify-end -mt-8">
                <p className="text-textColor font-semibold text-base md:text-lg">
                  {item?.name}
                </p>
                {/* <p className="mt-1 text-sm text-gray-500">
                Calories: {item?.calories}
              </p> */}
                <div className="flex items-center gap-8">
                  <p className="text-lg text-headingColor font-semibold">
                    <span className="text-sm text-red-500">₹</span> {item?.price}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full flex flex-col items-center justify-center">
            <img src={NotFound} className="h-340" />
            <p className="text-xl text-headingColor font-semibold my-2">
              Items Not Available
            </p>
          </div>
        )}
      </div>
    </>

  );
};

export default RowContainer;
