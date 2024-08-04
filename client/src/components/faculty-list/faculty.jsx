import React, { useEffect, useState} from 'react';
// import data from './faculty-data.jsx'

export default function Faculty() {
    //staff
    const [getstafff, setstafff] = useState([]);

    const getstaffData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/admin/getstaff", {
          method: "GET",
        });
        const data = await response.json();
        console.log(`users: ${data}`);
        setstafff(data);
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
      getstaffData();
    }, []);
  
  return (
    
    <div className='max-w-[1100px] m-auto px-4'>
      {getstafff.map((v,i)=>{
        return(
      <div class="sm:mx-4 md:mx-0 grid md:grid-cols-[35%,auto] justify-between mb-5 pt-4">
          <div class=" text-center md:w-[70%]  pt-4">
             <img src={`http://localhost:5000/${v.photo}`} alt="" class="h-[240px] w-[100%]  img-fluid border border-3 border-black "/>
          </div>
          <div class=" mt-3">          
             <p class="mb-3 sm:text-[16px]"> {v.description}</p>
             <h2 className='text-[23px]'>{v.name}</h2>
             <h4 className='text-[18px]'>{v.post}</h4>
             <h4 className='sm:text-[17px] text-[16px]'> Susanskar Bahuuddeshiy Shikshan Sanstha, Yavatmal.</h4>
           </div>
        </div>
        )
      })}


  <h2 class="text-center my-5 sm:text-[30px] text-[25px]"><span class="text-red-400">P</span><span class="text-green-400">r</span><span class="text-yellow-400">incipal's</span> Message</h2>
    <div class=" ">
      <div class="sm:w-[50%] m-auto mb-5">
        <img src="/images/faculties/K.Usha.jpeg" alt="" class="w-[150%]"/>
      </div>
      <h4 class="mb-4 text-[20px] font-bold ">Dear Parents and Students,</h4>
      <p>
                It is with great pleasure that I welcome you to our school's Website. As Principal I am hugely impressed by the commitment of the management and the staff for providing excellent all round education for our students. 
        The school that is being run under the well-established management of Susanskar Bahhuddeshiy Shikshan Sanstha has earned its name and fame by imparting excellent education since last 20 years. At our institution, we provide an atmosphere for multifaceted devel opment where children are encouraged to channelize their potential in the pursuit of excellence. 
        The school strives hard to make the best possible efforts to instill strong values integrating with academics and extra-curricular activities to the children. Transforming every individual into a self-reliant and independent citizen, the school provides a blending of scholastic and co-scholastic activites. While academic excellence is our major thrust, the school is also devoted to prepare students for life, groom endeavour to always live up to this ideology and inculcate this into everything we do, with the aim that we will be able to ensure that the children grow to their full potential, while constantly being groomed to pass out as men and women competent to bear responsibility in all walks of life. The parents are the most stregthening power in shaping the future of children and their consistent support empowers us to do more and more. I pay my gratitude to them for their faith in us. 
        I would like to extend my sincere gratitude and appreciation for all of the hardworking and dedicated educators and staff serving the school. 
      </p>
      <h3 class="font-bold text-[16px] mt-4">Warm Regards </h3>
          <p class="font-bold text-[16px]">   Mrs. K. Usha </p>
         <p class="font-bold text-[16px]"> PRINCIPAL SUSANSKAR VIDYA MANDI, YTL.</p>
      </div>

  </div>
      
    
  )
}
