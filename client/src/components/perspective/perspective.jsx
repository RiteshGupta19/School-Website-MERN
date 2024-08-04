import React from 'react'
import predata from './pre-data.jsx'

export default function Perspective() {
  return (
    <div className='text-center max-w-[1100px] m-auto pt-4'>
          <h2 class="text-center mt-5 sm:text-[30px] text-[25px]">A Fresh <span class="text-red-400">P</span><span class="text-green-400">e</span><span class="text-yellow-400">rspective</span> On Education</h2>
          <p class="mb-4 text-center text-gray-500">Susanskar School has developed a fresh perspective on education to enhance the value and qulaity of education. It believes in :</p>

          <div class="grid md:grid-cols-3 sm:grid-cols-2   mt-[40px] gap-4">
            {predata.map((v,i)=>{
              return(
                <div class="  border-2 border-black h-[236px] px-0 mb-3 mx-2">
                  <h4 class="text-center p-2 bg-black text-white">{v.header}</h4>
                  <p class="p-2 text-left"> {v.body}</p>
                </div>
              )
            })}
              
          </div>

    </div>
  )
}
