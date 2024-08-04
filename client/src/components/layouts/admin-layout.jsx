import React, { useContext, useState } from 'react';
import { FaUserShield } from "react-icons/fa6";
import { MdContactPhone,MdPersonAdd,MdOutlineImage,MdOutlineVideoCameraFront,MdOndemandVideo,MdOutlinePlaylistAddCheck} from "react-icons/md";
import { Link, Navigate, NavLink, Outlet } from 'react-router-dom'
import { AuthContext } from '../../store/authcontext';
import { toast } from 'react-toastify';


export default function Admin_layout() {
  const { logged ,setLogged} = useContext(AuthContext);

    if (!logged) {
    return <Navigate to="/login" />;
  }
  const logout=()=>{
    setLogged(false)
    toast.success("logout successfully")
    return <Navigate to="/" />;
  }
  //hide logged in page
  const [hide,sethide]=useState(true)
  const hidee=()=>{
    sethide(false)
  }
  return (
    <>
      <header className=''>
        <div className=' z-20 text-[24px] p-3 w-[100%] fixed top-0 flex justify-between  border-0 border-b-4  border-red-300 shadow-lg bg-red-100 mb-8'>
          <div className='flex gap-10' onClick={hidee}>
            <div> <NavLink to='/admin/contacts' className=" hover:text-red-600"><MdContactPhone  className='m-auto '/>contact</NavLink></div>
            <div ><NavLink to='/admin/staff' className=" hover:text-red-600"><MdPersonAdd  className='m-auto'/>Add Staff</NavLink></div>
            <div ><NavLink to='/admin/gallary' className=" hover:text-red-600"><MdOutlineImage   className='m-auto '/>Add Gallary</NavLink></div>
            <div ><NavLink to='/admin/videos' className=" hover:text-red-600"><MdOndemandVideo    className='m-auto '/>Add Videos</NavLink></div>
            <div ><NavLink to='/admin/parent-review' className=" hover:text-red-600"><MdOutlineVideoCameraFront className='m-auto '/>Add Parent-Reviews</NavLink></div>
            {/* <div ><NavLink to='/admin/admin-admission-list' className=" hover:text-red-600"><MdOutlinePlaylistAddCheck className='m-auto '/>Topper List</NavLink></div> */}
          </div>
          
          <div className=' mt-1'>
            <button className="bg-red-300 p-3 rounded-md hover:bg-red-800 hover:text-white" 
            onClick={logout}
            >LOGOUT</button>
          </div>
        </div>
        <div className={` text-center mt-[15%]  ${hide ? 'block' : 'hidden'}`}>
          <h1 className='text-[50px]'>SUSANSKAR</h1>
          <h2 className='text-[26px]'>YOU ARE LOGGED IN</h2>
        </div>
      </header>
      <Outlet/>
    </>
  )
}
