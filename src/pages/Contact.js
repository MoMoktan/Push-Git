import React from 'react';
import { FaGithub, FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className='contact'> 
    <ul>
      <li><button><FaGithub /> GitHub</button></li>
      <li><button><FaFacebook /> Facebook</button></li>
      <li><button><FaLinkedin /> LinkedIn</button></li>
      <li><button><FaTwitter /> Twitter</button></li>
      <li><button><FaInstagram /> Instagram</button></li>
    </ul></div>
  );
};

export default SocialIcons;
