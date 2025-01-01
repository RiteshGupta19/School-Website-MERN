import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const VideoUploader = () => {
    const [videoFile, setVideoFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [videoUrl, setVideoUrl] = useState('');
    const [videos, setVideos] = useState([]);
    const baseURL = import.meta.env.VITE_REACT_APP_API_URL;

    
        const fetchVideos = async () => {
            try {
                const response = await fetch(`${baseURL}/api/admin/upload`, {
                  method: "GET",
                });
                const data = await response.json();
                setVideos(data);
            } catch (error) {
                console.error(error);
            }
        };

       

    const handleFileChange = (event) => {
        setVideoFile(event.target.files[0]);
    };

    const handleUpload = async (e) => {
        e.preventDefault();

        setUploading(true);
        const formData = new FormData();
        formData.append('video', videoFile);

        try {
            const response = await fetch(`${baseURL}/api/admin/upload`, {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            setVideoUrl(data.videoUrl);
            setUploading(false);
            toast.success('Video uploaded successfully!');
            fetchVideos();

            setVideoFile(null);
            document.getElementById('videoInput').value = '';

        } catch (error) {
            console.error(error);
            setUploading(false);
        }
    };

    const deletevideo = async (id) => {
        try {
          const response = await fetch(`${baseURL}/api/admin/upload/delete/${id}`, {
            method: "DELETE",
          });
          if (response.ok) {
            fetchVideos();
            toast.success("Deleted successfully");
          } else {
            toast.error("Not deleted");
          }
        } catch (error) {
          console.log(error);
        }
      };

    useEffect(() => {
        fetchVideos();
    }, []);

    return (
        <div className='w-full h-full bg-red-50 py-[8%]'>
        <div className='w-[80%] m-auto'>
          <h1 className='text-[30px]'>Add Parent Reviews</h1>
          <form onSubmit={handleUpload}  className='bg-white w-[100%] p-[20px] flex'>
            <div>
              <label>Select Video</label><br />
              <input type="file" id="videoInput" onChange={handleFileChange} />
            </div>
            <div>
              <button type='submit' className="bg-green-500 text-white p-3 rounded-md hover:bg-green-400 mt-5">Upload Video</button>
            </div>
        </form>
        </div>
          
        <div className=' mt-10'>
          <h1 className='text-[30px] font-bold mb-3 underline ml-3 '>Parent reviews Videos</h1>
        </div>
        <div>
          <table className='w-full'>
            <thead>
              <tr className=' z-20 border-b-4 border-red-200 bg-red-50 sticky top-[11.5%]'>
                <th>Sr. No.</th>
                <th>Video</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
                    {videos.map((video,i) => (
                      <tr key={i}>
                        <td> {i + 1}</td>
                        <td>  <video  width="320" height="240" controls>
                                <source src={video.videoUrl} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video></td>
                            <td><button onClick={() => deletevideo(video._id)} className='bg-red-700 text-white px-3 hover:bg-red-800 rounded-md'>Delete</button></td>
                       </tr>
                    ))}
                 </tbody>
          </table>
           </div>
            </div>
        
    );
};

export default VideoUploader;
