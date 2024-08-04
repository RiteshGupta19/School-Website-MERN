import React, { useState } from 'react'
import progdata from './programm.jsx'

export default function Program() {
  let [btn,btnfunc]=useState(0)
  let btnclick=(i)=>{
    btnfunc(i)
  }
  return (
    <div className='w-100 bg-pink-200 text-center py-5'>
      <div className=' max-w-[1100px] px-4 m-auto'>
            <h2 class=" sm:text-[30px] text-[25px]  "><span class="text-red-400">O</span><span class="text-green-400">u</span><span class="text-yellow-400">r</span> Programs</h2>
            <div className='border-[2px] w-[10%] mb-5 mt-2 m-auto border-blue-600'></div>
            <div className='md:flex'>
            <div className='md:w-[30%] '>
            {progdata.map((v,i)=>{
              return(
                <>
                  <button key={i} onClick={()=>btnclick(i)} className={ `${btn===i ? ' bg-black text-white' : ' bg-white  text-black'} md:block  w-[100%] py-4  hover:bg-black hover:text-white text-left`}>{v.icon}{v.button}</button>
                </>
              )
            })}
            </div>
            <div className='md:w-[70%]'>
            {progdata.map((value,index)=>{
              return(
                btn===index ?
                <div key={index} className='p-4 text-left text-white text-[17px] h-[100%]  bg-green-500'>
                  {value.body}
                </div>
                :
                ''
              )
            })}
            </div>
            </div>
\       </div>     
    </div>
  )
}
