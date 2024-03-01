// components/DeleteConfirmationModal.js

import React from 'react';
import axios from 'axios';

const DeleteConfirmationModal = ({ appointmentId, onClose }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:12345/appointments/${appointmentId}`);
      onClose();
    } catch (error) {
      console.error('Error deleting appointment:', error);
    }
  };

  return (
    <div>
      <p>Are you sure you want to delete this appointment?</p>
      <button onClick={handleDelete}>Yes, Delete</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default DeleteConfirmationModal;
