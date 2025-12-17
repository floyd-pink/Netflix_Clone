import React from 'react';
import './nav.css';


function Nav() {
 const netflix_logo='https://tse1.mm.bing.net/th/id/OIP.Of2MrfKXGN1chuR1adiytQHaHa?cb=ucfimg2&ucfimg=1&w=2000&h=2000&rs=1&pid=ImgDetMain&o=7&rm=3';

  const handellogo = () => {
    window.location.reload();
  };

  const handelavatar = () => {
    window.location.reload();

  };

  return (
    <div className='nav'>
      <img
        className='nav_logo'
        src={netflix_logo}
        alt='Netflix-logo'
        onClick={handellogo}
      />
      <img
        className='nav_avatar'
        src='https://tse2.mm.bing.net/th/id/OIP.1MIcES25DXblkeEq5iNHkAHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3'
        alt='Netflix-avatar'
        onClick={handelavatar}
      />
    </div>
  );
}

export default Nav;
