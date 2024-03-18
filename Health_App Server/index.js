'use strict';

const Hapi = require('@hapi/hapi');
const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config(); 

const init = async () => {
    const server = Hapi.server({
        host: 'localhost',
        port: 12345
    });

    // const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.sdwsth3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    const username = "healthApp";
const password = "XXekEBl4Dndeviao";
const uri = `mongodb+srv://${username}:${password}@cluster0.sdwsth3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

    
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        const db = client.db('healthApp');
        const appointmentsCollection = db.collection('appointments');

        // Root route
        server.route({
            method: 'GET',
            path: '/',
            handler: (request, h) => {
                return 'Welcome to the Health App!';
            }
        });

        // Route for creating an appointment
        // server.route({
        //     method: 'POST',
        //     path: '/appointments',
        //     handler: async (request, h) => {
        //         try {
        //             const newAppointment = request.payload;
        //             const result = await appointmentsCollection.insertOne(newAppointment);
        //             console.log('Insertion result:', result); // Log the result object
        //             if (result.insertedId) {
        //                 // If insertion is successful, construct the response
        //                 const insertedAppointment = { _id: result.insertedId, ...newAppointment };
        //                 return h.response(insertedAppointment).code(201);
        //             } else {
        //                 console.error('Error creating appointment: No insertedId');
        //                 return h.response({ message: 'Failed to create appointment' }).code(500);
        //             }
        //         } catch (error) {
        //             console.error('Error creating appointment:', error);
        //             return h.response({ message: 'Failed to create appointment' }).code(500);
        //         }
        //     },
        //     options: {
        //         cors: true // Enable CORS for this route
        //     }
        // });









        server.route({
            method: 'GET',
            path: '/admin/appointments',
            handler: async (request, h) => {
                try {
                    // Fetch appointments from the database
                    const appointments = await appointmentsCollection.find().toArray();
                    // Send JSON response with appointments data
                    return h.response(appointments).type('application/json');
                } catch (error) {
                    // Log the error
                    console.error('Error fetching appointments:', error);
                    // Return an error response
                    return h.response({ message: 'Failed to fetch appointments' }).code(500);
                }
            },
            options: {
                cors: true
            }
        });
        
        
        


        server.route({
            method: 'POST',
            path: '/appointments',
            handler: async (request, h) => {
                try {
                    const newAppointment = request.payload;
                    const existingAppointment = await appointmentsCollection.findOne({ email: newAppointment.email });
                    if (existingAppointment) {
                        // If an appointment already exists for the email, return an error response
                        return h.response({ message: 'You already have an appointment' }).code(400);
                    }
                    const result = await appointmentsCollection.insertOne(newAppointment);
                    console.log('Insertion result:', result);
                    if (result.insertedId) {
                        const insertedAppointment = { _id: result.insertedId, ...newAppointment };
                        return h.response(insertedAppointment).code(201);
                    } else {
                        console.error('Error creating appointment: No insertedId');
                        return h.response({ message: 'Failed to create appointment' }).code(500);
                    }
                } catch (error) {
                    console.error('Error creating appointment:', error);
                    return h.response({ message: 'Failed to create appointment' }).code(500);
                }
            },
            options: {
                cors: true
            }
        });







        

        // Route for getting all appointments
        server.route({
            method: 'GET',
            path: '/appointments',
            handler: async (request, h) => {
                try {
                    const userEmail = request.query.email; // Get user's email from query parameters
                    const appointments = await appointmentsCollection.find({ email: userEmail }).toArray();
                    return appointments;
                } catch (error) {
                    console.error('Error fetching appointments:', error);
                    return h.response({ message: 'Failed to fetch appointments' }).code(500);
                }
            },
            options: {
                cors: true // Enable CORS for this route
            }
        });










// Route for getting all appointments
// server.route({
//     method: 'GET',
//     path: '/appointments',
//     handler: async (request, h) => {
//         try {
//             // Fetch all appointments from the database
//             const appointments = await appointmentsCollection.find({}).toArray();
//             return appointments;
//         } catch (error) {
//             console.error('Error fetching appointments:', error);
//             return h.response({ message: 'Failed to fetch appointments' }).code(500);
//         }
//     },
//     options: {
//         cors: true // Enable CORS for this route
//     }
// });



        // Route for updating an appointment
       
        
        server.route({
            method: 'PUT',
            path: '/appointments/{id}',
            handler: async (request, h) => {
                try {
                    const id = request.params.id;
                    const updatedAppointment = request.payload;
                    // Exclude the _id field from the update
                    delete updatedAppointment._id;
                    const appointmentToUpdate = {
                        $set: {
                            doctor: updatedAppointment.doctor,
                            date: updatedAppointment.date,
                            appointmentDate: updatedAppointment.appointmentDate,
                            concerns: updatedAppointment.concerns,
                            
                            // Add other fields here if needed
                        }
                    };
                    const result = await appointmentsCollection.updateOne({ _id: new ObjectId(id) }, appointmentToUpdate);
        
                    return h.response({ message: 'Appointment updated successfully' });
                } catch (error) {
                    console.error('Error updating appointment:', error);
                    return h.response({ message: 'Failed to update appointment' }).code(500);
                }
            },
            options: {
                cors: true // Enable CORS for this route
            }
        });
       
        // Route for deleting an appointment
        server.route({
            method: 'DELETE',
            path: '/appointments/{id}',
            handler: async (request, h) => {
                try {
                    const id = request.params.id;
                    const result = await appointmentsCollection.deleteOne({ _id: new ObjectId(id) }); // Correct usage of new ObjectId()
                    if (result.deletedCount === 1) {
                        // If deletion is successful, return the deleted appointment's ID
                        return h.response({ deletedId: id, message: 'Appointment deleted successfully' });
                    } else {
                        // If deletion fails, return an error message
                        return h.response({ message: 'Failed to delete appointment' }).code(404);
                    }
                } catch (error) {
                    console.error('Error deleting appointment:', error);
                    return h.response({ message: 'Failed to delete appointment' }).code(500);
                }
            },
            options: {
                cors: true // Enable CORS for this route
            }
        });

        // Start the server
        await server.start();
        console.log(`Server started on ${server.info.uri}`);
    } catch (err) {
        console.error('Error starting server:', err);
    }
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();






