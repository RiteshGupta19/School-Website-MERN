import React from 'react'

export default function Admission_form1() {
  return (
    <div className='bg-white w-[100%] h-[100%]  text-center py-6 max-w-[1100px] m-auto md:my-5 px-1'>
        <img src='/images/admission-form/logo1.jpeg' className='w-[150px] m-auto'/>
        <h1 className='font-bold text-[190%]'>(ENGLISH MEDIUM SCHOOL)</h1>
        <h1 className=' font-serif text-[190%]'>Singhaniya Nagar, Yavatmal Ph. No. 254854</h1>
        <div className='grid md:grid-cols-[auto,50%,25%] mb-6'>
          <div className=''></div>
          <div className='text-red-600 text-[27px] font-bold mt-6'> Student Data Form</div>
          <div className=''>
            <img src='.' className='ml-3 border-2 border-black w-[200px] h-[210px]' />
          </div>
        </div>

        <div className='text-left'>
          <h1 className='text-[24px] ml-3 mt-[60px]'>Student Details:-</h1>
          <hr className='border-2'/>

          <div className='grid md:grid-cols-4 sm:grid-cols-2 mt-4 gap-6'>
            <div className=''>
              <input type='text' className='p-1 mb-1 border-2 w-[100%] text-[20px]'></input>
              <label className='text-[18px]'>Form No.</label>
            </div>
            <div className=''>
              <input type='date' className='p-1 mb-1 border-2 w-[100%] text-[19px]'></input>
              <label className='text-[18px]'>Date of Issue</label>
            </div>
            <div className=''>
              <input type='date' className='p-1 mb-1 border-2 w-[100%] text-[19px]'></input>
              <label className='text-[18px]'>Date of Submission</label>
            </div>
            <div className='pr-2'>
              <input type='file' className='border-2 w-[100%] mb-1 text-[20px]'></input>
              <label className='text-[18px]'> Upload Photo</label>
            </div>
          </div>

          <div className='grid sm:grid-cols-[24%,auto] mt-3 px-2'>
            <h1 className='text-[18px] mt-2'>Full Name:-</h1>
            <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
          </div>

          <div className='grid sm:grid-cols-[24%,auto,auto]  mt-3 px-2'>
            <h1 className='text-[18px]  sm:mt-2 sm:mb-0 mb-2'>Date of Birth:-</h1>
            <div>
              <input type='date' className='border-2 text-[20px] p-1'/>
            </div>
            <div className='text-[17px] mt-3'>
              <input type='radio' name='male'/>
              <label className='mr-5 ml-1'>Male</label>
              <input type='radio' name='male'/>
              <label className='ml-1'>Female</label>
            </div>
          </div>

          <div className='grid sm:grid-cols-[24%,auto] mt-3 px-2'>
            <h1 className='text-[18px] sm:mt-2'>Date of Birth(In Words):-</h1>
            <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
          </div>

          <div className='grid md:grid-cols-2 sm:gap-10 mt-3 px-2'>
          <div className='grid sm:grid-cols-2 '>
            <h1 className='text-[18px] sm:mt-2'>Birth Place:-</h1>
            <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
          </div>
          <div className='grid sm:grid-cols-2 '>
            <h1 className='text-[18px] mt-2'>Age:-</h1>
            <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
          </div>
          </div>

          <div className='grid md:grid-cols-2 sm:gap-10 mt-3 px-2'>
          <div className='grid sm:grid-cols-2 '>
            <h1 className='text-[18px] sm:mt-2'>Blood Place:-</h1>
            <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
          </div>
          <div className='grid sm:grid-cols-2 '>
            <h1 className='text-[18px] mt-2'>Religion:-</h1>
            <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
          </div>
          </div>

          <div className='grid md:grid-cols-2 sm:gap-10 mt-3 px-2'>
          <div className='grid sm:grid-cols-2 '>
            <h1 className='text-[18px] sm:mt-2'>Caste:-</h1>
            <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
          </div>
          <div className='grid sm:grid-cols-2 '>
            <h1 className='text-[18px] mt-2'>Category:-</h1>
            <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
          </div>
          </div>

          <div className='grid md:grid-cols-2 sm:gap-10 mt-3 px-2'>
          <div className='grid sm:grid-cols-2 '>
            <h1 className='text-[18px] sm:mt-2'>Identification Mark:-</h1>
            <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
          </div>
          <div className='grid sm:grid-cols-2 '>
            <h1 className='text-[18px] mt-2'>Admission sought to class:-</h1>
            <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
          </div>
          </div>


          <h1 className='text-[24px] ml-3 mt-[60px]'>Parent Data:-</h1>
          <hr className='border-2'/>

          <div className='grid md:grid-cols-2 sm:gap-10 mt-3 px-2'>
          <div className='grid sm:grid-cols-2 '>
            <h1 className='text-[18px] sm:mt-2'>Father Mr:-</h1>
            <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
          </div>
          <div className='grid sm:grid-cols-2 '>
            <h1 className='text-[18px] mt-2'>Mother Mrs:-</h1>
            <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
          </div>
          </div>

          <div className='grid md:grid-cols-2 sm:gap-10 mt-3 px-2'>
          <div className='grid sm:grid-cols-2 '>
            <h1 className='text-[18px] sm:mt-2'>Father Qualification:-</h1>
            <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
          </div>
          <div className='grid sm:grid-cols-2 '>
            <h1 className='text-[18px] mt-2'>Mother Qualification:-</h1>
            <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
          </div>
          </div>


          <h1 className='text-[24px] ml-3 mt-[60px]'>Work Details:-</h1>
          <hr className='border-2'/>

          <div className='grid md:grid-cols-2 sm:gap-10 mt-3 px-2'>
          <div className='grid sm:grid-cols-2 '>
            <h1 className='text-[18px] sm:mt-2'>Father Profession:-</h1>
            <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
          </div>
          <div className='grid sm:grid-cols-2 '>
            <h1 className='text-[18px] mt-2'>Mother Profession:-</h1>
            <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
          </div>
          </div>

          <div className='grid sm:grid-cols-[24%,auto] mt-3 px-2'>
            <h1 className='text-[18px] sm:mt-2'>Address:-</h1>
            <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
          </div>

          <div className='grid md:grid-cols-2 sm:gap-10 sm:mt-3 px-2'>
          <div className='grid sm:grid-cols-2 '>
            <h1 className='text-[18px] mt-2'>Tel No:-</h1>
            <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
          </div>
          <div className='grid sm:grid-cols-2 '>
            <h1 className='text-[18px] mt-2'>Mobile No:-</h1>
            <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
          </div>
          </div>

          <div className='grid md:grid-cols-2 gap-10 mt-3 px-2'>
          <div className='grid sm:grid-cols-2 '>
            <h1 className='text-[18px] sm:mt-2'>E-Mail:-</h1>
            <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
          </div>
          </div>

          <div className='grid sm:grid-cols-[24%,auto] mt-3 px-2'>
            <h1 className='text-[18px] sm:mt-2'>No. of Children:-</h1>
            <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
          </div>

          <div className='text-center mt-7'>
            <button className='hover:bg-blue-500 bg-blue-600 text-white rounded-md py-2 px-5 text-[18px]'>Submit</button>
          </div>  

        </div>

    </div>  
  )
}
