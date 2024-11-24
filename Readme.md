Bicycle Store - Express & TypeScript Application
Welcome to the Bicycle Store application built with Express, TypeScript, and MongoDB. This application serves as an online store for bicycles, allowing users to view available bicycles and place orders. The project integrates Mongoose for database management and ensures data integrity through schema validation.

Features
Bicycle Management: CRUD operations for managing bicycles (adding, updating, deleting, and viewing bicycles).
Order Management: Users can place orders for bicycles with quantity selection and price calculation.
MongoDB Integration: All data is stored in a MongoDB database, using Mongoose for schema definition and validation.
Data Integrity: Strong validation for bicycle details and order management ensures smooth operations.
Technologies Used
Node.js: Server-side JavaScript runtime for building the application.
Express: Web framework for Node.js to handle API routes and HTTP requests.
TypeScript: Superset of JavaScript that adds static typing, enabling better development experience and error detection.
MongoDB: NoSQL database used for storing bicycles and orders.
Mongoose: ODM (Object Data Modeling) library for MongoDB, which provides a straight-forward, schema-based solution to model data.
Installation
Prerequisites
Make sure you have the following installed:

Node.js (version 14 or higher)
MongoDB (either locally or use a cloud service like MongoDB Atlas)
Clone the Repository
Clone the repository to your local machine:

bash
Copy code
git clone https://github.com/musaakramsaleh/next-level-assignment-2.git
cd bicycle-store
Install Dependencies
Run the following command to install all the required dependencies:

bash
Copy code
npm install
Setup Environment Variables
Create a .env file in the root of the project and add your MongoDB connection URI and desired server port:

env
Copy code
MONGO_URI=mongodb://localhost:27017/bicycle-store
PORT=5000
Run the Application
Start the server with TypeScript compilation:

bash
Copy code
npm run dev
This will start the server on the port defined in your .env file (default: 5000).

Endpoints
Here are the main API endpoints available in the Bicycle Store application:

1. Bicycles
   GET /api/bicycles: Fetch a list of all bicycles.
   POST /api/bicycles: Add a new bicycle to the store.
   GET /api/bicycles/:id: Get details of a specific bicycle.
   PUT /api/bicycles/:id: Update the details of a specific bicycle.
   DELETE /api/bicycles/:id: Delete a bicycle from the store.
2. Orders
   GET /api/orders: Fetch a list of all orders.
   POST /api/orders: Place a new order for a bicycle.
   GET /api/orders/:id: Get details of a specific order.
3. Revenue
   GET /api/orders/revenue: Calculate the total revenue generated from all orders.
