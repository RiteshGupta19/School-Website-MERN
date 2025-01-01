import {React ,useState,useEffect}from 'react'
import Header from '../header.jsx'
import Contact from '../contact.jsx'
import gallery from '../../pages/gallary.jsx'

export default function Inde() {
  const [images, setImages] = useState([]);
  const baseURL = import.meta.env.VITE_REACT_APP_API_URL;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`${baseURL}/api/admin/gallary/independence day`);
        console.log(response);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);
  return (
    <div>
      <Header/>
      <div className='text-[30px] font-bold text-center mt-5'>INDEPENDENCE DAY</div>
      <div className='grid  md:grid-cols-3 sm:grid-cols-2 p-5  max-w-[1100px] gap-8 m-auto py-[70px]'>
      {images.map((image, index) => (
        <img key={index} src={`${baseURL}/${image.imagePath}`}  alt='xx' className='h-[220px] w-[100%]' />
      ))}
      </div>
      <Contact/>
    </div>
  )
}
