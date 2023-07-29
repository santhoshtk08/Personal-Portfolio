import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon />
        <a href="https://twitter.com/Santhoshtk_08"><TwitterIcon /></a>
        <a href="https://linkedin.com/in/santhoshtk08"><LinkedInIcon /></a>
      </div>
      <p> &copy; No CopyRights Reserved</p>
    </div>
  );
}

export default Footer;
