import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Contact from '../components/contact';

export default function TopperList() {
  const [toppers, setToppers] = useState([]);

  useEffect(() => {
    
    const fetchTopperData = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/admin/gettopperlist');
        if (response.ok) {
          const data = await response.json();
          setToppers(data); 
        } else {
          console.error('Error fetching topper list:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching topper list:', error);
      }
    };

    fetchTopperData();
  }, []);


  const getGridColumns = () => {
    const length = toppers.length;
    if (length > 20) return 'grid-cols-5'; 
    if (length > 10) return 'grid-cols-4'; 
    if (length > 5) return 'grid-cols-3';  
    if (length > 1) return 'grid-cols-2';  
    return 'grid-cols-1';                  
  };

  return (
    <div className='bg-white'>
      <Header />
      <div className='p-[30px] text-center m-auto max-w-[1200px]'>
        <h1 className='text-[30px]'>TOPPER LIST</h1>
        <div className={`grid ${getGridColumns()} gap-8 mt-10`}>
          {toppers.map((topper, index) => (
            <div key={index} className='border p-5 rounded-lg shadow-lg'>
              <img
                src={`http://localhost:5001/${topper.photo}`}
                alt={topper.Name}
                className='w-full h-48 object-cover rounded-lg mb-4'
              />
              <h2 className='text-xl font-bold'>{topper.Name}</h2>
              <p>Class: {topper.Class}</p>
              <p>Year: {topper.year}</p>
              <p>Exam Type: {topper.Exam}</p>
            </div>
          ))}
        </div>
      </div>
      <Contact />
    </div>
  );
}
