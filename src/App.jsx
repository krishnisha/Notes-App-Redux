import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Notes from './Components/Notes';
import { Provider } from 'react-redux';
import store from './Redux/store';

const AppRouter = () => {
  return (
    <Router>
        <Provider store={store}>
      <div className="app">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Notes />} />
          </Routes>
        </div>
      </div>
      </Provider>
    </Router>
  );
};

export default AppRouter;
