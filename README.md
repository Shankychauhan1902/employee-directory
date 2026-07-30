# Employee Directory

A full-stack Employee Directory web application built using the MERN stack. The application allows users to securely manage employee records with authentication and CRUD operations.

## Features

- User Registration
- User Login with JWT Authentication
- Password Hashing using bcrypt
- Add Employee
- View Employees
- Update Employee
- Delete Employee
- Protected Routes
- Responsive UI using Bootstrap

## Tech Stack

### Frontend

- React
- React Router
- Axios
- Context API
- Bootstrap

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcryptjs

## Project Structure

```
employee-directory
│
├── server
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── config
│   └── server.js
│
├── src
│   ├── components
│   ├── context
│   ├── pages
│   ├── services
│   └── App.jsx
```

## Installation

### Clone the repository

```bash
git clone <repository-url>
```

### Install frontend dependencies

```bash
npm install
```

### Install backend dependencies

```bash
cd server
npm install
```

### Environment Variables

Create a `.env` file inside the `server` folder.

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Start Backend

```bash
cd server
npm run dev
```

### Start Frontend

```bash
npm run dev
```

## API Endpoints

### Authentication

- POST `/api/auth/register`
- POST `/api/auth/login`

### Employees

- GET `/api/employees`
- GET `/api/employees/:id`
- POST `/api/employees`
- PUT `/api/employees/:id`
- DELETE `/api/employees/:id`

## Future Improvements

- Search Employees
- Pagination
- Profile Management
- Role-Based Authorization
- Image Upload
- Dark Mode

## Author

**Sankit Chauhan**
