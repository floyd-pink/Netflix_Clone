import React, { useEffect, useState } from 'react';
import './nav.css';
import { useNavigate } from 'react-router-dom';

function Nav() {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  const netflixLogo = 'https://tse1.mm.bing.net/th/id/OIP.Of2MrfKXGN1chuR1adiytQHaHa?cb=ucfimg2&ucfimg=1&w=2000&h=2000&rs=1&pid=ImgDetMain&o=7&rm=3';
  const avatarImage = 'https://tse2.mm.bing.net/th/id/OIP.1MIcES25DXblkeEq5iNHkAHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3';

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY < 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const handleLogoClick = () => {
  window.open("https://www.netflix.com", "_blank");
};

  const handleAvatarClick = () => {
    navigate('/Login');
  };

  return (
    <div className={`nav ${show ? 'nav_visible' : 'nav_hidden'}`}>
      <img
        className='nav_logo'
        src={netflixLogo}
        alt='Netflix-logo'
        onClick={handleLogoClick}
      />
      <img
        className='nav_avatar'
        src={avatarImage}
        alt='Netflix-avatar'
        onClick={handleAvatarClick}
      />
    </div>
  );
}

export default Nav;
