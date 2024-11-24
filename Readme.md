# Bicycle Store - Express & TypeScript Application

Welcome to the **Bicycle Store**, a comprehensive application built using **Express**, **TypeScript**, and **MongoDB**. This project serves as an online bicycle store, enabling users to explore available bicycles and place orders seamlessly. With robust schema validation powered by Mongoose, the application ensures data accuracy and reliability.

---

## Features

- **Bicycle Management**:
  - Perform CRUD operations for bicycles, including adding, updating, deleting, and viewing details.
- **Order Management**:

  - Place orders for bicycles with options for quantity selection and automatic price calculation.

- **MongoDB Integration**:

  - Centralized data storage using MongoDB with Mongoose for schema management.

- **Data Integrity**:
  - Comprehensive schema validation for bicycles and orders ensures consistency and error-free operation.

---

## Technologies Used

- **Node.js**: Server-side runtime environment for running JavaScript applications.
- **Express**: Lightweight web framework for building RESTful APIs.
- **TypeScript**: Superset of JavaScript providing static typing for improved development efficiency.
- **MongoDB**: NoSQL database for storing bicycles and order data.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB to handle schema definition and validation.

---

## Installation

### Prerequisites

Ensure the following are installed on your system:

- **Node.js** (version 14 or higher)
- **MongoDB** (locally or through a cloud service like MongoDB Atlas)

---

### Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/musaakramsaleh/next-level-assignment-2.git
cd bicycle-store
```

###Setup Environment Variables

```bash
Create a .env file in the root of the project and configure it with your MongoDB connection URI and the desired server port:
```

```bash
###Run the Application
Start the server with TypeScript compilation:

npm run dev
The application will run on the port defined in your .env file (default: 5000).
```

Endpoints
Bicycles
GET /api/products: Fetch a list of all bicycles.
POST /api/products: Add a new bicycle to the store.
GET /api/products/:id : Get details of a specific bicycle.
PUT /api/products/:id : Update the details of a specific bicycle.
DELETE /api/products/:id : Delete a bicycle from the store.
POST /api/orders/ creates new order
GET /api/orders/ get all order
GET /api/orders/:id get specific order
DELETE /api/orders/:id Delete specific order
GET /api/order/revenue showa total revenue ffrom sale
