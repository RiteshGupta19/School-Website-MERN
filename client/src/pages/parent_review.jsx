import {React,useState,useEffect} from 'react'
import Header from '../components/header'
import Contact from '../components/contact'
import ReactPlayer from 'react-player'


export default function Parent_review() {
  const [videos, setVideos] = useState([]);
  const baseURL = import.meta.env.VITE_REACT_APP_API_URL;

    const getvideourl = async () => {
      try {
        const response = await fetch(`${baseURL}/api/admin/upload`, {
          method: "GET",
        });
        const data = await response.json();
        console.log(`users: ${data}`);
        setVideos(data);
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
      <h1 className='text-[33px] mb-9 underline'>Parent Reviews</h1>
      <div className='grid grid-cols-3 gap-7 w-[1100px] m-auto py-7 '>
        {
          videos.map((v,i)=>{
            return  <div key={i}>
            <video  width="340" height="" controls>
                <source src={v.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video> 
             </div>
          })
        }

      </div>
    </div>
    <Contact/>
    </>
  )
}
