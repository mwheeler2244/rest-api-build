# REST API with Next.js and JSONPlaceholder

This project is a REST API built using Next.js, leveraging the `next/server` module and integrating with the JSONPlaceholder API as a mock backend. The API allows users to perform CRUD operations on a collection of to-dos.

## Features

- **GET**: Retrieve all to-dos.
- **POST**: Add a new to-do.
- **PUT**: Update an existing to-do.
- **DELETE**: Remove a to-do.

## Endpoints

### GET `/api/todos`
Fetch all to-dos from the JSONPlaceholder API.

#### Response
- Returns an array of to-dos.

---

### POST `/api/todos`
Add a new to-do to the JSONPlaceholder API.

#### Request Body
```json
{
  "title": "Your new to-do"
}
