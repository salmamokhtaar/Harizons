// // import AboutUs from "./components/AboutUs";
// // import ContactUs from "./components/ContactUs";
// // import Footer from "./components/Footer";
// // import Header from "./components/Header";
// // import Hero from "./components/Hero"
// // import Services from "./components/Services";
// // export default function App() {
// //   return (
// //     <>
// //       <Header />
// //       <Hero />
// //       <AboutUs />
// //       <Services />
// //       <ContactUs />
// //       <Footer/>
// //     </>
// //   )
// // }

// // // <div>
// // {/* <Header />
// // <section ref={aboutRef} id="about">About Section</section>
// // <section ref={servicesRef} id="services">Services Section</section>
// // <section ref={projectsRef} id="projects">Projects Section</section>
// // <section ref={contactRef} id="contact">Contact Section</section>
// // // </div> */}
// import React, { useRef } from 'react';
// import AboutUs from "./components/AboutUs";
// import ContactUs from "./components/ContactUs";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import Services from "./components/Services";
// import Projects from './components/Projects';
// import ExpertiseSection from './components/Expertise';
// import Login from './components/Login';
// import Signup from './components/SignUp';

// export default function App() {
//   const aboutRef = useRef(null);
//   const servicesRef = useRef(null);
//   const contactRef = useRef(null);
//   const projectsRef = useRef(null)
//   return (
//     <>
//       <Header aboutRef={aboutRef} projectsRef={projectsRef} servicesRef={servicesRef} contactRef={contactRef} />
//       <Hero />
//       <section ref={aboutRef}><AboutUs /></section>
//       <section ref={servicesRef}><Services /></section>
//       <section ref={projectsRef}><Projects /></section>
//       <ExpertiseSection/>
//       <section ref={contactRef}><ContactUs /></section>

//       <Footer />
     
//     </>
//   );
// }



// import React, { useRef } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import AboutUs from "./components/AboutUs";
// import ContactUs from "./components/ContactUs";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import Services from "./components/Services";
// import Projects from './components/Projects';
// import ExpertiseSection from './components/Expertise';
// import Login from './components/Login';
// import Signup from './components/SignUp';

// export default function App() {
//   const aboutRef = useRef(null);
//   const servicesRef = useRef(null);
//   const contactRef = useRef(null);
//   const projectsRef = useRef(null);

//   return (
//     <Router>
//       <>
//         <Header aboutRef={aboutRef} projectsRef={projectsRef} servicesRef={servicesRef} contactRef={contactRef} />
//         <Switch>
//           <Route path="/login" component={Login} />
//           <Route path="/signup" component={Signup} />
//           <Route path="/">
//             <Hero />
//             <section ref={aboutRef}><AboutUs /></section>
//             <section ref={servicesRef}><Services /></section>
//             <section ref={projectsRef}><Projects /></section>
//             <ExpertiseSection />
//             <section ref={contactRef}><ContactUs /></section>
//           </Route>
//         </Switch>
//         <Footer />
//       </>
//     </Router>
//   );
// }

// import React, { useRef } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import AboutUs from "./components/AboutUs";
// import ContactUs from "./components/ContactUs";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import Services from "./components/Services";
// import Projects from './components/Projects';
// import ExpertiseSection from './components/Expertise';
// import Login from './components/Login';
// import Signup from './components/SignUp';

// export default function App() {
//   const aboutRef = useRef(null);
//   const servicesRef = useRef(null);
//   const contactRef = useRef(null);
//   const projectsRef = useRef(null);

//   return (
//     <Router>
//       <>
//         <Header aboutRef={aboutRef} projectsRef={projectsRef} servicesRef={servicesRef} contactRef={contactRef} />
        
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/" element={
//             <>
//               <Hero />
//               <section ref={aboutRef}><AboutUs /></section>
//               <section ref={servicesRef}><Services /></section>
//               <section ref={projectsRef}><Projects /></section>
//               <ExpertiseSection />
//               <section ref={contactRef}><ContactUs /></section>
//             </>
//           } />
//         </Routes>
        
//         <Footer />
//       </>
//     </Router>
//   );
// }
// import React, { useRef } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import AboutUs from "./components/AboutUs";
// import ContactUs from "./components/ContactUs";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import Services from "./components/Services";
// import Projects from './components/Projects';
// import ExpertiseSection from './components/Expertise';
// import Login from './components/Login';
// import Signup from './components/SignUp';
// import Form from './components/Form';
// import Testimonials from './components/Testimonials';

// export default function App() {
//   const homeRef = useRef(null);
//   const aboutRef = useRef(null);
//   const servicesRef = useRef(null);
//   const contactRef = useRef(null);
//   const projectsRef = useRef(null);

//   return (
//     <>
      
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/register" element={<Form />} />

        
//         {/* <Route path="/dashboard" element={<Dashboard />} /> */}

//         <Route path="/" element={
//           <>
//         <Header homeRef={Hero} aboutRef={aboutRef} projectsRef={projectsRef} servicesRef={servicesRef} contactRef={contactRef} />
//             <section ref={homeRef}><Hero /></section>
//             <section ref={aboutRef}><AboutUs /></section>
//             <section ref={servicesRef}><Services /></section>
//             <section ref={projectsRef}><Projects /></section>
//             <ExpertiseSection />
//             <Testimonials/>
//             <section ref={contactRef}><ContactUs /></section>
//           </>
//         } />
//       </Routes>
      
//       <Footer />
//     </>
//   );
// }


import React, { useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from './components/Projects';
import ExpertiseSection from './components/Expertise';
import Login from './components/Login';
import Signup from './components/SignUp';
import Form from './components/Form';
import Testimonials from './components/Testimonials';
import Dashboard from './pages/components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
export default function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={
          <PrivateRoute>
            <Signup />
          </PrivateRoute>
        } />
        <Route path="/register" element={<Form />} />
        <Route path="/dashboard/*" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />
    


   
        <Route path="/" element={
          <>
            <Header homeRef={homeRef} aboutRef={aboutRef} projectsRef={projectsRef} servicesRef={servicesRef} contactRef={contactRef} />
            <section ref={homeRef}><Hero contactRef={contactRef} /></section>
            <section ref={aboutRef}><AboutUs /></section>
            <section ref={servicesRef}><Services /></section>
            <section ref={projectsRef}><Projects /></section>
            <ExpertiseSection />
            <Testimonials />
            <section ref={contactRef}><ContactUs /></section>
            <Footer/>
          </>
        } />
      </Routes>

      {/* <Footer /> */}
    </>
  );
}