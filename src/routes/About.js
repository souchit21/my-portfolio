import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectPage from '../components/ProjectPage'
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <div>
      <Navbar />
      <ProjectPage heading="ABOUT." text="Self Learner, Problem Solver" />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About
