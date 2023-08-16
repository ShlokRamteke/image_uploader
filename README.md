# React and Node Full-Stack Project

This repository contains a full-stack project developed using React for the client-side and Node.js for the server-side. The project allows users to register, upload images, view registered user data, and delete user records.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [API Calls](#api-calls)
- [License](#license)

## Introduction
This full-stack application combines the power of React and Node.js to create a user registration system with image upload capabilities. Users can interact with the application through a user-friendly UI, while the server-side handles data storage, retrieval, and deletion.

## Features
- User registration with uploaded images
- Image gallery with user data
- User data deletion
- Modern and responsive UI

## Architecture
The application is built using React and Node.js, with MangoDB as the database for storing user data and images. It employs Axios for handling HTTP requests, `react-bootstrap` for UI components, and the `multer` library for handling image uploads.

### Client-Side (React)
- `App.js`: Main entry point for the React application, handling routing and rendering components.
- `Header.js`: Navigation bar component using `react-bootstrap` for UI.
- `Home.js`: Component displaying registered user data and images fetched from the server.
- `Register.js`: Component for user registration and image upload.

### Server-Side (Node.js)
- `app.js`: Entry point for the server-side code, initializing Express, middleware, and routing.
- `router.js`: Defines API routes, handles user registration, data retrieval, and deletion.
- `db/conn.js`: Establishes MAngoDB database connection using environment variables.
- `model/userSchema.js`: establish the scheme for the data uploaded to the database

## Getting Started
1. Clone this repository.
2. Install dependencies for both the client and server using `npm install` in their respective directories.
3. Create a `.env` file in the server directory with MangoDB connection details.
4. Start the server by running `npm start` in the server directory.
5. Start the React development server by running `npm start` in the client directory.
6. Access the application at `http://localhost:3000` in your web browser.

## Usage
1. Visit the home page to see the list of registered users and their images.
2. Click on the "Register" link to add a new user along with an uploaded image.
3. Click the "Delete" button next to a user's record to remove it from the list.

## API Calls
The application uses common API request functions stored in the `apicall.js` and `apis.js` files. These files provide a streamlined approach to making HTTP requests to the server-side API.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
