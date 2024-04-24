// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MaintenancePage from './MaintenancePage'; // Import the MaintenancePage component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/maintenance" component={MaintenancePage} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
};

export default App;
