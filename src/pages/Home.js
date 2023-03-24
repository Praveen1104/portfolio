import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import { Link } from "react-router-dom";
import { skilllist } from "../helpers/projecctlist";
import myimage from '../assets/myimage.jpg';
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi I am Praveen </h2>
        <div className="image">
          <img src={myimage} alt="no"/>
        </div>
        <div className="prompt">
          <p>React Developer and MERN Stack Developer</p>
          <Link to="https://www.linkedin.com/in/praveen-s-a556aa226/" target='blank'>
            <LinkedInIcon />
          </Link>
          <Link to='mailto:imptaveenbosco@gmail.com' target='blank'>
          <EmailIcon />
          </Link>
          <Link to='https://github.com/Praveen1104' target='blank'>
          <GithubIcon />
          </Link>
        </div>
      </div>
      <div className="skills">
        <h1>skills</h1>
        <div className="skill-item-cover">
          {skilllist.map((sk) => {
            return (
              <div className="skill-item">
                <div className="skill-card">
                  <img src={sk.image} alt="no" width="70px" />
                </div>
                <p className="skill-title">{sk.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
