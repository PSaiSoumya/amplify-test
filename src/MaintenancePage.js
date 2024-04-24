// MaintenancePage.js

import React, { useEffect, useState } from 'react';
import { Amplify } from 'aws-amplify';

const MaintenancePage = () => {
  const [isMaintenance, setIsMaintenance] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const config = await Amplify.configure(); // Fetch Amplify configuration
      const maintenanceMode = config.runtimeConfig.env.MAINTENANCE_MODE;
      setIsMaintenance(maintenanceMode === 'true');
    };
    fetchData();
  }, []);

  return (
    <div>
      {isMaintenance ? (
        <p>Application under maintenance. Please check back later.</p>
      ) : (
     <p>Hai this test </p>
      )}
    </div>
  );
};

export default MaintenancePage;
