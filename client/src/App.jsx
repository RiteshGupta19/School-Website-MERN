import { Routes, Route, Router, BrowserRouter } from 'react-router-dom';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Achievements  from './components/images/achievement.jsx';
import Camp  from './components/images/camp.jsx';
import Birth from './components/images/birth.jsx'
import Pizza from './components/images/pizza.jsx'
import Drawing from './components/images/drawing.jsx';
import Krishna from './components/images/krishna.jsx';
import Plantation from './components/images/plantation.jsx';
import Science from './components/images/science.jsx';
import Annual from './components/images/annual.jsx';
import Latest from './components/images/latest.jsx';
import Inde from './components/images/independence.jsx';
import Teachers from './components/images/teachers.jsx';
import Activity from './components/images/activity.jsx';
import Lab from './components/images/lab.jsx';
import Sport from './components/images/sports.jsx';
import Ralley from './components/images/ralley.jsx';
import Tour from './components/images/tours.jsx';
import Rangoli from './components/images/rangoli.jsx';
import Contact_us from './pages/contact-us.jsx';
import Topper_list from './pages/topper_list.jsx';
import Admission_form1 from './pages/admission-form1.jsx';
import Admission_form2 from './pages/admission-form2.jsx';
import Admin_layout from './components/layouts/admin-layout.jsx';
import Admin_contact from './pages/admin-contact.jsx';
import Adminlogin from './pages/admin-login.jsx';
import Staff from './pages/admin-staff.jsx';
import Gallary from './pages/admin-gallary.jsx';
import Video from './pages/admin-video.jsx';
import Videos from './pages/video.jsx';
import VideoUploader from './pages/admin-parent-review.jsx';
import Parent_review from './pages/parent_review.jsx';
import Admintopperlist from './pages/admin-topper-list.jsx';




export default function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/topper" element={<Topper_list />} />
          <Route path="/contact" element={<Contact_us />} />
          <Route path="/video" element={<Videos/>} />
          <Route path="/parent_review" element={<Parent_review/>} />
          

          <Route path='/form1' element={<Admission_form1/>}/>
          <Route path='/form2' element={<Admission_form2/>}/>

          <Route path="/achi" element={<Achievements/>} />
          <Route path="/camp" element={<Camp />} />
          <Route path="/birth" element={<Birth/>} />
          <Route path="/pizza" element={<Pizza/>} />
          <Route path="/drawing" element={<Drawing/>} />
          <Route path="/krishna" element={<Krishna/>} />
          <Route path="/plant" element={<Plantation/>} />
          <Route path="/science" element={<Science/>} />
          <Route path="/annual" element={<Annual/>} />
          <Route path="/latest" element={<Latest/>} />
          <Route path="/inde" element={<Inde/>} />
          <Route path="/teachers" element={<Teachers/>} />
          <Route path="/activity" element={<Activity/>} />
          <Route path="/lab" element={<Lab/>} />
          <Route path="/sports" element={<Sport/>} />
          <Route path="/ralley" element={<Ralley/>} />
          <Route path="/tours" element={<Tour/>} />
          <Route path="/rangoli" element={<Rangoli/>} />

          <Route path="/login" element={<Adminlogin/>} />

          <Route path="/admin" element={<Admin_layout/>}>
              <Route path="contacts" element={<Admin_contact/>}/>
              <Route path="staff" element={<Staff/>}/>
              <Route path="gallary" element={<Gallary/>}/>
              <Route path="videos" element={<Video/>}/>
              <Route path="parent-review" element={<VideoUploader/>}/>
              <Route path="topperlist" element={<Admintopperlist/>}/>
          </Route>
        </Routes>
        
    </>
  )
}
