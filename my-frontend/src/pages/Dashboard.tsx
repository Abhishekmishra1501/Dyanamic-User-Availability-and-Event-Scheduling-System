import React, { useEffect, useState } from 'react';
import AvailabilityForm from '../components/AvailabilityForm';
import AdminDashboard from '../components/AdminDashboard';
import { fetchAvailabilities, submitAvailability } from '../api/api';

const Dashboard: React.FC = () => {
  const [availabilities, setAvailabilities] = useState<any[]>([]);

  useEffect(() => {
    const loadAvailabilities = async () => {
      try {
        const data = await fetchAvailabilities();
        setAvailabilities(data);
      } catch (error) {
        console.error('Error fetching availabilities:', error);
      }
    };
    loadAvailabilities();
  }, []);

  const handleAddAvailability = async (availabilityData: { email: string; start: string; end: string }) => {
    try {
      await submitAvailability(availabilityData);
      const updatedAvailabilities = await fetchAvailabilities();
      setAvailabilities(updatedAvailabilities);
    } catch (error) {
      console.error('Error adding availability:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h1>Dashboard</h1>
      <AvailabilityForm addAvailability={handleAddAvailability} />
      <AdminDashboard availabilities={availabilities} />
    </div>
  );
};

export default Dashboard;
