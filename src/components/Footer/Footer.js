import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Link } from "react-router-dom";
import '../Footer/Footer.css';

function Footer() {
  return (
    <div className="footer">

      <div className="socialMedia">
        <Link to='https://www.instagram.com/bosco_praveen_/' target='blank'>
        <InstagramIcon />
        </Link>
        <Link to='https://twitter.com/PraveenBosco2' target='blank'>
        <TwitterIcon />
        </Link>
        <Link to='https://www.facebook.com/parveen.bpr/' target='blank'>
        <FacebookIcon />
        </Link>
        <Link to='https://www.linkedin.com/in/praveen-s-a556aa226/' target='blank'><LinkedInIcon /></Link>
        <p className="copy">&copy; Praveen 2023 -- built with Reactjs </p>
      </div>
    </div>
  );
}

export default Footer;
