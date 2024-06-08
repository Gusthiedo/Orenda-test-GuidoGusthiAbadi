# E-Commerce Application

This is a full-stack e-commerce application built with Express.js for the backend and React.js for the frontend. The application allows users to manage products, customers, and orders.

## Features

- **Backend**: Express.js, Sequelize ORM, PostgreSQL
- **Frontend**: React.js, Axios for HTTP requests
- **API Endpoints**: CRUD operations for products, customers, and orders

## Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)
- PostgreSQL

### Setting Up the Backend

First, clone the repository and navigate to the project directory using the command `git clone https://github.com/Gusthiedo/Orenda-test-GuidoGusthiAbadi.git` followed by `cd Orenda-test-GuidoGusthiAbadi`. Install the backend dependencies with `npm install`.

Next, configure PostgreSQL by creating a new PostgreSQL database using the command `CREATE DATABASE ecommerce_db;`. Update the `config/config.json` file with your PostgreSQL database credentials, specifying your username, password, and database name. Create Sequelize models for products, customers, and orders by creating respective files in the `models` directory. Then, create routes for handling API requests by setting up the necessary route handlers in the `routes` directory. Implement business logic in the controllers by creating the relevant controller files in the `controllers` directory. Finally, start the backend server using `node index.js`.

### Setting Up the Frontend

Navigate to the `client` directory using `cd client` and start the frontend server with `npm start`.

### Running the Application

To run the application, start the backend server with `node index.js` and the frontend server by navigating to the `client` directory and running `npm start`. Open your browser and go to `http://localhost:3000` to see the application in action.
