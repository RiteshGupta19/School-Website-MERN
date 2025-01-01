import React, { useState } from 'react'
import Header from '../components/header'
import Contact from '../components/contact'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope} from '@fortawesome/free-regular-svg-icons'
import { faLocationDot,faMobileScreen,faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify'
export default function Contact_us() {

  const baseURL = import.meta.env.VITE_REACT_APP_API_URL;

  const [user,setuser]=useState({
    name:"",
    email:"",
    subject:"",
    comment:""
  })
  
  const handleinput=(e)=>{
    let name=e.target.name;
    let value = e.target.value;
    setuser({
      ...user,
      [name]:value,
    })
  } 
  const handlesubmit= async(e)=>{
    e.preventDefault();
    console.log(user)
    try {
      const response = await fetch(`${baseURL}/api/user/contact`,{
        method:"POST",
        headers:{
          'Content-Type':"application/json"
        },
        body:JSON.stringify(user),
      });

      const res_data = await response.json();
      console.log("res from server",res_data.message);


      if(response.ok){
        setuser({name:"",
        email:"",
        subject:"",
        comment:""})
        toast.success("submitted successfully")
       }
       else{
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
       }

     
  } catch (error){
    console.log("register :",error);
  }

  }

  return (
    <div className="">
     <FontAwesomeIcon icon={faWhatsapp} className=' fixed z-10 cursor-pointer bg-green-500 rounded-[60px] text-white sm:text-[300%] text-[200%] p-3 right-[2%] bottom-[3%] shadow-green-500 shadow-lg ' />
     <div className="bg-[url('aboutimg.jpg')] h-[50%] bg-no-repeat bg-cover mix-blend-multiply right-[0px] opacity-50   w-[46%] absolute -z-50"></div>
      <Header/>
        <div class="max-w-[1100px] m-auto ">

        <div className=" py-5 text-center">
      <h2 className="pt-3 m-0 sm:text-[33px] text-[23px]">
        GET IN <span className="text-red-500">T</span>
        <span className="text-green-500">O</span>
        <span className="text-yellow-500">U</span>
        <span className="text-green-500">C</span>
        <span className="text-red-500">H</span>
      </h2>
      <div className="border-2 mt-2 border-blue-400 w-[17%] m-auto"></div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 mx-4">
      <div className="flex items-start mb-3">
        <div className="h-[100%] sm:px-[10%] px-5 pt-4 bg-red-600">
        <FontAwesomeIcon icon={faLocationDot} className='sm:text-[25px] text-white'/>
        </div>
        <div className="h-[100%] w-[100%] p-3 bg-red-500">
          <h4 className="text-yellow-500 sm:text-[21px] text-[18px] mb-1">Address</h4>
          <h5 className="text-white pb-4 sm:text-[16px]">
            Susanskar Vidya Mandir English Medium High School, Singhania Nagar, Arni Road, Yavatmal 445001
          </h5>
        </div>
      </div>
      <div className="flex items-start mb-3">
        <div className="h-[100%] sm:px-[10%] px-5 pt-4 bg-blue-600">
        <FontAwesomeIcon icon={faMobileScreen} className='sm:text-[25px] text-white' />
        </div>
        <div className=" h-[100%] p-3 bg-blue-500 w-[100%]">
          <h4 className="text-yellow-500 sm:text-[21px] text-[18px] mb-1">Phone</h4>
          <h5 className="text-white font-bold text-[18px] cursor-pointer  ">8888999304</h5>
        </div>
      </div>

      <div className="flex  mb-3 ">
        <div className="h-[100%]  sm:px-[10%] px-5 pt-4 bg-green-600">
        <FontAwesomeIcon icon={faEnvelope} className='sm:text-[25px] text-white' />
        </div>
        <div className="bg-green-500 h-[100%] p-3 w-[100%] overflow-x-hidden ">
          <h4 className="text-yellow-300 sm:text-[21px] text-[18px] mb-1">Email</h4>
          <a href="mailto:susanskarvidyamandir@gmail.com" className="text-white">
            <h5 className="font-bold sm:text-[16px] hover:text-black duration-300">susanskarvidyamandir@gmail.com</h5>
            <h5 className="font-bold sm:text-[16px] hover:text-black duration-300">ushakoche@susanskar.org</h5>
            <h5 className="font-bold sm:text-[16px] hover:text-black duration-300">mohitjaiswal@susanskar.org</h5>
            <h5 className="font-bold sm:text-[16px] hover:text-black duration-300">snehatalkute@susanskar.org</h5>
            <h5 className="font-bold sm:text-[16px] hover:text-black duration-300">akshatamaradkar@susanskar.org</h5>
          </a>
        </div>
      </div>
    </div>
            
        
        <form className="mx-4 my-[70px] w-[94%]" onSubmit={handlesubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5 ">
        <div>
        <input type="text"   className="form-input sm:text-[22px] mb-7 fs-3 px-4 py-2 w-full" name="name" placeholder="enter name " id="name" required  autoComplete="off" value={user.name} onChange={handleinput}/>
        <input type="text"   className="form-input sm:text-[22px] mb-7 fs-3 px-4 py-2 w-full" name="email" placeholder="enter email " id="email" required  autoComplete="off" value={user.email} onChange={handleinput}/>
        <input type="text"   className="form-input sm:text-[22px] mb-7 fs-3 px-4 py-2 w-full" name="subject" placeholder="enter subject " id="subject" required  autoComplete="off" value={user.subject} onChange={handleinput}/>

          
        </div>
        <div className="flex ">
          <textarea
            className="form-textarea sm:text-[22px]  fs-3 px-4 py-2 w-full"
            placeholder="Enter comment Here...."
            name="comment"
            id="comment"
            required  autoComplete="off"
            value={user.comment}
            onChange={handleinput}
            cols="30"
            rows="7"
          ></textarea>
          <button type="submit" className="bg-yellow-400 hover:bg-blue-400 duration-500 text-white font-bold  px-[10%] h-[100%]">
            <FontAwesomeIcon icon={faChevronRight} className='text-[30px]'/>
          </button>
        </div>
      </div>
    </form>
        
        
        </div>
      <Contact/>
    </div>
  )
}
