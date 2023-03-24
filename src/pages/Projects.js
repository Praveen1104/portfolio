import React from 'react'
import Projectitem from '../components/Projectitem/Projectitem';
import './Projects.css';
import {projectList} from '../helpers/projecctlist'
function Projects() {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className='projectList'>
        {
          projectList.map((project,idx)=>{
            return <Projectitem  id={idx} name={project.name} image={project.image}/>
          })
        }
      </div>
    </div>
  )
}

export default Projects