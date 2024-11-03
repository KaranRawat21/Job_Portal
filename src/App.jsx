
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Footer from "./components/Footer"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BehindNavbar from "./components/BehindNavbar"
import AboutUs from "./components/AboutUs"
import Contact from "./components/Contact"
import FindJob from "./components/FindJob"
import SignIn from "./components/SignIn"
import PostJobs from "./components/PostJobs"
import SignUp from "./components/SignUp"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <BehindNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/findjob" element={<FindJob />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/jobpost" element={<PostJobs />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

