import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF,faInstagram,faYoutube } from '@fortawesome/free-brands-svg-icons';
export default function Contact() {
  return (
    <div className="bg-white m-0 p-0 pos w-full ">
      <div className="border-4 border-t-0 border-blue-400 ">
        <div className="md:flex">
            <div className="md:w-[50%] sm:px-6 px-2">
              <iframe
                title="Google Maps"
                className="w-full "
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3739.9923834312067!2d78.11508857469755!3d20.383203909638887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd3e8a4396e91cb%3A0xda96015d78fff47f!2sSusanskar%20Vidya%20Mandir!5e0!3m2!1sen!2sin!4v1707890749357!5m2!1sen!2sin"
                style={{ border: '0', height:'300px'}}
                loading="lazy"
                allowFullScreen=""
                referrerPolicy="no-referrer-when-downgrade"
              >
                <a href="https://www.gps.ie/">gps trackers</a>
              </iframe>
            </div>
        
        <div className=" md:w-[50%] md:border-l-4 border-blue-400 text-center mb-5 ">
          <div className="">
            <h3 className="py-4 text-[20px] font-bold  border-b-4 border-blue-400">CONTACT US</h3>
            <div className="py-4 border-b-4 border-blue-400 mb-4">
              <a href="mailto:susanskarvidyamandir@gmail.com" className="text-decoration-none ">
                <h6 className="my-4 sm:text-[20px]"><FontAwesomeIcon icon={faEnvelope} className='text-blue-400 mr-2' />susanskarvidyamandir@gmail.com</h6>
              </a>
              <a href="tel:8888999304" className="text-decoration-none ">
                <h5 className='mb-4 sm:text-[18px]' ><FontAwesomeIcon icon={faPhone} className='text-blue-400 mr-2'/>8888999304</h5>
              </a>
            </div>
            <a href="#" className="">
            <FontAwesomeIcon icon={faFacebookF} className='text-white bg-blue-600 p-3 rounded-[50px] mr-3 text-[20px]'/>
            </a>
            <a href="#">
            <FontAwesomeIcon icon={faInstagram} className='text-white bg-pink-500 p-3 rounded-[50px] mr-3 text-[20px]'/>
            </a>
            <a href="#">
            <FontAwesomeIcon icon={faYoutube} className='text-white bg-red-500 p-3 rounded-[50px] text-[20px]'/>
            </a>
          </div>
        </div>
        </div>
        <div className="w-full border-t-4 border-blue-400">
          <h6 className=" my-3 sm:text-[14px] text-[12px]">© 2023 Susanskar. All Rights Reserved | Design by <a href="https://iceico-technologies-pvt-ltd.business.site/" className="text-green-600">ICEICO Technologies Pvt.Ltd.</a></h6>
        </div>
      </div>
    </div>
  );
}
