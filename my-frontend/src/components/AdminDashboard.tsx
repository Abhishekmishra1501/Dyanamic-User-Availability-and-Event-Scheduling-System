import React from 'react';
import {Card, Table} from 'react-bootstrap';

interface AdminDashboardProps {
  availabilities: any[];
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ availabilities }) => {
  return (
    <div className="mt-4">
      <h2>Admin Dashboard</h2>
      <Card>
        <Card.Header>Available Slots</Card.Header>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Email</th>
                <th>Start Time</th>
                <th>End Time</th>
              </tr>
            </thead>
            <tbody>
              {availabilities.map((item, index) => (
                <tr key={index}>
                  <td>{item.email}</td>
                  <td>{new Date(item.start).toLocaleString()}</td>
                  <td>{new Date(item.end).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AdminDashboard;
