import React from 'react'

export default function Admission_form2() {
  return (
    <div className='bg-white w-[100%] h-[100%]  text-center py-8 max-w-[1100px] m-auto md:my-6  px-1'>
        <img src='/images/admission-form/logo.jpeg' className='w-[150px] m-auto'/>
        <h1 className='font-bold text-[190%]'>SUSANSKAR VIDYA MANDIR</h1>
        <h1 className=' font-serif text-[190%]'>Singhaniya Nagar, Arni Road, Yavatmal - 445001<br/>School Affiliation No. Mh-73/2002/F6900(Y)</h1>
        <div className='text-red-600 text-[27px] font-bold mt-[40px]'> Student Data Form</div>
        <div className='grid lg:grid-cols-[50%,auto]'>
          <div></div>
          <div className='grid sm:grid-cols-3  text-left'>
            <div>
              <img src='.' className='ml-3 border-2 border-gray-400 w-[150px] h-[160px]' />
              <div className='ml-3'>
                <input type='file' className='mt-3 w-[150px]'/>
                <label className='text-[20px] block mb-5'>Student</label>
              </div>
            </div>
            <div>
              <img src='.' className='ml-3 border-2 border-gray-400 w-[150px] h-[160px]' />
              <div className='ml-3'>
                <input type='file' className='mt-3 w-[150px]'/>
                <label className='text-[20px] block mb-5'>Father</label>
              </div>
            </div>
            <div>
              <img src='.' className='ml-3 border-2 border-gray-400 w-[150px] h-[160px]' />
              <div className='ml-3'>
                <input type='file' className='mt-3 w-[150px] '/>
                <label className='text-[20px] block mb-5'>Mother</label>
              </div>
            </div>
         </div>
        </div>

        <div className='text-left'>
          <h1 className='text-[24px] ml-3 mt-[60px]'>Student Details:-</h1>
          <hr className='border-2'/>

          <div className='grid md:grid-cols-4 sm:grid-cols-2 mt-4 px-2 gap-6'>
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
            <div className=''>
              <input type='text' className='p-1 mb-1 border-2 w-[100%] text-[20px]'></input>
              <label className='text-[18px]'>Student Saral</label>
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
              <h1 className='text-[18px] sm:mt-2'>Nationality:-</h1>
              <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
            </div>
            <div className='grid sm:grid-cols-2 '>
              <h1 className='text-[18px] mt-2'>Mother Tongue:-</h1>
              <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
            </div>
          </div>

          <div className='grid md:grid-cols-2 sm:gap-10 mt-3 px-2'>
            <div className='grid sm:grid-cols-2 '>
              <h1 className='text-[18px] sm:mt-2'>Medical History:-</h1>
              <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
            </div>
            <div className='grid sm:grid-cols-2 '>
              <h1 className='text-[18px] mt-2'>Identification Mark:-</h1>
              <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
            </div>
          </div>

          <div className='grid md:grid-cols-2 sm:gap-10 mt-3 px-2'>
            <div className='grid sm:grid-cols-2 '>
              <h1 className='text-[18px] sm:mt-2'>Admission sought to class:-</h1>
              <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
            </div>
            <div className='grid sm:grid-cols-2 '>
              <h1 className='text-[18px] mt-2'>Last Result:-</h1>
              <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
            </div>
          </div>

          <div className='grid sm:grid-cols-[24%,auto] mt-3 px-2'>
            <h1 className='text-[18px] sm:mt-2'>Last School Name:-</h1>
            <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
          </div>

          <div className='grid sm:grid-cols-[24%,auto] mt-3 px-2'>
            <h1 className='text-[18px] sm:mt-2'>Reason to Leave Last School:-</h1>
            <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
          </div>

          <div className='text-red-600 text-[27px] font-bold mt-[60px] mb-8 text-center'> Parent's Data Form</div>

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
            <h1 className='text-[18px] sm:mt-2'>Qualification:-</h1>
            <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
          </div>
          <div className='grid sm:grid-cols-2 '>
            <h1 className='text-[18px] mt-2'>Qualification:-</h1>
            <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
          </div>
          </div>

          <div className='grid md:grid-cols-2 sm:gap-10 mt-3 px-2'>
          <div className='grid sm:grid-cols-2 '>
            <h1 className='text-[18px] sm:mt-2'>Profession:-</h1>
            <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
          </div>
          <div className='grid sm:grid-cols-2 '>
            <h1 className='text-[18px] mt-2'>Profession:-</h1>
            <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
          </div>
          </div>

          <div className='grid md:grid-cols-2 sm:gap-10 mt-3 px-2'>
          <div className='grid sm:grid-cols-2 '>
            <h1 className='text-[18px] sm:mt-2'>Government/Private:-</h1>
            <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
          </div>
          <div className='grid sm:grid-cols-2 '>
            <h1 className='text-[18px] mt-2'>Government/Private:-</h1>
            <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
          </div>
          </div>

          <div className='grid md:grid-cols-2 sm:gap-10 mt-3 px-2'>
          <div className='grid sm:grid-cols-2 '>
            <h1 className='text-[18px] sm:mt-2'>Monthly Income:-</h1>
            <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
          </div>
          <div className='grid sm:grid-cols-2 '>
            <h1 className='text-[18px] mt-2'>Monthly Income:-</h1>
            <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
          </div>
          </div>

          <div className='grid md:grid-cols-2 sm:gap-10 mt-3 px-2'>
          <div className='grid sm:grid-cols-2 '>
            <h1 className='text-[18px] sm:mt-2'>Annual Income:-</h1>
            <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
          </div>
          <div className='grid sm:grid-cols-2 '>
            <h1 className='text-[18px] mt-2'>Annual Income:-</h1>
            <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
          </div>
          </div>

          <div className='grid md:grid-cols-2 sm:gap-10 mt-3 px-2'>
          <div className='grid sm:grid-cols-2 '>
            <h1 className='text-[18px] sm:mt-2'>Mobile No:-</h1>
            <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
          </div>
          <div className='grid sm:grid-cols-2 '>
            <h1 className='text-[18px] mt-2'>Mobile No:-</h1>
            <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
          </div>
          </div>

          <div className='grid md:grid-cols-2 sm:gap-10 mt-3 px-2'>
          <div className='grid sm:grid-cols-2 '>
            <h1 className='text-[18px] sm:mt-2'>WhatsApp No:-</h1>
            <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
          </div>
          <div className='grid sm:grid-cols-2 '>
            <h1 className='text-[18px] mt-2'>WhatsApp No:-</h1>
            <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
          </div>
          </div>

          <div className='grid md:grid-cols-2 sm:gap-10 mt-3 px-2'>
          <div className='grid sm:grid-cols-2 '>
            <h1 className='text-[18px] sm:mt-2'>Email Address:-</h1>
            <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
          </div>
          <div className='grid sm:grid-cols-2 '>
            <h1 className='text-[18px] mt-2'>Email Address:-</h1>
            <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
          </div>
          </div>

          <div className='grid md:grid-cols-2 sm:gap-10 mt-3 px-2'>
          <div className='grid sm:grid-cols-2 '>
            <h1 className='text-[18px] sm:mt-2'>Residential Address:-</h1>
            <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
          </div>
          <div className='grid sm:grid-cols-2 '>
            <h1 className='text-[18px] mt-2'>Residential Address:-</h1>
            <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
          </div>
          </div>

          <div className='text-red-600 text-[27px] font-bold mt-[60px] mb-8 text-center'> Parent's Data Form</div>

          <div className='text-[18px] mt-2 px-2'>No. of Siblings:-</div>

          <div className='grid md:grid-cols-3 sm:grid-cols-2'>
              <div className='flex'> 
                <div className='text-[18px] mt-2 mx-8'>1.</div>
                <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'></input>
              </div>
              <div className='flex mt-3'> 
                <div className='text-[18px] mt-2 mx-8'>STD.</div>
                <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'></input>
              </div>
              <div className='flex mt-3'> 
                <div className='text-[18px] mt-2 mx-8'>School</div>
                <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'></input>
              </div>
          </div>
          <div className='grid md:grid-cols-3 sm:grid-cols-2 mt-3'>
              <div className='flex'> 
                <div className='text-[18px] mt-2 mx-8'>2.</div>
                <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'></input>
              </div>
              <div className='flex mt-3'> 
                <div className='text-[18px] mt-2 mx-8'>STD.</div>
                <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'></input>
              </div>
              <div className='flex mt-3'> 
                <div className='text-[18px] mt-2 mx-8'>School</div>
                <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'></input>
              </div>
          </div>

          <div className='text-[18px] mt-4 px-2'>IF THE PARENTS ARE DIVORCEE/EXPIRED/CHILD IS HAVING STEP PARENTS/CHILDS ADOPTED. (MANADATORY)</div>

          <div className='text-red-600 text-[27px] font-bold mt-[60px] mb-8 text-center'> Declaration By Parent</div>

          <div className='grid sm:grid-cols-[24%,auto] mt-3 px-2'>
            <h1 className='text-[18px] sm:mt-2'>Pupil's Name in Full:-</h1>
            <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
          </div>

          <div className='grid md:grid-cols-[24%,auto,auto] sm:grid-cols-2 mt-3'>
              <div className='flex'> 
                <div className='text-[17px] mt-2 mx-2'>STD:-</div>
                <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'></input>
              </div>
              <div className='flex mt-3'> 
                <div className='text-[17px] mt-2 mx-2 '>Class Roll No:-</div>
                <input type='text' className='w-[60%] text-[20px] border-b-2 border-black p-1'></input>
              </div>
              <div className='flex mt-3'> 
                <div className='text-[17px] mt-2 mx-2'>General Registraction No:-</div>
                <input type='text' className='w-[50%] text-[20px] border-b-2 border-black p-1'></input>
              </div>
          </div>

          <div className='grid md:grid-cols-3 sm:grid-cols-2 mt-3'>
              <div className='flex'> 
                <div className='text-[18px] mt-2 mx-2'>Date of Birth:-</div>
                <input type='date' className='p-1 mb-1 border-2 w-[50%] text-[19px]'></input>
              </div>
              <div className='flex'> 
                <div className='text-[18px] mt-2 mx-2'>Religion:-</div>
                <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'></input>
              </div>
              <div className='flex mt-3'> 
                <div className='text-[18px] mt-2 mx-2'>Caste:-</div>
                <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'></input>
              </div>
          </div>

          <div className='grid sm:grid-cols-[24%,auto] mt-3 px-2'>
            <h1 className='text-[18px] sm:mt-2'>Parent's/Guardian's Name:-</h1>
            <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
          </div>

          <div className='grid sm:grid-cols-[24%,auto] mt-3 px-2'>
            <h1 className='text-[18px] sm:mt-2'>Parent's Qualification:-</h1>
            <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
          </div>

          <div className='grid sm:grid-cols-[24%,auto] mt-3 px-2'>
            <h1 className='text-[18px] sm:mt-2'>Parent's Profession (IN Detail):-</h1>
            <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
          </div>

          <div className='grid sm:grid-cols-[24%,auto] mt-3 px-2'>
            <h1 className='text-[18px] sm:mt-2'>Home Address:-</h1>
            <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
          </div>

          <div className='grid sm:grid-cols-[24%,auto] mt-3 px-2'>
            <h1 className='text-[18px] sm:mt-2'>Telephone No. (Home):-</h1>
            <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
          </div>

          <div className='grid sm:grid-cols-[24%,auto] mt-3 px-2'>
            <h1 className='text-[18px] sm:mt-2'>Office Address:-</h1>
            <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
          </div>

          <div className='grid md:grid-cols-2 sm:gap-10 mt-3 px-2'>
          <div className='grid sm:grid-cols-2 '>
            <h1 className='text-[18px] sm:mt-2'>Telephone No.:-</h1>
            <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
          </div>
          <div className='grid sm:grid-cols-[30%,auto] '>
            <h1 className='text-[18px] mt-2'>Email-Id:-</h1>
            <input type='text' className='w-[100%] text-[20px] border-b-2 border-black p-1'/>
          </div>
          </div>

          <div className='text-[18px] font-sans mt-5 px-2'>
            <span className='font-bold text-[18px]'>
              To,<br/>

              The Head Mistress,<br/>
            </span>
            Susanskar Vidya Mandir<br/>

            Pre-Primary, Primary and High School,<br/>

            Yavatmal
          </div>
          <div className='mt-8 font-serif text-[19px] px-2'>
          I THE UNDERSIGNED, HAVE READ, THE DECLARATION BY THE SCHOOL, RULES AND REGULATIONS OF THE SCHOOL AND I AGREE TO ABIDE THEM AND CO-OPERATE WITH YOU IN THE INTEREST OF MY DAUGHTER/SON/WARD. I WILL ACCEPT THE DECISION OF THE SCHOOL AND AUTHORITY AS REGARDS THE INTERPRETATION OF THE RULES AS FINAL.
          </div>

          <div className='grid lg:grid-cols-[30%,auto]  mt-6 px-2' >
            <div className='text-[18px] '>
              Enclosures:
            </div>
            <div className='grid sm:grid-cols-2'>
            <div>
              <div className='flex mt-2'>
                <input type='checkbox'/>
                <div className='text-[17px] ml-2'>PHOTOGRAPH OF STUDENT</div>
              </div>
              <div className='flex mt-2'>
                <input type='checkbox'/>
                <div className='text-[17px] ml-2'>BIRTH CERTIFICATE</div>
              </div>
              <div className='flex mt-2'>
                <input type='checkbox'/>
                <div className='text-[17px] ml-2'>PREVIOUS YEAR'S MARKSHEET</div>
              </div>
              <div className='flex mt-2'>
                <input type='checkbox'/>
                <div className='text-[17px] ml-2'>PARENT'S HOME ADDRESS PROOF</div>
              </div>
            </div>

            <div>
              <div className='flex mt-2'>
                <input type='checkbox'/>
                <div className='text-[17px] ml-2'>CHILD AADHAR CARD</div>
              </div>
              <div className='flex mt-2'>
                <input type='checkbox'/>
                <div className='text-[17px] ml-2'>TRANSFER CERTIFICATE</div>
              </div>
              <div className='flex mt-2'>
                <input type='checkbox'/>
                <div className='text-[17px] ml-2'>MEDICAL FITNESS CERTIFICATE OF THE CHILD</div>
              </div>
              <div className='flex mt-2'>
                <input type='checkbox'/>
                <div className='text-[17px] ml-2'>PARENT'S WORKING ADDRESS PROOF</div>
              </div>
            </div>
          </div>
          </div>

          <div className='text-center mt-7'>
            <button className='hover:bg-blue-500 bg-blue-600 text-white rounded-md py-2 px-5 text-[18px]'>Submit</button>
          </div> 



      </div>

    </div>    
  )
}
