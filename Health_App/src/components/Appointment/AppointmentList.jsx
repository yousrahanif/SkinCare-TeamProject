// AppointmentList.js

// AppointmentList.js

import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../../providers/AuthProviders';
import EditAppointmentModal from './EditAppointmentModal';
import DeleteConfirmationModal from './DeleteConfirmationModal';
import Swal from 'sweetalert2';
import './AppointmentList.css'; // Import CSS file for styling
import { Link } from 'react-router-dom';

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const authContext = useContext(AuthContext);

  const fetchAppointments = async () => {
    try {
      if (authContext.user) {
        const userEmail = authContext.user.email;
        const response = await axios.get(`http://localhost:12345/appointments?email=${userEmail}`);





       


        setAppointments(response.data);
      }
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, [authContext.user]);

  const handleEdit = (appointment) => {
    setSelectedAppointment(appointment);
    setEditModalOpen(true);
  };

  const handleDelete = async (appointment) => {
    setSelectedAppointment(appointment);
    setDeleteModalOpen(true);
  };

  const handleDeleteConfirmation = async () => {
    try {
      await axios.delete(`http://localhost:12345/appointments/${selectedAppointment._id}`);
      setAppointments(prevAppointments => prevAppointments.filter(appointment => appointment._id !== selectedAppointment._id));
      setDeleteModalOpen(false);
    } catch (error) {
      console.error('Error deleting appointment:', error);
    }
  };

  const handleUpdate = (updatedAppointment) => {
    setAppointments(prevAppointments => {
      return prevAppointments.map(appointment => {
        if (appointment._id === updatedAppointment._id) {
          return updatedAppointment;
        } else {
          return appointment;
        }
      });
    });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    date.setDate(date.getDate());
    return date.toLocaleDateString();
  };

  return (
    <div className="appointment-list-container">
      <h2 className='mt-4 appointment-list-title'>Your Appointments</h2>
      {appointments.length === 0 ? (
        <p>You have no current appointments.
         <span>  <Link to="/make" style={{ color: 'blue' }}>Make Appointments</Link>
         </span>
        </p>
        
      ) : (
        <ul className="appointment-list text-center">
          {appointments.map(appointment => (
            <li key={appointment._id} className="appointment-item">
              <div>Name: {appointment.name}</div>
              <div>Contact Number: {appointment.phoneNumber}</div>
              <div>Date of Appointment: {formatDate(appointment.appointmentDate)}</div>
             
              
              <div>Doctor: {appointment.doctor}</div>
              <div>Concerns: {appointment.concerns}</div>
              <div className="button-container">
                <button onClick={() => handleEdit(appointment)} className='mr-4 btn btn-primary'>
                  Edit
                </button>
                <button className='mr-4 btn btn-primary' onClick={() => handleDelete(appointment)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {editModalOpen && <EditAppointmentModal appointment={selectedAppointment} onClose={() => setEditModalOpen(false)} onUpdate={handleUpdate} />}
      {deleteModalOpen && <DeleteConfirmationModal appointmentId={selectedAppointment._id} onClose={() => setDeleteModalOpen(false)} onConfirm={handleDeleteConfirmation} />}
    </div>
  );
};

export default AppointmentList;


// import React, { useContext, useState, useEffect } from 'react';
// import axios from 'axios';
// import { AuthContext } from '../../providers/AuthProviders';
// import EditAppointmentModal from './EditAppointmentModal';
// import DeleteConfirmationModal from './DeleteConfirmationModal';
// import Swal from 'sweetalert2';
// import './AppointmentList.css'; // Import CSS file for styling
// // import AppointmentForm from './AppointmentForm';

// const AppointmentList = () => {
//   const [appointments, setAppointments] = useState([]);
//   const [editModalOpen, setEditModalOpen] = useState(false);
//   const [deleteModalOpen, setDeleteModalOpen] = useState(false);
//   const [selectedAppointment, setSelectedAppointment] = useState(null);
//   const authContext = useContext(AuthContext);

//   const fetchAppointments = async () => {
//     try {
//       if (authContext.user) {
//         const userEmail = authContext.user.email;
//         const response = await axios.get(`http://localhost:12345/appointments?email=${userEmail}`);
//         setAppointments(response.data);
//       }
//     } catch (error) {
//       console.error('Error fetching appointments:', error);
//     }
//   };

//   useEffect(() => {
//     fetchAppointments();
//   }, [authContext.user]);

//   const handleEdit = (appointment) => {
//     setSelectedAppointment(appointment);
//     setEditModalOpen(true);
//   };

//   const handleDelete = async (appointment) => {
//     setSelectedAppointment(appointment);
//     setDeleteModalOpen(true);
//   };

//   const handleDeleteConfirmation = async () => {
//     try {
//       await axios.delete(`http://localhost:12345/appointments/${selectedAppointment._id}`);
//       setAppointments(prevAppointments => prevAppointments.filter(appointment => appointment._id !== selectedAppointment._id));
//       setDeleteModalOpen(false);
//     } catch (error) {
//       console.error('Error deleting appointment:', error);
//     }
//   };

//   const handleUpdate = (updatedAppointment) => {
//     // Update the appointment in the state
//     setAppointments(prevAppointments => {
//       return prevAppointments.map(appointment => {
//         if (appointment._id === updatedAppointment._id) {
//           return updatedAppointment;
//         } else {
//           return appointment;
//         }
//       });
//     });
//   };

//   // Helper function to format date correctly
//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     // Adjust the date to display correctly
//     date.setDate(date.getDate());
//     return date.toLocaleDateString();
//   };

//   return (
//     <div className="appointment-list-container">
//       <h2>Your Appointments</h2>
//       <ul className="appointment-list">
//         {appointments.map(appointment => (
//           <li key={appointment._id} className="appointment-item">
//             <div>Name: {appointment.name}</div>
//             <div>Contact Number: {appointment.phoneNumber}</div>
//             {/* <div>Date of Birth: {formatDate(appointment.dob)}</div> */}
//             <div>Date of Appointment: {formatDate(appointment.appointmentDate)}</div>

//             <div>Doctor: {appointment.doctor}</div>
//             <div>Concerns: {appointment.concerns}</div>
//             <div className="button-container">
//               <button onClick={() => handleEdit(appointment)} className='mr-4 btn btn-primary'>
//                 Edit
//               </button>
//               <button className='mr-4 btn btn-primary' onClick={() => handleDelete(appointment)}>Delete</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//       {editModalOpen && <EditAppointmentModal appointment={selectedAppointment} onClose={() => setEditModalOpen(false)} onUpdate={handleUpdate} />}
//       {deleteModalOpen && <DeleteConfirmationModal appointmentId={selectedAppointment._id} onClose={() => setDeleteModalOpen(false)} onConfirm={handleDeleteConfirmation} />}
    
//     </div>
//   );
// };

// export default AppointmentList;



// import React, { useContext, useState, useEffect } from 'react';
// import axios from 'axios';
// import { AuthContext } from '../../providers/AuthProviders';
// import EditAppointmentModal from './EditAppointmentModal';
// import DeleteConfirmationModal from './DeleteConfirmationModal';
// import Swal from 'sweetalert2';
// import './AppointmentList.css'; // Import CSS file for styling

// const AppointmentList = () => {
//   const [appointments, setAppointments] = useState([]);
//   const [editModalOpen, setEditModalOpen] = useState(false);
//   const [deleteModalOpen, setDeleteModalOpen] = useState(false);
//   const [selectedAppointment, setSelectedAppointment] = useState(null);
//   const authContext = useContext(AuthContext);

//   useEffect(() => {
//     const fetchAppointments = async () => {
//       try {
//         if (authContext.user) {
//           const userEmail = authContext.user.email;
//           const response = await axios.get(`http://localhost:12345/appointments?email=${userEmail}`);
//           setAppointments(response.data);
//         }
//       } catch (error) {
//         console.error('Error fetching appointments:', error);
//       }
//     };

//     fetchAppointments();
//   }, [authContext.user]);

//   const handleEdit = (appointment) => {
//     setSelectedAppointment(appointment);
//     setEditModalOpen(true);
//   };

//   const handleDelete = async (appointment) => {
//     setSelectedAppointment(appointment);
//     setDeleteModalOpen(true);
//   };

//   const handleDeleteConfirmation = async () => {
//     try {
//       await axios.delete(`http://localhost:12345/appointments/${selectedAppointment._id}`);
//       setAppointments(prevAppointments => prevAppointments.filter(appointment => appointment._id !== selectedAppointment._id));
//       setDeleteModalOpen(false);
//     } catch (error) {
//       console.error('Error deleting appointment:', error);
//     }
//   };

//   const handleUpdate = (updatedAppointment) => {
//     // Update the appointment in the state
//     setAppointments(prevAppointments => {
//       return prevAppointments.map(appointment => {
//         if (appointment._id === updatedAppointment._id) {
//           return updatedAppointment;
//         } else {
//           return appointment;
//         }
//       });
//     });
//   };

//   // Helper function to format date correctly
//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     // Adjust the date to display correctly
//     date.setDate(date.getDate() + 1);
//     return date.toLocaleDateString();
//   };

//   return (
//     <div className="appointment-list-container">
//       <h2>Your Appointments</h2>
//       <ul className="appointment-list">
//         {appointments.map(appointment => (
//           <li key={appointment._id} className="appointment-item">
//             <div>Name: {appointment.name}</div>
//             <div>Contact Number: {appointment.phoneNumber}</div>
//             {/* <div>Date of Birth: {formatDate(appointment.dob)}</div> */}
//             <div>Date of Appointment: {formatDate(appointment.appointmentDate)}</div>

//             <div>Doctor: {appointment.doctor}</div>
//             <div>Concerns: {appointment.concerns}</div>
//             <div className="button-container">
//               <button onClick={() => handleEdit(appointment)} className='mr-4 btn btn-primary'>
//                 Edit
//               </button>
//               <button className='mr-4 btn btn-primary' onClick={() => handleDelete(appointment)}>Delete</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//       {editModalOpen && <EditAppointmentModal appointment={selectedAppointment} onClose={() => setEditModalOpen(false)} onUpdate={handleUpdate} />}
//       {deleteModalOpen && <DeleteConfirmationModal appointmentId={selectedAppointment._id} onClose={() => setDeleteModalOpen(false)} onConfirm={handleDeleteConfirmation} />}
      
//     </div>
//   );
// };

// export default AppointmentList;


// import React, { useContext, useState, useEffect } from 'react';
// import axios from 'axios';
// import { AuthContext } from '../../providers/AuthProviders';
// import EditAppointmentModal from './EditAppointmentModal';
// import DeleteConfirmationModal from './DeleteConfirmationModal';
// import Swal from 'sweetalert2';
// import './AppointmentList.css'; // Import CSS file for styling

// const AppointmentList = () => {
//   const [appointments, setAppointments] = useState([]);
//   const [editModalOpen, setEditModalOpen] = useState(false);
//   const [deleteModalOpen, setDeleteModalOpen] = useState(false);
//   const [selectedAppointment, setSelectedAppointment] = useState(null);
//   const authContext = useContext(AuthContext);

//   useEffect(() => {
//     const fetchAppointments = async () => {
//       try {
//         if (authContext.user) {
//           const userEmail = authContext.user.email;
//           const response = await axios.get(`http://localhost:12345/appointments?email=${userEmail}`);
//           setAppointments(response.data);
//         }
//       } catch (error) {
//         console.error('Error fetching appointments:', error);
//       }
//     };

//     fetchAppointments();
//   }, [authContext.user]);

//   const handleEdit = (appointment) => {
//     setSelectedAppointment(appointment);
//     setEditModalOpen(true);
//   };

//   const handleDelete = async (appointment) => {
//     setSelectedAppointment(appointment);
//     setDeleteModalOpen(true);
//   };

//   const handleDeleteConfirmation = async () => {
//     try {
//       await axios.delete(`http://localhost:12345/appointments/${selectedAppointment._id}`);
//       setAppointments(prevAppointments => prevAppointments.filter(appointment => appointment._id !== selectedAppointment._id));
//       setDeleteModalOpen(false);
//     } catch (error) {
//       console.error('Error deleting appointment:', error);
//     }
//   };

//   const handleUpdate = (updatedAppointment) => {
//   // Update the appointment in the state
//   setAppointments(prevAppointments => {
//     return prevAppointments.map(appointment => {
//       if (appointment._id === updatedAppointment._id) {
//         return updatedAppointment;
//       } else {
//         return appointment;
//       }
//     });
//   });
// };


//   return (
//     <div className="appointment-list-container">
//       <h2>Your Appointments</h2>
//       <ul className="appointment-list">
//         {appointments.map(appointment => (
//           <li key={appointment._id} className="appointment-item">
//             <div>Name: {appointment.name}</div>
//             <div>Phone Number: {appointment.phoneNumber}</div>
//             <div>Date of Birth: {new Date(appointment.dob).toLocaleDateString()}</div>
//             <div>Date of Appointment: {new Date(appointment.date).toLocaleDateString()}</div>

//             <div>Doctor: {appointment.doctor}</div>
//             <div>Concerns: {appointment.concerns}</div>
//             <div className="button-container">
//               <button onClick={() => handleEdit(appointment)} className='mr-4 btn btn-primary'>
//                 Edit
//               </button>
//               <button className='mr-4 btn btn-primary' onClick={() => handleDelete(appointment)}>Delete</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//       {editModalOpen && <EditAppointmentModal appointment={selectedAppointment} onClose={() => setEditModalOpen(false)} onUpdate={handleUpdate} />}
//       {deleteModalOpen && <DeleteConfirmationModal appointmentId={selectedAppointment._id} onClose={() => setDeleteModalOpen(false)} onConfirm={handleDeleteConfirmation} />}
//     </div>
//   );
// };

// export default AppointmentList;


// import React, { useContext, useState, useEffect } from 'react';
// import axios from 'axios';
// import { AuthContext } from '../../providers/AuthProviders';
// import EditAppointmentModal from './EditAppointmentModal';
// import DeleteConfirmationModal from './DeleteConfirmationModal';
// import Swal from 'sweetalert2';
// import './AppointmentList.css'; // Import CSS file for styling

// const AppointmentList = () => {
//   const [appointments, setAppointments] = useState([]);
//   const [editModalOpen, setEditModalOpen] = useState(false);
//   const [deleteModalOpen, setDeleteModalOpen] = useState(false);
//   const [selectedAppointment, setSelectedAppointment] = useState(null);
//   const authContext = useContext(AuthContext);

  
//   useEffect(() => {
//     const fetchAppointments = async () => {
//       try {
//         if (authContext.user) {
//           const userEmail = authContext.user.email;
//           const response = await axios.get(`http://localhost:12345/appointments?email=${userEmail}`);
//           setAppointments(response.data);
//         }
//       } catch (error) {
//         console.error('Error fetching appointments:', error);
//       }
//     };

//     fetchAppointments();
//   }, [authContext.user]);

//   const handleEdit = (appointment) => {
//     setSelectedAppointment(appointment);
//     setEditModalOpen(true);
//   };

//   const handleDelete = async (appointment) => {
//     setSelectedAppointment(appointment);
//     try {
//       await axios.delete(`http://localhost:12345/appointments/${appointment._id}`);
//       setAppointments(prevAppointments => prevAppointments.filter(appt => appt._id !== appointment._id));
//       setDeleteModalOpen(false);
//     } catch (error) {
//       console.error('Error deleting appointment:', error);
//     }
//   };

//   const handleDeleteConfirmation = async () => {
//     try {
//       await axios.delete(`http://localhost:12345/appointments/${selectedAppointment._id}`);
//       setAppointments(prevAppointments => prevAppointments.filter(appointment => appointment._id !== selectedAppointment._id));
//       setDeleteModalOpen(false);
//     } catch (error) {
//       console.error('Error deleting appointment:', error);
//     }
//   };

//   const fetchAppointments = async () => {
//     try {
//       if (authContext.user) {
//         const userEmail = authContext.user.email;
//         const response = await axios.get(`http://localhost:12345/appointments?email=${userEmail}`);
//         setAppointments(response.data);
//       }
//     } catch (error) {
//       console.error('Error fetching appointments:', error);
//     }
//   };

//   return (
//     <div className="appointment-list-container">
//       <h2>Your Appointments</h2>
//       <ul className="appointment-list">
//         {appointments.map(appointment => (
//           <li key={appointment._id} className="appointment-item">
//             <div>Name: {appointment.name}</div>
//             <div>Phone Number: {appointment.phoneNumber}</div>
//             <div>Date of Birth: {new Date(appointment.dob).toLocaleDateString()}</div>
//             <div>Doctor: {appointment.doctor}</div>
//             <div>Concerns: {appointment.concerns}</div>
//             <div className="button-container">
//               <button onClick={() => handleEdit(appointment)} className='mr-4 btn btn-primary'>
//                 Edit
//               </button>
//               <button className='mr-4 btn btn-primary' onClick={() => handleDelete(appointment)}>Delete</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//       {editModalOpen && <EditAppointmentModal appointment={selectedAppointment} onClose={() => setEditModalOpen(false)} onUpdate={fetchAppointments} />}
//       {deleteModalOpen && <DeleteConfirmationModal appointmentId={selectedAppointment._id} onClose={() => setDeleteModalOpen(false)} onConfirm={handleDeleteConfirmation} />}
//     </div>
//   );
// };

// export default AppointmentList;



// import React, { useContext, useState, useEffect } from 'react';
// import axios from 'axios';
// import { AuthContext } from '../../providers/AuthProviders';
// import EditAppointmentModal from './EditAppointmentModal';
// import DeleteConfirmationModal from './DeleteConfirmationModal';
// import './AppointmentList.css'; // Import CSS file for styling

// const AppointmentList = () => {
//   const [appointments, setAppointments] = useState([]);
//   const [editModalOpen, setEditModalOpen] = useState(false);
//   const [deleteModalOpen, setDeleteModalOpen] = useState(false);
//   const [selectedAppointment, setSelectedAppointment] = useState(null);
//   const authContext = useContext(AuthContext);

//   useEffect(() => {
//     const fetchAppointments = async () => {
//       try {
//         if (authContext.user) {
//           const userEmail = authContext.user.email;
//           const response = await axios.get(`http://localhost:12345/appointments?email=${userEmail}`);
//           setAppointments(response.data);
//         }
//       } catch (error) {
//         console.error('Error fetching appointments:', error);
//       }
//     };

//     fetchAppointments();
//   }, [authContext.user]);

//   const handleEdit = (appointment) => {
//     setSelectedAppointment(appointment);
//     setEditModalOpen(true);
//   };

 
//   const handleDelete = async (appointment) => {
//     setSelectedAppointment(appointment);
//     try {
//       await axios.delete(`http://localhost:12345/appointments/${appointment._id}`);
//       setAppointments(prevAppointments => prevAppointments.filter(appt => appt._id !== appointment._id));
//       setDeleteModalOpen(false);
//     } catch (error) {
//       console.error('Error deleting appointment:', error);
//     }
//   };
  

//   const handleDeleteConfirmation = async () => {
//     try {
//       await axios.delete(`http://localhost:12345/appointments/${selectedAppointment._id}`);
//       setAppointments(prevAppointments => prevAppointments.filter(appointment => appointment._id !== selectedAppointment._id));
//       setDeleteModalOpen(false);
//     } catch (error) {
//       console.error('Error deleting appointment:', error);
//     }
//   };

//   return (
//     <div className="appointment-list-container"> {/* Apply CSS class for styling */}
//       <h2>Your Appointments</h2>
//       <ul className="appointment-list">
//         {appointments.map(appointment => (
//           <li key={appointment._id} className="appointment-item">
//             <div>Name: {appointment.name}</div>
//             <div>Phone Number: {appointment.phoneNumber}</div>
//             <div>Date of Birth: {new Date(appointment.dob).toLocaleDateString()}</div>
//             <div>Doctor: {appointment.doctor}</div>
//             <div>Concerns: {appointment.concerns}</div>
//             <div className="button-container">
//               <button onClick={() => handleEdit(appointment)} className='mr-4 btn btn-primary'>
//                 Edit
//               </button>
//               <button className='mr-4 btn btn-primary' onClick={() => handleDelete(appointment)}>Delete</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//       {editModalOpen && <EditAppointmentModal appointment={selectedAppointment} onClose={() => setEditModalOpen(false)} setAppointments={setAppointments} />}
//       {deleteModalOpen && <DeleteConfirmationModal appointmentId={selectedAppointment._id} onClose={() => setDeleteModalOpen(false)} onConfirm={handleDeleteConfirmation} />}
//     </div>
//   );
// };

// export default AppointmentList;



// import React, { useContext, useState, useEffect } from 'react';
// import axios from 'axios';
// import { AuthContext } from '../../providers/AuthProviders';
// import EditAppointmentModal from './EditAppointmentModal';
// import DeleteConfirmationModal from './DeleteConfirmationModal';
// import './AppointmentList.css'; // Import CSS file for styling

// const AppointmentList = () => {
//   const [appointments, setAppointments] = useState([]);
//   const [editModalOpen, setEditModalOpen] = useState(false);
//   const [deleteModalOpen, setDeleteModalOpen] = useState(false);
//   const [selectedAppointment, setSelectedAppointment] = useState(null);
//   const authContext = useContext(AuthContext);

//   useEffect(() => {
//     const fetchAppointments = async () => {
//       try {
//         if (authContext.user) {
//           const userEmail = authContext.user.email;
//           const response = await axios.get(`http://localhost:12345/appointments?email=${userEmail}`);
//           setAppointments(response.data);
//         }
//       } catch (error) {
//         console.error('Error fetching appointments:', error);
//       }
//     };

//     fetchAppointments();
//   }, [authContext.user]);

//   const handleEdit = (appointment) => {
//     setSelectedAppointment(appointment);
//     setEditModalOpen(true);
//   };

//   const handleDelete = (appointment) => {
//     setSelectedAppointment(appointment);
//     setDeleteModalOpen(true);
//   };

//   const handleDeleteConfirmation = async () => {
//     try {
//       await axios.delete(`http://localhost:12345/appointments/${selectedAppointment._id}`);
//       setAppointments(prevAppointments => prevAppointments.filter(appointment => appointment._id !== selectedAppointment._id));
//       setDeleteModalOpen(false);
//     } catch (error) {
//       console.error('Error deleting appointment:', error);
//     }
//   };

//   return (
//     <div className="appointment-list-container"> {/* Apply CSS class for styling */}
//       <h2>Your Appointments</h2>
//       <ul className="appointment-list">
//         {appointments.map(appointment => (
//           <li key={appointment._id} className="appointment-item">
//             <div>Name: {appointment.name}</div>
//             <div>Phone Number: {appointment.phoneNumber}</div>
//             <div>Date of Birth: {new Date(appointment.dob).toLocaleDateString()}</div>
//             <div>Doctor: {appointment.doctor}</div>
//             <div>Concerns: {appointment.concerns}</div>
//             <div className="button-container">
//               <button onClick={() => handleEdit(appointment)} className='mr-4 btn btn-primary'>
//                 Edit
//               </button>
//               <button className='mr-4 btn btn-primary' onClick={() => handleDelete(appointment)}>Delete</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//       {editModalOpen && <EditAppointmentModal appointment={selectedAppointment} onClose={() => setEditModalOpen(false)} setAppointments={setAppointments} />}
//       {deleteModalOpen && <DeleteConfirmationModal appointmentId={selectedAppointment._id} onClose={() => setDeleteModalOpen(false)} onConfirm={handleDeleteConfirmation} />}
//     </div>
//   );
// };

// export default AppointmentList;


