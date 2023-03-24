import React from 'react';
import {useParams} from 'react-router-dom';
import {projectList} from '../helpers/projecctlist';
import GithubIcon from '@material-ui/icons/GitHub';
import './Projectdisplay.css'

function Projectdisplay() {
    const {id}=useParams()
    const project=projectList[id]
  return (
    <div className='projects'>
        <h1 className='projectTitle'>{project.name}</h1>
        <img src={project.image} />
        <p className=''>Tech: {project.tech}</p>
        <GithubIcon />
    </div>
  )
}

export default Projectdisplay