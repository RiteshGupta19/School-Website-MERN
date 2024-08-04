import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket,faMusic,faBed,faGamepad } from '@fortawesome/free-solid-svg-icons'
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons'
let progdata=[
  {
  icon:<FontAwesomeIcon icon={faRocket} className='px-4'/>,
  button:'OUR BELIEF',
  body:'We believe that a friendly, nurturing and positive environment is one in which scholarship and learning can best take root and where students can develop strong ethical moral values. In such an environment, students will be empowered to speak their mind as young people grow into strong and contributing members of society who will strive to have a positive impact on human endeavours.'
},
  {
    icon:<FontAwesomeIcon icon={faMusic} className='px-4'/>,  
  button:'OUR AIM',
  body:'Students learn to be productive citizens, given a stimulating envirnment, enough time and the right apportunities. Our aim is to uphold high standards and expectations which challenge each studen to reach his or her potential.  '
},
  {
    icon:<FontAwesomeIcon icon={faBed} className='px-4'/>,
  button:'OUR OBJECTIVES',
  body:<><div className='mb-2'><FontAwesomeIcon icon={faSquareCheck} className='mr-2 text-red-500'/> To build a firm foundation of learning and knowledge essentially required to enable the student to handle the higher education course of his choice.</div>
  <div className='mb-2'><FontAwesomeIcon icon={faSquareCheck} className='mr-2 text-red-500'/>To develop self confidence through a sense of responsibility and leadership in every walk of life.</div>
  <div><FontAwesomeIcon icon={faSquareCheck} className='mr-2 text-red-500'/>To Develop the total personality of a student and encourage him or her to look beyond.</div></>
},
  {
    icon:<FontAwesomeIcon icon={faGamepad} className='px-4'/>,
  button:'OUR MISSION',
  body:'“To provide a friendly, nurturing and positive environment where children feel safe, and enjoy their childhood, achieve their potential with strong ethical moral values.”  '
}
]
export default progdata