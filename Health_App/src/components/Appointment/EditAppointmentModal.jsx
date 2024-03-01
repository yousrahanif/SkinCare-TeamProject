// components/EditAppointmentModal.js

import React, { useState } from 'react';
import axios from 'axios';

const EditAppointmentModal = ({ appointment, onClose }) => {
  const [updatedAppointment, setUpdatedAppointment] = useState(appointment);

  const handleChange = e => {
    const { name, value } = e.target;
    setUpdatedAppointment(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:12345/appointments/${appointment._id}`, updatedAppointment);
      onClose();
    } catch (error) {
      console.error('Error updating appointment:', error);
    }
  };

  return (
    <div>
      <h2>Edit Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Doctor:</label>
          <input type="text" name="doctor" value={updatedAppointment.doctor} onChange={handleChange} />
        </div>
        <div>
          <label>Date:</label>
          <input type="date" name="date" value={updatedAppointment.date} onChange={handleChange} />
        </div>
        <div>
          <label>Concerns:</label>
          <textarea name="concerns" value={updatedAppointment.concerns} onChange={handleChange} />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditAppointmentModal;
