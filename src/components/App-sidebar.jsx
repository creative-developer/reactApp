import React from 'react';

const AppSidebar = () => {
  return (
  <article className="sidebar">
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item"><a href="/pr" className="nav__link">Profile</a></li>
        <li className="nav__item"><a href="/" className="nav__link">Messages</a></li>
        <li className="nav__item"><a href="/" className="nav__link">News</a></li>
        <li className="nav__item"><a href="/" className="nav__link">Music</a></li>
        <li className="nav__item"><a href="/" className="nav__link">Settings</a></li>
      </ul>
    </nav>
  </article>
  );
  }


export default AppSidebar;