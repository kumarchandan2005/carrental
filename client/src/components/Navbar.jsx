import React, { useState } from "react";
import { assets, menuLinks } from "../assets/assets";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";


const Navbar = ({ }) => {
  const {setShowLogin, user, logout, isOwner, axios, setIsOwner} = useAppContext()
  const location = useLocation();
  const [open, setopen] = useState(false);
  const navigate = useNavigate();

  const changeRole = async ()=>{
    try {
       const {data} = await axios.post('/api/owner/change-role')
       if(data.success){
        setIsOwner(true);
        toast.success(data.message)
       }else{
         toast.error(data.message)
       }
    } catch (error) {
       toast.error(error.message)
    }
}

  return (
    <div
      className={`flex item-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 text-gray-600 border-b border-borderColor relative transition-all ${
        location.pathname === "/" && "bg-light"
      } `}
    >
      <Link to="/">
        <img src={assets.logo} alt="logo" className="h-8" />
      </Link>
      <div
        className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16 max-sm:border-t border-borderColor right-0 flex flex-col sm:flex-row items-center sm:item-center gap-4 sm:gap-8 max-sm:p-4 transition-all duration-300 z-50 ${
          location.pathname === "/" ? "bg-light" : "bg-white"
        } ${open ? "max-sm:translate-x-0" : "max-sm:translate-x-full"} `}
      >
        {menuLinks.map((link, index) => (
          <Link key={index} to={link.path}>
            {link.name}
          </Link>
        ))}
        <div className="hidden lg:flex item-center text-sm gap-2 border border-borderColor px-3 rounded-full max-w-56">
          <input
            type="text"
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
          />
          <img src={assets.search_icon} alt="search" />
        </div>
        <div className="flex max-sm:flex-col items-start not-first:  sm:items-center gap-6 ">
          {/* <Link
            to="/owner"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            Dashboard
          </Link> */}
          <button onClick={()=> isOwner ? navigate('/owner') : changeRole()} className=" flex cursor-pointer">{isOwner ? 'Dashboard' : 'List cars'}</button>
          <button
            onClick={() => {user ? logout() : setShowLogin(true)}}
            className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition-all text-white rounded-lg " >
              {user ? 'Logout' : 'Login'}
           </button>
        </div>
      </div>
      <button
        className="sm:hidden cursor-pointer"
        aria-label="menu"
        onClick={() => setopen(!open)}
      >
        <img src={open ? assets.close_icon : assets.menu_icon} alt="menu" />
      </button>
    </div>
  );
};

export default Navbar;
