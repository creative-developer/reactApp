import React from 'react';
import Profile from './pages/Profile';
import Messages from './pages/Messages';
import News from './pages/News';
import Settings from './pages/Settings';

const Pages = () => {
  return (
    <div className="content">
      <Profile/>
      <Messages/>
      <News/>
      <Settings/>
    </div> 
  );
  }

export default Pages;