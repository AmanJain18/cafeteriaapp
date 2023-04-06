import React, { useEffect, useRef, useState } from "react";
import HomeContainer from "./HomeContainer";
import RowContainer from "./RowContainer";
import { useSelector } from "react-redux";
// import { useStateValue } from "../context/StateProvider";
import MenuContainer from "./MenuContainer";
// import CartContainer from "./CartContainer";

const MainContainer = () => {
    const prodData = useSelector((state) => state.product.productList);
    // console.log(prodData);
    const productJuice = Object.values(prodData).filter((item) => item?.category === "Juice", []);
    // console.log((Object.values(prodData).filter((item) => item?.category === "Juice" || item?.category === "South Indian", [])));

    const slider = useRef();
    const prevProduct = () => {
        slider.current.scrollLeft -= 300;
    };
    const nextProduct = () => {
        slider.current.scrollLeft += 300;
    };

    const productcategory = [...new Set(Object.values(prodData).map((item) => item?.category))];
    console.log(productcategory)
    // const [{ foodItems, cartShow }, dispatch] = useStateValue();

    // useEffect(() => { }, [scrollValue, cartShow]);

    return (
        <>
            <div className="mt-12 md:mt-16 px-4 md:px-16 py-4 w-full h-auto flex flex-col items-center justify-center ">
                <HomeContainer />
                <section className="w-full my-6">
                    <RowContainer
                        flag={true}
                        productJuice={productJuice}
                    />
                </section>
                {/* {<CartContainer />} */}
                <>
                    {
                        productcategory[0] && productcategory.map((item) => {
                            return (
                                <MenuContainer
                                    category={item}
                                // prodData={prodData}
                                />
                            )
                        })
                    }
                </>
            </div>
        </>
    );
};

export default MainContainer;