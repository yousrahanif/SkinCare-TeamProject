import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AllAppointments.css'; // Import CSS file

const API_BASE_URL = 'https://health-app-server.vercel.app'; // Define the base URL for your backend API

const AllAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/admin/appointments`); // Use the base URL to make the request
        console.log('Response:', response.data); // Log the response data
        setAppointments(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching appointments:', error);
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  console.log('Appointments:', appointments); // Log appointments to see its current value

  return (
    <div className="appointments-container text-center"> {/* Container for centering */}
      <h2 className='text-3xl text-center'>All Appointments</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {Array.isArray(appointments) && appointments.map((appointment, index) => (
            <li key={index} className="appointment-item"> {/* Style each appointment item */}
              <div className="appointment-content">
                <div className="appointment-number">{index + 1}</div> {/* Numbered border */}
                <div className="appointment-details">
                  <p>Patient Name: {appointment.name}</p>
                  <p>Email: {appointment.email}</p>
                  <p>Time: {appointment.time}</p>
                  <p>Concerns: {appointment.concerns}</p>
                  <p>Doctor Name: {appointment.doctor}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllAppointments;
