import {React,useState,useEffect} from 'react'
import Header from '../components/header'
import Contact from '../components/contact'

export default function Videos() {
  const [video, setvideo] = useState([]);
  const baseURL = import.meta.env.VITE_REACT_APP_API_URL;

    const getvideourl = async () => {
      try {
        const response = await fetch(`${baseURL}/api/admin/getvideos`, {
          method: "GET",
        });
        const data = await response.json();
        console.log(`users: ${data}`);
        setvideo(data);
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
      getvideourl();
    }, []);

  return (
    <>
    <Header/>
    <div className='p-[20px] text-center'>
      <h1 className='text-[33px] mb-9 underline'>Videos</h1>
      <div className='grid grid-cols-3 gap-7 w-[1100px] m-auto py-7 '>
        {
          video.map((v,i)=>{
            return <>
            <div>
               <iframe width='100%' height='270px'  src={`${v.videourl}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            </>
          })
        }

      </div>
    </div>
    <Contact/>
    </>
  )
}
