import React, { useState, useEffect } from 'react';
import { Amplify } from 'aws-amplify';
import './App.css';

function App() {
  const [isMaintenance, setIsMaintenance] = useState(false);

  useEffect(() => {
    const checkMaintenanceMode = async () => {
      const config = await Amplify.configure();
      const maintenanceMode = config.runtimeConfig.env.MAINTENANCE_MODE;
      setIsMaintenance(maintenanceMode === 'true');
    };
    checkMaintenanceMode();
  }, []);

  return (
    <div className="App">
      {isMaintenance ? (
        <MaintenancePage />
      ) : (
        <div>
          <h1>Your Application Content</h1>
          {/* Your application content goes here */}
        </div>
      )}
    </div>
  );
}

export default App;
