import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectPage from '../components/ProjectPage'
import Work from '../components/Work'

const Project = () => {
  return (
    <div>
      <Navbar />
      <ProjectPage heading="PROJECTS." text="Some of my work" />
      <Work />
      <Footer />
    </div>
  )
}

export default Project
