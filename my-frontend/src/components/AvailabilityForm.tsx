import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { submitAvailability } from '../api/api'; // Updated API function

interface AvailabilityFormProps {
  addAvailability: (availabilityData: {
    email: string;
    start: string; // Change to string for API compatibility
    end: string; // Change to string for API compatibility
  }) => Promise<void>;
}

const AvailabilityForm: React.FC<AvailabilityFormProps> = ({ addAvailability }) => {
  const [email, setEmail] = useState<string>('');
  const [start, setStart] = useState<Date | null>(null);
  const [end, setEnd] = useState<Date | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (start && end) {
      try {
        await addAvailability({ 
          email, 
          start: start.toISOString(), // Convert Date to string
          end: end.toISOString() // Convert Date to string
        });
        console.log('Availability submitted successfully');
        setEmail('');
        setStart(null);
        setEnd(null);
        setError(null);
      } catch (error) {
        console.error('Error submitting availability:', error);
        setError('Error submitting availability');
      }
    } else {
      setError('Start and end times must be selected');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Submit Availability</h2>
      <form onSubmit={handleSubmit} className="form-group">
        <label>Email:</label>
        <input
          type="email"
          className="form-control mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Start Time:</label>
        <DatePicker
          selected={start}
          onChange={(date) => setStart(date)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={30}
          dateFormat="MMMM d, yyyy h:mm aa"
          className="form-control mb-3"
          required
        />
        <label>End Time:</label>
        <DatePicker
          selected={end}
          onChange={(date) => setEnd(date)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={30}
          dateFormat="MMMM d, yyyy h:mm aa"
          className="form-control mb-3"
          required
        />
        {error && <div className="alert alert-danger">{error}</div>}
        <button type="submit" className="btn btn-primary">Submit Availability</button>
      </form>
    </div>
  );
};

export default AvailabilityForm;
