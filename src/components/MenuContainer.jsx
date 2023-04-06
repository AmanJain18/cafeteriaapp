import React, { useEffect, useState } from "react";
import { IoFastFood } from "react-icons/io5";
// import { categories } from "../utils/data";
import { motion } from "framer-motion";
import RowContainer from "./RowContainer";
// import { useStateValue } from "../context/StateProvider";

const MenuContainer = ({ category }) => {
  // const [filterby, setFilterBy] = useState("");
  // const [datafilter, setDataFilter] = useState();

  // useEffect(() => {
  //   setDataFilter(prodData);
  // }, [prodData]);


  // const handleFilterproduct = (category) => {
  //   const filter = prodData?.filter((n) => n.category.toLowerCase() === filterby.toLowerCase());
  //   setDataFilter(() => {
  //     return [
  //       ...filter
  //     ]
  //   }
  //   );
  // };


  // const [{ foodItems }, dispatch] = useStateValue();

  return (
    <section className="w-full my-6 h-auto flex flex-col items-start justify-center" id="menu">
      <div className="w-full flex flex-col">
        <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
          Our Dishes
        </p>

        <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">

              <motion.div
                whileTap={{ scale: 0.75 }}
                key={category}
                className={`group 

                  w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-orange-400 `}
                // onClick={() => setFilter(category.urlParamName)}
              >
                <div
                  className={`w-10 h-10 rounded-full shadow-lg  group-hover:bg-white flex items-center justify-center`}
                >
                  <IoFastFood
                    className={` group-hover:text-textColor text-lg`}
                  />
                </div>
                <p
                  className={` group-hover:text-white text-center`}
                >
                  {category}
                </p>
              </motion.div>
        </div>

        {/* <div className="w-full">
          <RowContainer
            flag={false}
            data={prodData.filter((n) => n.category === filterby)}
          />
        </div> */}
      </div>
    </section>
  );
};

export default MenuContainer;
