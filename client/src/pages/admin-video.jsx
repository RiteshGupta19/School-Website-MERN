import React, { useEffect, useState ,useContext} from 'react';
import { toast } from 'react-toastify'
import { AuthContext } from '../store/authcontext';



export default function Video() {
  
  const [video,setvideo]=useState({
    videourl:"",
  })
  
  const handleinput=(e)=>{
    console.log(e.target);
    let name=e.target.name;
    let value = e.target.value;
    setvideo({
      ...video,
      [name]:value,
    })
  } 
  const handlesubmit= async(e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append('videourl', video.videourl);
    try {
      const response = await fetch('http://localhost:5000/api/admin/videos',{
        method:"POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(video),
      });
      

      const res_data = await response.json();
      console.log("res from server",res_data);


      if(response.ok){
        setvideo({
        videourl:"",
      }
      )
        toast.success("Video added successfully")
        getsvideo();
       }
       else{
        toast.error("not submitted");
       }



     
  } catch (error){
    console.log("video :",error);
  }

  }

  const [getvideoo, setvideoo] = useState([]);
  const { logged } = useContext(AuthContext);

  if (!logged) {
    return <Navigate to="/login" />;
  }

  const getsvideo = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/getvideos", {
        method: "GET",
      });
      const data = await response.json();
      console.log(`users: ${data}`);
      setvideoo(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deletevideo = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/getvideos/delete/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        getsvideo();
        toast.success("Deleted successfully");
      } else {
        toast.error("Not deleted");
      }
    } catch (error) {
      console.log(error);
    }
  };

  

  useEffect(() => {
    getsvideo()
  }, []);
  
  return (
    <div className='w-full h-full bg-red-50 py-[8%] '>
      <div className='w-[80%] m-auto'>
        <h1 className='text-[30px]'>Add VIDEOS</h1>
        <form className=' bg-white w-[100%]   p-[20px]' onSubmit={handlesubmit} >
           <div>
           <label>paste your link after <b>https://www.youtube.com/embed/</b></label><br/>
           <input type='text' className='w-[90%] mb-3  border-red-100 border-4' placeholder='Paste link Here' name="videourl" id="videourl" required  autoComplete="off" value={video.videourl} onChange={handleinput}/><br/>
           </div>
          
           <div className=' w-[30%] text-center'>
           <button className=" bg-green-500 text-white p-3 rounded-md hover:bg-green-400 mt-5" >ADD VIDEO</button>
           </div>
        </form>
        </div>

        <div className=' mt-10'>
          <h1 className='text-[30px] font-bold mb-3 underline ml-3 '>Video List</h1>
        </div>
        <div>
          <table className='w-full'>
            <thead>
              <tr className=' border-b-4 border-red-200 bg-red-50 sticky top-[11.5%]'>
                <th>Sr. No.</th>
                <th>Video</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
            {Array.isArray(getvideoo) && getvideoo.length > 0 ? (
  getvideoo.map((v, i) => (
    <tr key={i}>
      <td>{i + 1}</td>
      <td>
        <iframe
          width="100%"
          height="270px"
          src={v.videourl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </td>
      <td>
        <button onClick={() => deletevideo(v._id)} className="bg-red-700 text-white px-3 hover:bg-red-800 rounded-md">
          Delete
        </button>
      </td>
    </tr>
  ))
) : (
  <tr>
    <td colSpan="3">No videos available</td>
  </tr>
)}

            </tbody>
          </table>
        </div>

      
    </div>
  )
}
