// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MaintenancePage from './MaintenancePage'; // Import the MaintenancePage component

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/maintenance" component={MaintenancePage} />
        {/* Other routes */}
      </Switch>
    </Router>
  );
};

export default App;
