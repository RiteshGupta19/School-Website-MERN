import React, { useEffect, useState ,useContext} from 'react';
import "./Register.css";
import { toast } from 'react-toastify';
import { AuthContext } from '../store/authcontext';

export default function Admin_admission_list() {
  

  return (
    <>
      <section className='mt-[110px]'>
        
        <div className=' '>
          <h1 className='text-[30px] font-bold mb-3 underline ml-3 '>Contact data</h1>
        </div>
        <div>
          <table>
            <thead>
              <tr className=' border-b-4 border-red-200 bg-red-50 sticky top-[11.5%]'>
                <th>Sr. No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact no</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* {contacts.map((v, i) => (
                <tr key={i}>
                  <td>{v.name}</td>
                  <td>{v.email}</td>
                  <td>{v.subject}</td>
                  <td>{v.comment}</td>
                  <td><button onClick={() => deleteContact(v._id)} className='bg-red-700 text-white px-3 hover:bg-red-800 rounded-md'>Delete</button></td>
                </tr>
              ))} */}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
