import React from 'react'
import Header from '../components/header'
import Contact from '../components/contact'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons'

export default function About() {
  return (
    <div className="">
    <FontAwesomeIcon icon={faWhatsapp} className=' fixed z-10 cursor-pointer bg-green-500 rounded-[60px] text-white sm:text-[300%] text-[200%] p-3 right-[2%] bottom-[3%] shadow-green-500 shadow-lg ' />
     <div className="bg-[url('aboutimg.jpg')] h-[50%] bg-no-repeat bg-cover mix-blend-multiply right-[0px] opacity-50   w-[46%] absolute -z-50"></div>
      <Header/>
        <div class="max-w-[1100px] m-auto ">
            <p class=" text-[17px] mt-[45px]">SSSusanskar has been established in 2002 with the intention of cultivating different kinds of skills and capabilities among the creative kids. It’s major work is to search out the proper intinct and mould versatility in the most attractive manner.
            <br/>
            <br/>
            This is an effort to provide the best to the fertile brain, believing as you sow, so shall you reap. The child’s caliber is nourished to promote a natural and lasting growth rather than the methods which only produce momentary result and eye-impressions.
            <br/>
            <br/>
            Susanskar started its journey on 23rd June 2002 with classes Nursery and KGs. Now it has grown into full-fledged co-educational school having classes Nursery to 10th grade. It is affiliated to the council for Secondary School Certificate Examination, Maharashtra State. Within a short period of time, it has grown into one of the best schools in the city of Yavatmal, Maharshtra.</p>
            <br/>
            <h6 class="text-[16px] font-bold mb-3">Susanskar is founded on very sound principles.</h6>

            <div className='my-3'><FontAwesomeIcon icon={faSquareCheck} className='text-red-500 mx-3 text-[16px]'/> <h5 className="inline text-[16px]"> IN “SANSKAR MAHATTAM DHANAHA” -</h5></div>
            <div className='my-3'><FontAwesomeIcon icon={faSquareCheck} className='text-red-500 mx-3 text-[16px]'/> <h5 className="inline text-[16px]">INSPIRES TO IMBIBE HUMAN VALUES</h5></div>
            <div className='my-3'><FontAwesomeIcon icon={faSquareCheck} className='text-red-500 mx-3 text-[16px]'/> <h5 className="inline text-[16px]">LAYS FOUNDATION OF MODERN EDUCATION</h5></div>
            <div className='my-3'><FontAwesomeIcon icon={faSquareCheck} className='text-red-500 mx-3 text-[16px]'/> <h5 className="inline text-[16px] " >A RATIONAL COMMITMENT TO INDIAN CULTURE</h5></div>

            <p class="text-[17px] my-5 pb-5">Susanskar has adopted for its educational endeavour Holistic learning which transforms a person into an ideal and outstanding personality by inculcating human values and qualities to make him more dynamic, discreet, duty conscious and responsible towards himself as well as the nature, society and Nation.</p>

          </div>

      <Contact/>
    </div>
  )
}
