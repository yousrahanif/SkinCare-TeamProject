// AppointmentList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get('http://localhost:12345/appointments');
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []); // Run once on component mount

  return (
    <div>
      <h2>Appointments</h2>
      <ul>
        {appointments.map(appointment => (
          <li key={appointment._id}>
            <div>Name: {appointment.name}</div>
            <div>Phone Number: {appointment.phoneNumber}</div>
            <div>Date of Birth: {new Date(appointment.dob).toLocaleDateString()}</div>
            <div>Doctor: {appointment.doctor}</div>
            <div>Concerns: {appointment.concerns}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentList;





// // components/AppointmentList.js

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import EditAppointmentModal from './EditAppointmentModal';
// import DeleteConfirmationModal from './DeleteConfirmationModal';

// const AppointmentList = ({ userEmail }) => {
//   const [appointments, setAppointments] = useState([]);
//   const [editModalOpen, setEditModalOpen] = useState(false);
//   const [deleteModalOpen, setDeleteModalOpen] = useState(false);
//   const [selectedAppointment, setSelectedAppointment] = useState(null);

//   useEffect(() => {
//     const fetchAppointments = async () => {
//       try {
//         const response = await axios.get(`http://localhost:12345/appointments?email=${userEmail}`);
//         console.log('Appointments response:', response.data); // Log the response

//         setAppointments(response.data);
//       } catch (error) {
//         console.error('Error fetching appointments:', error);
//       }
//     };

//     fetchAppointments();
//   }, [userEmail]);

//   const handleEdit = (appointment) => {
//     setSelectedAppointment(appointment);
//     setEditModalOpen(true);
//   };

//   const handleDelete = (appointment) => {
//     setSelectedAppointment(appointment);
//     setDeleteModalOpen(true);
//   };

//   return (
//     <div>
//       <h2>Your Appointments</h2>
//       <ul>
//         {appointments.map(appointment => (
//           <li key={appointment._id}>
//             <div>{appointment.doctor}</div>
//             <div>{appointment.date}</div>
//             <div>{appointment.concerns}</div>
//             <div>
//               <button onClick={() => handleEdit(appointment)}>Edit</button>
//               <button onClick={() => handleDelete(appointment)}>Delete</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//       {editModalOpen && <EditAppointmentModal appointment={selectedAppointment} onClose={() => setEditModalOpen(false)} />}
//       {deleteModalOpen && <DeleteConfirmationModal appointment={selectedAppointment} onClose={() => setDeleteModalOpen(false)} />}
//     </div>
//   );
// };

// export default AppointmentList;
