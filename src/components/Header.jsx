import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdShoppingBasket, MdLogout, MdLogin, MdHome, MdMenuBook, MdPhoneInTalk, MdGroups } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";
import { motion } from "framer-motion";
import Logo from "../img/logohr.png";
import { useSelector, useDispatch } from "react-redux";
import { logoutReducer } from "../app/userSlice";
import { toast } from "react-hot-toast";
// import { useStateValue } from "../context/StateProvider";
// import { actionType } from "../context/reducer";

const Header = () => {
    // const firebaseAuth = getAuth(app);
    // const provider = new GoogleAuthProvider();

    // const [{ user, cartShow, cartItems }, dispatch] = useStateValue();

    const [isMenu, setisMenu] = useState(false);
    const handleMenu = () => {
        setisMenu(prev => !prev);
    };

    const userData = useSelector(state => state.user);
    // console.log(userData.user)
    const dispatch = useDispatch();
    const handlelogout = () => {
        // setisMenu(false);
        // localStorage.clear();
        dispatch(logoutReducer());
        toast.success('Logged out successfully');
    };

    // const showCart = () => {
    //     dispatch({
    //         type: actionType.SET_CART_SHOW,
    //         cartShow: !cartShow,
    //     });
    // };

    return (
        <header className='fixed z-10 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary shadow-sm h-16'>
            {/* destop & tablet  */}
            <div className='hidden md:flex w-full h-full items-center justify-between'>
                <Link to={'/'} className="flex items-center gap-2">
                    <img src={Logo} alt="logo" className="h-12 object-center" />
                    <p className="text-headingColor text-xl font-bold">V - Café</p>
                </Link>
                <div className="flex items-center gap-8">
                    <motion.ul
                        initial={{ opacity: 0, x: 200 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 200 }}
                        className="flex items-center gap-8 justify-center">
                        <motion.li whileHover={{ scale: 1.2 }} className='text-2xl text-textColor hover:text-blue-700  duration-100 cursor-pointer transition-all ease-in-out'>
                            <Link to={'/'} className="flex justify-center items-center"><MdHome /></Link>
                        </motion.li>
                        < motion.li whileHover={{ scale: 1.2 }} className='text-2xl text-textColor hover:text-blue-700  duration-100 cursor-pointer transition-all ease-in-out'>
                            <Link to={'/menus'} className="flex justify-center items-center">
                                <MdMenuBook /></Link >
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.2 }} className='text-2xl text-textColor hover:text-blue-700  duration-100 cursor-pointer transition-all ease-in-out'> <Link to={'/about'} className="flex justify-center items-center">
                            <MdGroups /></Link ></motion.li>
                        <motion.li whileHover={{ scale: 1.2 }} className='text-2xl text-textColor hover:text-blue-700 duration-100 cursor-pointer transition-all ease-in-out'> <Link to={'/contact-us'} className="flex justify-center items-center">
                            <MdPhoneInTalk /></Link ></motion.li>
                        {
                            !userData.user._id ? (
                                <motion.li whileHover={{ scale: 1.2 }} className='text-base text-textColor hover:text-blue-700  duration-100 cursor-pointer transition-all ease-in-out'>
                                    <Link to={'/signin'} className="flex justify-center items-center gap-1 text-lg">
                                        Login<MdLogin className="text-2xl" /></Link >
                                </motion.li>
                            ) : (
                                <motion.li whileHover={{ scale: 1.2 }} className='text-base text-textColor hover:text-blue-700  duration-100 cursor-pointer transition-all ease-in-out' onClick={handlelogout}>
                                    <Link to={'/'} className="flex justify-center items-center gap-1 text-lg">
                                        Logout<MdLogout className="text-2xl" /></Link >
                                </motion.li>
                            )
                        }





                    </motion.ul>
                    <motion.div whileTap={{ scale: 0.6 }} className=' relative flex items-center justify-center'>
                        <Link to={'/cart'} className="flex justify-center items-center gap-1 text-lg">
                        <MdShoppingBasket className='text-textColor text-2xl cursor-pointer' />
                        
                        {(
                            <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                                <p className="text-xs text-white font-semibold">
                                    1
                                </p>
                            </div>

                        )}
                        </Link>
                    </motion.div>
                    {/* <div className='relative'>
                        <motion.img whileTap={{ scale: 0.6 }} src={user ? user.photoURL : Avatar} alt="userprofile" className='w-8 min-w-[40px] h-8 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full' onClick={login} />
                        {
                            isMenu && (
                                <motion.div initial={{ opacity: 0, scale: 0.6 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.6 }}
                                    className="w-40 bg-gray-100 shadow-xl rounded-lg flex flex-col absolute top-12 right-0">
                                    {
                                        user && user.email === "amansjain.aj@gmail.com" && (
                                            <Link to={"/createItem"}>
                                                <p className="px-4 py-2 flex items-center gap-3 cursor-pointer  hover:bg-slate-100 transition-all ease-in-out text-textColor text-base"
                                                    onClick={() => setIsMenu(false)} >
                                                    New Item <MdAdd /></p>
                                            </Link>
                                        )
                                    }
                                    <p className="px-4 py-2 flex items-center gap-3 cursor-pointer  hover:bg-slate-100 transition-all ease-in-out text-textColor text-base" onClick={logout}>Logout <MdLogout /></p>
                                </motion.div>
                            )
                        }
                    </div> */}
                </div>
            </div>

            {/* Mobile  */}
            <div className="flex items-center justify-between md:hidden w-full h-full ">
                <div
                    className="relative flex items-center justify-center"
                // onClick={showCart}
                >
                    <Link to={"/cart"} >
                    <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
                    {(
                        <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                            <p className="text-xs text-white font-semibold">
                                1
                            </p>
                        </div>
                    )}
                    </Link>
                </div>

                <Link to={"/"} className="flex items-center gap-2">
                    <img src={Logo} className="h-12 object-center" alt="logo" />
                    <p className="text-headingColor text-xl font-bold">V - Café</p>
                </Link>

                <div className="relative" onClick={handleMenu}>
                    <motion.div whileTap={{ scale: 0.6 }} className="cursor-pointer text-2xl" alt="userprofile">
                        <HiMenuAlt3 />
                    </motion.div>

                    {isMenu && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.6 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.6 }}
                            className="w-40 bg-primary shadow-xl rounded-lg flex flex-col absolute top-10 right-0"
                        >
                            <ul className="flex flex-col ">
                                <li
                                    className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                                >
                                    <Link to={"/"}>Home</Link>
                                </li>
                                <li
                                    className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                                >
                                    <Link to={"/menus"}>Menu</Link>
                                </li>
                                <li
                                    className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                                >
                                    <Link to={"/about"}>About Us</Link>

                                </li>
                                <li
                                    className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                                >
                                    <Link to={"/contact-us"}>Contact Us</Link>
                                </li>
                            </ul>
                            {!userData.user._id ? (
                                <Link to={"/signin"}
                                    className="m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base"
                                >
                                    Login <MdLogin />
                                </Link>
                            ) : (
                                <Link to={"/"}
                                    className="m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base" onClick={handlelogout}
                                >
                                    Logout <MdLogout />
                                </Link>

                            )
                            }

                        </motion.div>
                    )}
                </div>
            </div >

        </header >
    );
};

export default Header