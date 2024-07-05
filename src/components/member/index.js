import React from "react";
import { FaInstagram, FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";
const TeamMembercontent = ({ member }) => {
  return (
    <div className="mil-team-card mil-up mil-mb-30">
      <img src={member.image} alt="Team member" />
      <div className="mil-description">
        <div className="mil-secrc-text">
          <h5 className="mil-muted mil-mb-5">
            <a href="#">{member.name}</a>
          </h5>
          <p className="mil-link mil-light-soft mil-mb-10">{member.role}</p>
          <ul className="mil-social-icons mil-center">
            <li>
              <a
                href={member.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href={member.socialMedia.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaYoutube />
              </a>
            </li>
            <li>
              <a
                href={member.socialMedia.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href={member.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaFacebook />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TeamMembercontent;
