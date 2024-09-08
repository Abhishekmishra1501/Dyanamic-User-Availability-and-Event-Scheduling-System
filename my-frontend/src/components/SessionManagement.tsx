import React, { useEffect, useState } from 'react';
import { fetchSessions } from '../api/api';

const SessionManagement: React.FC = () => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const getSessions = async () => {
      const data = await fetchSessions();
      setSessions(data);
    };
    getSessions();
  }, []);

  return (
    <div>
      <h2>Session Management</h2>
      <ul>
        {sessions.map((session: any, index: number) => (
          <li key={index}>{`${session.user}: ${new Date(
            session.start
          ).toLocaleString()} - ${new Date(session.end).toLocaleString()}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default SessionManagement;
