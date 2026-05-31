# Student Management API

A simple REST API built using Node.js and Express.js for managing student records.

## Features

* Get all students
* Add a new student
* Delete a student
* Input validation
* JSON request and response handling

## Technologies Used

* Node.js
* Express.js
* Thunder Client

## Installation

1. Clone the repository
2. Install dependencies

```bash
npm install
```

3. Start the server

```bash
node server.js
```

Server runs on:

```text
http://localhost:5000
```

## API Endpoints

### Get All Students

```http
GET /students
```

### Add Student

```http
POST /students
```

Request Body:

```json
{
  "name": "Yasodha",
  "age": 20,
  "course": "CSD"
}
```

### Delete Student

```http
DELETE /students/:id
```

## Author

Yasodha Rani
