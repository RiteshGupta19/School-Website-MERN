import React from 'react'
import Header from '../components/header'
import Contact from '../components/contact'

export default function Topper_list() {
  return (
      <div className='bg-white'>
          <Header/>
            <div className='p-[30px] text-center m-auto max-w-[1200px]'>
              <h1 className='text-[30px] '>TOPPER LIST</h1>
              <div className='text-left sm:flex gap-5 my-7'>
                  <div>
                    <select
                      id="select"
                      name="select"
                      className="mb-5  border-2 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                      <option value="">-- SELECT YEAR --</option>
                      <option >2007</option>
                      <option >2008</option>
                      <option >2009</option>
                      <option >2010</option>
                      <option >2011</option>
                      <option >2012</option>
                      <option >2013</option>
                      <option >2014</option>
                      <option >2015</option>
                      <option >2016</option>
                      <option >2017</option>
                      <option >2018</option>
                      <option >2019</option>
                      <option >2020</option>
                      <option >2021</option>
                      <option >2022</option>
                      <option >2023</option>
                      <option >2024</option>
                    </select>
                  </div>

                  <div>
                    <select
                      id="select"
                      name="select"
                      className=" mb-5 border-2 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                      <option value="">-- SELECT YEAR --</option>
                      <option >2007</option>
                      <option >2008</option>
                      <option >2009</option>
                      <option >2010</option>
                      <option >2011</option>
                      <option >2012</option>
                      <option >2013</option>
                      <option >2014</option>
                    </select>
                  </div>
                  <div>
                   <button className='py-2 px-6 bg-blue-600 hover:bg-blue-500 text-white rounded-lg '> GET LIST</button>
                  </div>
                </div>
            </div>
          <Contact/>
      </div>
  )
}
