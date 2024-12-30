import Header from '../components/header.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { faGraduationCap,faCloud,faPerson } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';
import { useState,useEffect } from 'react';
import Slider from '../components/slider/slider.jsx';
import Faculty from '../components/faculty-list/faculty.jsx';
import Perspective from '../components/perspective/perspective.jsx';
import Program from '../components/our-programs/program.jsx';
import Contact from '../components/contact.jsx';
function Home() {


  const scrollToTarget = () => {
    const targetElement = document.getElementById('idd');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const targetElement = document.getElementById('idd');
      if (targetElement) {
        const { top } = targetElement.getBoundingClientRect();
        setIsInView(top >= 0 && top <= window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  return (
    <div className=''>
      <FontAwesomeIcon icon={faWhatsapp} className=' fixed z-10 cursor-pointer bg-green-500 rounded-[60px] text-white sm:text-[300%] text-[200%] p-3 right-[2%] bottom-[3%] shadow-green-500 shadow-lg ' />
       <Header/>
       <Slider onScrollToTarget={scrollToTarget}/> 

       <div id='idd' class="bg-black grid grid-cols-3 text-white m-0 text-center sm:py-[4%] py-0">
        <div class=" my-3">
          <FontAwesomeIcon icon={faCloud} className='text-red-400 sm:text-[34px]' />
          <h1 className='sm:text-[33px] text-pink-400'>{isInView && <CountUp end={21} duration={2} />}</h1>
          <h3>CLASSES</h3>
        </div>
        <div class=" my-3">
          <FontAwesomeIcon icon={faGraduationCap} className='text-green-400 sm:text-[34px]'/>
          <h1 className='sm:text-[33px] text-pink-400'>{isInView && <CountUp end={35} duration={2} />}</h1>
          <h3>STAFFF</h3>
        </div>
        <div class=" my-3">
          <FontAwesomeIcon icon={faPerson} className='text-yellow-400 sm:text-[34px]' />
          <h1 className='sm:text-[33px] text-pink-400'>{isInView && <CountUp end={429} duration={2} />}</h1>
          <h3>STUDENTS</h3>
        </div>
      </div>

      <h2 class="text-center my-5 sm:text-[30px] text-[25px]"><span class="text-red-400">D</span><span class="text-green-400">i</span><span class="text-yellow-400">rector</span> Message</h2>

      <Faculty/>
      <Perspective/>
      <Program/>

      <div class=" text-center w-100 bg-[url('11.jpg')] h-[100%] bg-no-repeat bg-cover bg-fixed ">
        <div class=" py-5">
          <h2 class=" pt-3  m-0 text-white sm:text-[30px] text-[25px] "> Our <span class="text-red-400">S</span><span class="text-green-400">t</span><span class="text-yellow-400">a</span><span class="text-green-400">f</span><span class="text-red-400">f</span> Programs</h2>
          <div className='border-[2px] w-[10%] mb-5 mt-2 m-auto border-blue-600'></div>
        </div> 
        <Contact/>
      </div>

    </div>
  );
}

export default Home;
