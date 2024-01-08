import "./MyWorkCardStyle.css"
import MyWorkCard from "./MyWorkCard"
import WorkData from "./WorkData"

import React from 'react'

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {WorkData.map((val, ind) => { 
                return (
                    <MyWorkCard 
                    key = {ind}
                    imgsrc = {val.imgsrc}
                    title = {val.title}
                    text = {val.text}
                    view = {val.view}
                    source = {val.source}
                    skills = {val.skills}
                    />
                )
            })};
        </div>
    </div>
  )
}

export default Work
