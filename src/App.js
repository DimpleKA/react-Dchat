// App.js or Routes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Messages from './Components/Messages';
import Gardenians from './Components/Gardenians';
import Profile from './Components/Profile';
import Events from './Components/Events';
import SwipeNmatch from './Components/SwipeNmatch';
import Logout from './Components/Logout';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/messages" element={<Messages />} />
          <Route path="/gardenians" element={<Gardenians />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/events" element={<Events />} />
          <Route path="/swipenmatch" element={<SwipeNmatch />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
