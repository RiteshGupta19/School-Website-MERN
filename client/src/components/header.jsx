import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone ,faCaretDown,faBars} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

export default function Header() {
  let [gallary,gallaryfunc]=useState(false)
  let [admission,admissionfunc]=useState(false)
  let [bars,barsfunc]=useState(false)
  function admi(){
    gallaryfunc(false)
    admissionfunc(!admission)
  }
  let gall=()=>{
    admissionfunc(false)
    gallaryfunc(!gallary)
  }
 
  
  return (
    <div className=' shadow-xl'>

      <div className=" hidden md:grid grid-cols-[60%,auto] bg-black text-white justify-around py-3  m-0 ">
        <div class="flex ">
          <FontAwesomeIcon icon={faEnvelope} className='mt-1' />
          <p className="text-white ml-3 text-decoration-none "><a href=' susanskarvidyamandir@gmail.com'>susanskarvidyamandir@gmail.com</a></p>
        </div>
        <div class="">
          <FontAwesomeIcon icon={faPhone} />
        </div>
      </div>


      <div className=' grid md:grid-cols-[12%,auto] sm:grid-cols-[22%,auto] grid-cols-[29%,auto] p-1 md:justify-around justify-between bg-blue-200'>
        <div>
          <img src='/images/school-logo/school_logo.png' alt='loading'/>
        </div>
      { window.innerWidth > 769 ? 
        <div className='z-50'>
          <Nav gall={gall} gallary={gallary} admi={admi} admission={admission}/>
        </div>
      :
      
        <FontAwesomeIcon icon={faBars} className='sm:text-[27px] text-[24px] p-3 cursor-pointer' onClick={()=>barsfunc(!bars)} />
              }

      </div>
              {
                bars ?           <Nav gall={gall} gallary={gallary} admi={admi} admission={admission}/>
                : ' '
              }
    </div>
  )
}

