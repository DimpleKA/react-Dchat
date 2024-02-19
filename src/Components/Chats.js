import React from 'react';
import '../Styles/Chats.css';

const Chats = () => {
  return (
    <div className="chat-container">
      {/* Left Message (Received) */}
      <div className='leftmessage'>
        <div className="message-container received">
          <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRUpCBLOtnFI2Z8AKREdlwGua5xcuSekUkVF5S3mcYGw8ioPYT_" alt="Left DP" className="dp" />
          <div className="message-content">
            <p>Received message content 1</p>
            <span className="timestamp">12:30 PM</span>
          </div>
        </div>
        <div className="message-container received">
          <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRUpCBLOtnFI2Z8AKREdlwGua5xcuSekUkVF5S3mcYGw8ioPYT_" alt="Left DP" className="dp" />
          <div className="message-content">
            <p>Received message content 2</p>
            <span className="timestamp">12:35 PM</span>
          </div>
        </div>
      </div>

      {/* Right Message (Sent) */}
      <div className='rightmessage'>
        <div className="message-container sent">
          <div className="message-content">
            <p>Sent message content 1</p>
            <span className="timestamp">12:45 PM</span>
          </div>
          <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRUpCBLOtnFI2Z8AKREdlwGua5xcuSekUkVF5S3mcYGw8ioPYT_" alt="Right DP" className="dp" />
        </div>
        <div className="message-container sent">
          <div className="message-content">
            <p>Sent message content 2</p>
            <span className="timestamp">12:50 PM</span>
          </div>
          <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRUpCBLOtnFI2Z8AKREdlwGua5xcuSekUkVF5S3mcYGw8ioPYT_" alt="Right DP" className="dp" />
        </div>
      </div>
       {/* Left Message (Received) */}
       <div className='leftmessage'>
        <div className="message-container received">
          <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRUpCBLOtnFI2Z8AKREdlwGua5xcuSekUkVF5S3mcYGw8ioPYT_" alt="Left DP" className="dp" />
          <div className="message-content">
            <p>Received message content 1</p>
            <span className="timestamp">12:30 PM</span>
          </div>
        </div>
        <div className="message-container received">
          <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRUpCBLOtnFI2Z8AKREdlwGua5xcuSekUkVF5S3mcYGw8ioPYT_" alt="Left DP" className="dp" />
          <div className="message-content">
            <p>Received message content 2</p>
            <span className="timestamp">12:35 PM</span>
          </div>
        </div>
      </div>

      {/* Right Message (Sent) */}
      <div className='rightmessage'>
        <div className="message-container sent">
          <div className="message-content">
            <p>Sent message content 1</p>
            <span className="timestamp">12:45 PM</span>
          </div>
          <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRUpCBLOtnFI2Z8AKREdlwGua5xcuSekUkVF5S3mcYGw8ioPYT_" alt="Right DP" className="dp" />
        </div>
        <div className="message-container sent">
          <div className="message-content">
            <p>Sent message content 2</p>
            <span className="timestamp">12:50 PM</span>
          </div>
          <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRUpCBLOtnFI2Z8AKREdlwGua5xcuSekUkVF5S3mcYGw8ioPYT_" alt="Right DP" className="dp" />
        </div>
      </div>
    </div>
  );
};

export default Chats;
