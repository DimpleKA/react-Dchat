// Messages.js
import React from 'react';
import Sendarea from './Sendarea';
import Dp from './Dp';
import Chats from './Chats';
import '../Styles/Messages.css'

const Messages = () => {
  return (
    <div>
       <Dp/>
       <Chats/>
      <Sendarea/>
    </div>
  );
};

export default Messages;
