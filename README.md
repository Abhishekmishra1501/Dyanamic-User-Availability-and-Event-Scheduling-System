# Dynamic User Availability and Event Scheduling System

## Overview

The **Dynamic User Availability and Event Scheduling System** is a web-based application that allows users to dynamically set their availability for specific days or the entire week. Admins can view this availability and schedule one-on-one or group sessions accordingly. This project aims to provide a seamless user experience for both users and admins, with intuitive UI components and flexible scheduling functionality.

## Features

### User-Specific Features
- **Login & Signup**: Simple user authentication using email.
- **Set Availability**: Users can specify their availability for specific days or the entire week.
- **Flexible Intervals**: Availability can be set in 30-minute or hourly intervals.
- **Manage Availability**: Users can add, update, or delete availability slots.
- **Visual Representation**: Availability is represented visually for easier interaction.

### Admin-Specific Features
- **View User Availability**: Admins can view all users' availability.
- **Schedule Sessions**: Admins can schedule sessions based on user availability, ensuring no conflicts.
- **Session Types**: Admins can create one-on-one or group sessions.
- **Conflict Detection**: The system checks for scheduling conflicts and prevents them.

### Session Management
- **View Scheduled Sessions**: Both users and admins can view upcoming scheduled sessions.
- **Modify & Notify**: Admins can reschedule or cancel sessions with automated notifications to affected users.

### UI/UX Design
- Clean and intuitive UI design using Bootstrap for responsiveness.
- Interactive components like date pickers and tables for ease of use.
- Responsive design compatible with desktop, tablet, and mobile devices.

## Technologies Used

### Frontend
- **React** with TypeScript
- **React-Bootstrap** for UI components
- **React-Router** for page navigation
- **DatePicker** for selecting availability time slots
- **Axios** for making API requests

### Backend
- **Node.js** with Express for creating RESTful APIs
- **MongoDB** as the database for storing user and availability data
- **Mongoose** for MongoDB object modeling
- **JWT** (JSON Web Tokens) for user authentication

## Getting Started

### Prerequisites
Ensure you have the following installed on your machine:
- **Node.js** (v12 or higher)
- **MongoDB** (either locally or using MongoDB Atlas)
- **npm** (v6 or higher)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/Dynamic-User-Availability-and-Event-Scheduling-System.git
    cd Dynamic-User-Availability-and-Event-Scheduling-System
    ```

2. Install dependencies for both frontend and backend:
    ```bash
    # For frontend
    cd frontend
    npm install

    # For backend
    cd ../backend
    npm install
    ```

3. Configure your environment variables by creating a `.env` file in the `backend` directory:
    ```bash
    PORT=5000
    MONGO_URI=your_mongo_db_connection_string
    JWT_SECRET=your_secret_key
    ```

### Running the Application

1. Start the backend server:
    ```bash
    cd backend
    npm run dev
    ```

2. Start the frontend development server:
    ```bash
    cd frontend
    npm start
    ```

3. Open your browser and navigate to `http://localhost:3000` to view the app.

## API Endpoints

### User Routes
- `POST /api/users/signup`: Sign up a new user.
- `POST /api/users/login`: Log in an existing user.

### Availability Routes
- `POST /api/availability`: Submit user availability.
- `GET /api/availability`: Get all availability data.

### Session Routes (Admin)
- `POST /api/sessions`: Schedule a new session.
- `GET /api/sessions`: Get all scheduled sessions.

## Screenshots

### 1. Home Page
![Home Page]("C:\Users\asus\Pictures\Screenshots\Screenshot 2024-09-08 131932.png")

### 2. Availability Form
![Availability Form](screenshots/availability-form.png)

### 3. Admin Dashboard
![Admin Dashboard](screenshots/admin-dashboard.png)

## Demo

- You can view a live demo of the application [here](https://drive.google.com/file/d/1J5O-AszqfXcaIpikd98WBet1LS3sdQM_/view?usp=sharing).

## Future Improvements
- Add email/SMS notifications for session updates.
- Improve the conflict detection algorithm.
- Provide more customization options for availability intervals.

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact
- **Author**: Abhishek Mishra
- **LinkedIn**: [Abhishek Mishra](https://www.linkedin.com/in/abhishek-mishra)
