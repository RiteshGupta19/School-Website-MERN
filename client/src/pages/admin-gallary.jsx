import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

export default function Gallary() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [category, setCategory] = useState('');
  const [images, setImages] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!selectedFile) {
        toast.error('No file selected.');
        return;
      }

      const formData = new FormData();
      formData.append('photo', selectedFile);
      formData.append('category', category);

      const response = await fetch('http://localhost:5000/api/admin/gallary', {
        method: 'POST',
        body: formData,
      });
      

      if (!response.ok) {
        throw new Error('Failed to upload image.');
      }

      toast.success('Image uploaded successfully');
      setSelectedFile(null);
      setCategory('');
      document.getElementById('fileInput').value = '';
      fetchImages(); // Refresh images list
    } catch (error) {
      console.error('Error uploading image:', error.message);
      toast.error('Error uploading image');
    }
  };

  const fetchImages = async () => {
    if (!category) {
      setImages([]);
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/admin/gallary/${category}`);
      if (!response.ok) {
        throw new Error('Failed to fetch images.');
      }
      const data = await response.json();
      console.log(data);
      setImages(data);
    } catch (error) {
      console.error('Error fetching images:', error.message);
      toast.error('No Images Available');
    }
  };


  const deleteimage = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/gallary/delete/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        fetchImages();
        toast.success("Deleted successfully");
      } else {
        toast.error("Not deleted");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [category]);

  return (
    <div className='w-full h-full bg-red-50 py-[8%]'>
      <div className='w-[80%] m-auto'>
        <h1 className='text-[30px]'>Add Gallery Images</h1>
        <form onSubmit={handleSubmit} className='bg-white w-[100%] p-[20px] flex'>
          <div>
            <label>Select photo</label><br />
            <input type='file' id='fileInput' className='mb-3' accept="image/*" onChange={handleFileChange} required /><br />
          </div>
          <div>
            <label>Select Category</label><br />
            <select onChange={handleCategoryChange} value={category} className="bg-gray-50 border border-gray-300 text-gray-900 text-[20px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
              <option value="">Choose a Category</option>
              <option value="latest photo">LATEST PHOTOS</option>
              <option value="annual day">ANNUAL DAY</option>
              <option value="independence day">INDEPENDENCE DAY</option>
              <option value="teachers day">TEACHERS DAY</option>
              <option value="school activities">SCHOOL ACTIVITIES</option>
              <option value="lab inauguration">ENGLISH LAB INAUGURATION</option>
              <option value="sports day">SPORTS DAY</option>
              <option value="rally">RALLY</option>
              <option value="tour & excursion">TOUR & EXCURSION</option>
              <option value="achievements">ACHIEVEMENTS</option>
              <option value="pizza making">PIZZA MAKING</option>
              <option value="drawing">DRAWING</option>
              <option value="rangoli">RANGOLI</option>
              <option value="radha krishna competition">RADHA KRISHNA COMPETITION</option>
              <option value="plantation">PLANTATION</option>
              <option value="camp">CAMP</option>
              <option value="birth anniversary">BIRTH ANNIVERSARY</option>
              <option value="science exhibition">SCIENCE EXHIBITION</option>
            </select>
          </div>
          <div className='w-[30%] text-center'>
            <button type="submit" className="bg-green-500 text-white p-3 rounded-md hover:bg-green-400 mt-5">ADD PHOTO</button>
          </div>
        </form>

        <div className=' mt-10'>
          <h1 className='text-[30px] font-bold mb-3 underline ml-3 '>Parent reviews Videos</h1>
        </div>
        <div>
          <table className='w-full'>
            <thead>
              <tr className=' z-20 border-b-4 border-red-200 bg-red-50 sticky top-[11.5%]'>
                <th>Sr. No.</th>
                <th>Images</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
          {images.map((image, index) => (
            <tr key={index}>
              <td> {index + 1}</td>
              <td><img key={index} src={`http://localhost:5000/${image.imagePath}`} alt='Gallery' className='h-[220px] w-[100%]' /></td>
              <td><button onClick={() => deleteimage(image._id)} className='bg-red-700 text-white px-3 hover:bg-red-800 rounded-md'>Delete</button></td>
            </tr>
          ))}
         </tbody>
          </table>
           </div>
      </div>
    </div>
  );
}