function Nav({gall,gallary,admi,admission}){
  return(
    <ul class=" md:flex gap-5 sm:text-[18px] md:mt-6  bg-red-100 md:bg-transparent">
            <li class="   hover:text-orange-500 duration-300 cursor-pointer">
            <Link to="/">HOME</Link>
            </li>
            <li class= "  hover:text-orange-500 duration-300 cursor-pointer">
            <Link to="/about">ABOUT</Link>
            </li>
            <Link to='/topper'><li class="hover:text-orange-500 duration-300 cursor-pointer">
              TOPPER LIST
            </li></Link>
            <div  className=' '>
              <button className='hover:text-orange-500 duration-300' onClick={()=>gall()}>
                GALLARY <FontAwesomeIcon icon={faCaretDown} />
              </button>
              <div className='absolute bg-blue-200 z-50 text-center'>
              {gallary ? 
                  <ul classname='z-100 '>
                  <Link to="/latest"><li className='bg-red-500 mt-2 cursor-pointer rounded-md pl-2 pr-4 text-white hover:bg-white hover:text-black duration-300'>LATEST PHOTOS</li></Link>
                  <Link to="/annual"><li className='bg-red-500 mt-2 cursor-pointer rounded-md pl-2 pr-4 text-white hover:bg-white hover:text-black duration-300'>ANNUAL DAY</li></Link>
                  <Link to="/inde"><li className='bg-red-500 mt-2 cursor-pointer rounded-md pl-2 pr-4 text-white hover:bg-white hover:text-black duration-300'>INDEPENDENCE DAY</li></Link>
                  <Link to="/teachers"><li className='bg-red-500 mt-2 cursor-pointer rounded-md pl-2 pr-4 text-white hover:bg-white hover:text-black duration-300'>TEACHERS DAY</li></Link>
                  <Link to="/activity"><li className='bg-red-500 mt-2 cursor-pointer rounded-md pl-2 pr-4 text-white hover:bg-white hover:text-black duration-300'>SCHOOL ACTIVITIES</li></Link>
                  <Link to="/lab"><li className='bg-red-500 mt-2 cursor-pointer rounded-md pl-2 pr-4 text-white hover:bg-white hover:text-black duration-300'> LAB INAUGRATION</li></Link>
                  <Link to="/sports"><li className='bg-red-500 mt-2 cursor-pointer rounded-md pl-2 pr-4 text-white hover:bg-white hover:text-black duration-300'>SPORTS DAY</li></Link>
                  <Link to="/ralley"><li className='bg-red-500 mt-2 cursor-pointer rounded-md pl-2 pr-4 text-white hover:bg-white hover:text-black duration-300'>RALLEY</li></Link>
                  <Link to="/tours"><li className='bg-red-500 mt-2 cursor-pointer rounded-md pl-2 pr-4 text-white hover:bg-white hover:text-black duration-300'>TOUR & EXCURSION</li></Link>
                  <Link to="/achi"><li className='bg-red-500 mt-2 cursor-pointer rounded-md pl-2 pr-4 text-white hover:bg-white hover:text-black duration-300'>ACHIEVMENTS</li></Link>
                  <Link to="/pizza"><li className='bg-red-500 mt-2 cursor-pointer rounded-md pl-2 pr-4 text-white hover:bg-white hover:text-black duration-300'>PIZZA MAKING</li></Link>
                  <Link to="/drawing"><li className='bg-red-500 mt-2 cursor-pointer rounded-md pl-2 pr-4 text-white hover:bg-white hover:text-black duration-300'>DRAWING</li></Link>
                  <Link to="/rangoli"><li className='bg-red-500 mt-2 cursor-pointer rounded-md pl-2 pr-4 text-white hover:bg-white hover:text-black duration-300'>RANGOLI</li></Link>
                  <Link to="/krishna"><li className='bg-red-500 mt-2 cursor-pointer rounded-md pl-2 pr-4 text-white hover:bg-white hover:text-black duration-300'>RADHA KRISHNA COMPETATION</li></Link>
                  <Link to="/plant"><li className='bg-red-500 mt-2 cursor-pointer rounded-md pl-2 pr-4 text-white hover:bg-white hover:text-black duration-300'>PLANTATION</li></Link>
                  <Link to="/camp"><li className='bg-red-500 mt-2 cursor-pointer rounded-md pl-2 pr-4 text-white hover:bg-white hover:text-black duration-300'>CAMP</li></Link>
                  <Link to="/birth"><li className='bg-red-500 mt-2 cursor-pointer rounded-md pl-2 pr-4 text-white hover:bg-white hover:text-black duration-300'>BIRTH ANNIVERSARY</li></Link>
                  <Link to="/science"><li className='bg-red-500 my-2 cursor-pointer rounded-md pl-2 pr-4 text-white hover:bg-white hover:text-black duration-300'>SCIENCE EXHIBITION</li></Link>
                </ul>
                :
                ''
              }
              </div>
              
            </div>
            <Link to="/video"><li class="hover:text-orange-500 duration-300 cursor-pointer">
            EVENT VIDEOS
            </li></Link>
            <div  className=' z-50'>
              <button className='hover:text-orange-500 duration-300' onClick={()=>admi()}>
                ADMISSION <FontAwesomeIcon icon={faCaretDown} />
              </button>
              <div className='absolute bg-blue-200 z-50'>
              {admission ? 
                  <ul class="">
                    <Link to='/form1'><li className='bg-red-500 mt-2 cursor-pointer rounded-md pl-2 pr-4 text-white hover:bg-white hover:text-black duration-300'>ADMISSION FORM 1</li></Link>
                    <Link to='/form2'><li className='bg-red-500 my-2 cursor-pointer rounded-md pl-2 pr-4 text-white hover:bg-white hover:text-black duration-300'>ADMISSION FORM 2</li></Link>
                  </ul>
                  :
                ''
              }
              </div>
            </div>  

            <Link to="/parent_review"><li class="hover:text-orange-500 duration-300 cursor-pointer">
              PARENT REVIEW
            </li></Link> 
            <Link to="/contact"><li class="hover:text-orange-500 duration-300 cursor-pointer">
              CONTACT US
            </li></Link>
          </ul>
  )
}

