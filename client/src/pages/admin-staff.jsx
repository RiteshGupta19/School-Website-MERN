import React, { useEffect, useState ,useContext} from 'react';
import { toast } from 'react-toastify'
import { AuthContext } from '../store/authcontext';


export default function Staff() {
  
  const [staff,setStaff]=useState({
    photo:"",
    description:"",
    name:"",
    post:"",
  })
  const baseURL = import.meta.env.VITE_REACT_APP_API_URL;

  const handleinput=(e)=>{
    
    const { name, value, files } = e.target;
    if (name === "photo") {
      setStaff({ ...staff, photo: files[0] });
    } else {
      setStaff({ ...staff, [name]: value });
    }
  } 
  const handlesubmit= async(e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo', staff.photo);
    formData.append('description', staff.description);
    formData.append('name', staff.name);
    formData.append('post', staff.post);
    try {
      const response = await fetch(`${baseURL}/api/admin/staff`,{
        method:"POST",
        body: formData,
      });

      const res_data = await response.json();
      console.log("res from server",res_data);


      if(response.ok){
        setStaff({
        photo:"",
        description:"",
        name:"",
        post:"",
      }
      )
      getstaffData();
        toast.success("staff add successfully")
       }
       else{
        toast.error("not submitted");
       }



     
  } catch (error){
    console.log("staff :",error);
  }

  }

  const [getstafff, setstafff] = useState([]);
  const { logged } = useContext(AuthContext);

  if (!logged) {
    return <Navigate to="/login" />;
  }

  const getstaffData = async () => {
    try {
      const response = await fetch(`${baseURL}/api/admin/getstaff`, {
        method: "GET",
      });
      const data = await response.json();
      console.log(`users: ${data}`);
      setstafff(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deletestaff = async (id) => {
    try {
      const response = await fetch(`${baseURL}/api/admin/getstaff/delete/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        getstaffData();
        toast.success("Deleted successfully");
      } else {
        toast.error("Not deleted");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getstaffData();
  }, []);

  return (
    <div className='w-full h-full bg-red-50 py-[8%] '>
      <div className='w-[80%] m-auto'>
        <h1 className='text-[30px]'>Add Staff Detail</h1>
        <form className=' bg-white w-[100%]   p-[20px]' onSubmit={handlesubmit}>
            <label>Select staff photo</label><br/>
            <input type='file' className='mb-3'  name="photo" id="photo" required   onChange={handleinput}/><br/>
            <label>Staff description</label><br/>
            <input type='text' className='w-[90%] mb-3  border-red-100 border-4' placeholder='enter description' name="description" id="description" required  autoComplete="off" value={staff.description} onChange={handleinput}/><br/>
            <label>Staff Name</label><br/>
            <input type='text' className='w-[90%] mb-3 border-red-100 border-4' placeholder='enter name' name="name" id="name" required  autoComplete="off" value={staff.name} onChange={handleinput}/><br/>
            <label clas>Staff Post</label><br/>
            <input type='text' className='w-[90%]  border-red-100 border-4' placeholder='enter post' name="post" id="post" required  autoComplete="off" value={staff.post} onChange={handleinput}/><br/>

            <button className="bg-green-500 text-white p-3 rounded-md hover:bg-green-400 mt-5" >ADD STAFF</button>
        </form>
        </div>

        <div className=' mt-10'>
          <h1 className='text-[30px] font-bold mb-3 underline ml-3 '>Staff details</h1>
        </div>
        <div>
          <table>
            <thead>
              <tr className=' border-b-4 border-red-200 bg-red-50 sticky top-[11.5%]'>
                <th>Photo</th>
                {/* <th>Description</th> */}
                <th>Name</th>
                <th>Post</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
            {getstafff.map((v, i) => (

                <tr key={i}>
                  <td><img src={`${baseURL}/${v.photo}`} alt={v.name} style={{ width: '100px' }} /></td>
                  {/* <td className=' '>{v.description}</td> */}
                  <td>{v.name}</td>
                  <td>{v.post}</td>
                  <td><button className='bg-green-700 text-white px-3 hover:bg-green-800 rounded-md'>Update</button></td>
                  <td><button onClick={() => deletestaff(v._id)} className='bg-red-700 text-white px-3 hover:bg-red-800 rounded-md'>Delete</button></td>
                </tr>
            ))} 
            </tbody>
          </table>
        </div>

      
    </div>
  )
}
