# Blog CRUD Backend

A beginner-friendly Blog CRUD Backend built with Node.js, Express.js, MongoDB, and Mongoose.

This project was developed as a backend development assignment to practice building REST APIs, connecting a database, defining data models, handling errors, and testing APIs with Postman.

## 📌 Project Overview

This backend allows users to create blog posts, retrieve all blogs, retrieve a specific blog by its ID, and delete a blog from the MongoDB database.

Each blog contains three fields:

- `title` — The title of the blog.
- `description` — The description or content of the blog.
- `author` — The name of the blog's author.

## 🛠️ Technologies Used

- **Node.js** — JavaScript runtime environment used to run the backend.
- **Express.js** — Framework used to create the server and API routes.
- **MongoDB Atlas** — Cloud database used to store blog data.
- **Mongoose** — ODM library used to define schemas, models, and interact with MongoDB.
- **dotenv** — Loads environment variables from the `.env` file.
- **Nodemon** — Development tool that automatically restarts the server when files change.
- **Postman** — Used to send API requests and test responses.

## ✨ Features

- Connects to MongoDB Atlas.
- Defines a Blog schema and model using Mongoose.
- Creates a new blog.
- Retrieves all blogs.
- Retrieves a specific blog by ID.
- Deletes a blog by ID.
- Validates required fields.
- Handles invalid blog IDs and missing resources.
- Returns responses in JSON format.

## 📁 Project Structure

```text
blog-crud-backend/
├── config/
│   └── db.js
├── models/
│   └── blog.js
├── node_modules/
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

### File Responsibilities

- `server.js` — Configures the Express application, middleware, API routes, and server startup.
- `config/db.js` — Establishes the connection to MongoDB Atlas.
- `models/Blog.js` — Defines the Blog schema and Mongoose model.
- `.env` — Stores environment variables such as the server port and database connection string.
- `.gitignore` — Prevents sensitive and unnecessary files from being tracked by Git.
- `package.json` — Contains project metadata, scripts, and dependency information.
- `package-lock.json` — Records the resolved dependency versions.

## ⚙️ Installation and Setup

### Prerequisites

Make sure you have the following installed or configured:

- Node.js and npm
- A MongoDB Atlas account and database deployment
- Postman

### 1. Clone the Repository

```bash
git clone YOUR_REPOSITORY_URL
cd blog-crud-backend
```

Replace `YOUR_REPOSITORY_URL` with your actual GitHub repository URL.

Alternatively, download the project and open its folder in VS Code.

### 2. Install Dependencies

Run the following command in the project directory:

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project's root directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Replace `your_mongodb_connection_string` with your MongoDB Atlas connection string.

Make sure your MongoDB database user and network access settings allow the application to connect.

**Security note:** Never commit your actual `.env` file, MongoDB password, or connection string to GitHub.

### 4. Start the Server

Run:

```bash
node server.js
```

If the database connection succeeds, the terminal should display a MongoDB connection message followed by the server URL.

```text
MongoDB Connected: ...
Server is running on http://localhost:5000
```

The exact database host in the connection message will vary.

### 5. Access the Server

Base URL:

```text
http://localhost:5000
```

The root route displays a message confirming that the backend is running.

## 🔗 API Documentation

Base URL:

```text
http://localhost:5000
```

### 1. Create a Blog

**Endpoint:** `POST /blogs`

Creates a new blog and saves it to MongoDB.

**Request body — JSON:**

```json
{
  "title": "My First Blog",
  "description": "This is my first blog using Node.js, Express, and MongoDB.",
  "author": "Your Name"
}
```

**Expected success status:** `201 Created`

The response includes a success message and the saved blog document. MongoDB generates a unique `_id` for the document.

### 2. Get All Blogs

**Endpoint:** `GET /blogs`

Retrieves all blogs stored in the database.

**Expected success status:** `200 OK`

The response contains the total number of blogs and an array of blog documents.

If no blogs exist, the endpoint returns a count of `0` and an empty array.

### 3. Get a Single Blog

**Endpoint:** `GET /blogs/:id`

Retrieves a specific blog using its MongoDB document ID.

**Example:**

```text
GET http://localhost:5000/blogs/YOUR_BLOG_ID
```

Replace `YOUR_BLOG_ID` with the actual `_id` of an existing blog.

**Possible responses:**

- `200 OK` — The blog was found.
- `400 Bad Request` — The supplied ID has an invalid format.
- `404 Not Found` — No blog exists with the supplied ID.

### 4. Delete a Blog

**Endpoint:** `DELETE /blogs/:id`

Deletes a specific blog using its MongoDB document ID.

**Example:**

```text
DELETE http://localhost:5000/blogs/YOUR_BLOG_ID
```

**Possible responses:**

- `200 OK` — The blog was deleted successfully.
- `400 Bad Request` — The supplied ID has an invalid format.
- `404 Not Found` — No blog exists with the supplied ID.

After deletion, the blog should no longer appear in the list returned by `GET /blogs`.

## 🧪 Testing with Postman

All four required API endpoints were tested using Postman.

| HTTP Method | Endpoint | Expected Success Status |
|---|---|---|
| POST | `/blogs` | `201 Created` |
| GET | `/blogs` | `200 OK` |
| GET | `/blogs/:id` | `200 OK` |
| DELETE | `/blogs/:id` | `200 OK` |

Additional test cases included:

- Attempting to create a blog without the required `author` field.
- Retrieving a blog using its actual MongoDB ID.
- Sending an invalid ID format.
- Requesting a blog that does not exist.
- Verifying that a deleted blog no longer appears in the blog list.

## 📚 What I Learned

This project helped me understand and practice several important backend development concepts.

### 1. Node.js and npm

- Running JavaScript outside the browser using Node.js.
- Initializing a project with `npm init -y`.
- Installing packages using npm.
- Understanding the roles of `package.json` and `package-lock.json`.
- Importing and exporting modules using `require()` and `module.exports`.

### 2. Express.js

- Creating an Express application.
- Starting a server with `app.listen()`.
- Creating API routes using HTTP methods.
- Understanding `req` and `res`.
- Reading request data using `req.body`.
- Extracting URL parameters using `req.params`.
- Using `express.json()` middleware to parse JSON request bodies.
- Returning JSON responses and appropriate HTTP status codes.

### 3. MongoDB and Mongoose

- Connecting a Node.js application to MongoDB Atlas.
- Loading database configuration through environment variables.
- Creating a Mongoose schema and model.
- Defining fields with `type`, `required`, and `trim`.
- Creating and saving documents using `new Blog()` and `.save()`.
- Retrieving documents using `Blog.find()` and `Blog.findById()`.
- Deleting documents using `Blog.findByIdAndDelete()`.
- Performing asynchronous database operations with `async/await`.
- Handling database and validation errors using `try/catch`.

### 4. REST APIs and Postman

- Understanding how HTTP requests and responses work.
- Using POST, GET, and DELETE methods.
- Sending JSON data through Postman.
- Testing API endpoints independently.
- Understanding the difference between `200`, `201`, `400`, `404`, and `500` responses.
- Verifying that API operations correctly affect the database.

### 5. Debugging and Troubleshooting

- Reading error messages in the terminal.
- Identifying module import/export problems.
- Troubleshooting MongoDB DNS connection issues.
- Restarting the server after making code changes.
- Distinguishing database errors from routing and validation errors.

## 🧰 Problems Faced and Solutions

During development, I encountered several problems. Troubleshooting them helped me better understand how a Node.js backend works.

### 1. Invalid npm Project Name

**Problem:** Running `npm init -y` resulted in an `Invalid name` error because the original folder name contained spaces and a special dash character.

**Solution:** I renamed the folder to `blog-crud-backend` and ran `npm init -y` again.

**What I learned:** npm package names should follow valid naming conventions. Simple, lowercase folder names with hyphens help avoid unnecessary setup problems.

### 2. `connectDB is not a function`

**Problem:** The server produced the following error:

```text
TypeError: connectDB is not a function
```

**Solution:** I checked the database connection module and corrected the export/import relationship.

The database module exports the function:

```javascript
module.exports = connectDB;
```

The server imports it using:

```javascript
const connectDB = require("./config/db");
```

**What I learned:** The values exported from a module must match the way they are imported into another file.

### 3. MongoDB DNS Connection Error

**Problem:** The application initially failed to connect to MongoDB and displayed:

```text
querySrv ECONNREFUSED
_mongodb._tcp.assignment.yzsezaa.mongodb.net
```

The Windows `nslookup` command successfully returned MongoDB SRV records, but Node.js failed when attempting to resolve the same records.

**Solution:** I tested DNS resolution independently and upgraded Node.js from `v24.18.0` to `v24.21.0`. After the update, the MongoDB connection succeeded.

**What I learned:** Database connection problems can involve DNS resolution and runtime issues, not just database credentials or application code.

### 4. `404 Not Found` When Retrieving a Blog by ID

**Problem:** After adding the `GET /blogs/:id` route, requests initially returned `404 Not Found`.

**Solution:** I stopped and restarted the server, then tested the route using the actual `_id` returned by MongoDB. The route worked correctly.

**What I learned:** When running the application with `node server.js`, I generally need to restart the server manually after adding or changing routes.

### 5. Blog Creation Without an Author

**Problem:** A blog could not be created when the `author` field was omitted.

**Solution:** I checked the Mongoose schema and confirmed that `author` was configured with `required: true`.

**What I learned:** Mongoose schema validation can enforce required fields and prevent documents from being saved when required information is missing.

### 6. Nodemon Vulnerability Warning

**Problem:** npm displayed a vulnerability warning during package installation, which raised concerns about dependency security.

**Solution:** I learned to treat dependency security warnings separately from runtime errors, review the reported packages, and avoid blindly running commands such as `npm audit fix --force`.

**What I learned:** Dependency warnings should be investigated carefully because forced updates can introduce breaking changes.

## 🔄 How the Backend Works

The application follows this general request flow:

```text
Postman
   |
   | HTTP Request
   v
Express.js Route
   |
   | Read and validate request data
   v
Mongoose Model
   |
   | Perform database operation
   v
MongoDB Atlas
   |
   | Return query result
   v
Express.js Response
   |
   v
Postman
```

For example, when a `POST /blogs` request arrives:

1. Express receives the HTTP request.
2. The `express.json()` middleware parses the JSON request body.
3. The route extracts the `title`, `description`, and `author` fields.
4. The Mongoose model creates a new Blog document.
5. The `.save()` method stores the document in MongoDB.
6. The API returns a JSON response with the saved document and a `201 Created` status.

The other endpoints use Mongoose methods to retrieve or delete documents from the database.

## 🚧 Scope and Limitations

This project implements the requirements specified in the assignment.

The current features include creating, reading, and deleting blogs. An update operation using `PUT` or `PATCH` was not added because it was not part of the specified requirements.

The project is intended for learning and practice. It does not currently include authentication, authorization, pagination, advanced input sanitization, automated tests, or production deployment configuration.

## 🎯 Conclusion

Through this assignment, I gained practical experience building a REST API backend with Node.js, Express.js, MongoDB, and Mongoose.

I practiced database connectivity, schema and model creation, CRUD operations, API testing with Postman, error handling, module management, and debugging real development issues.

**Project Status:** Completed

**Author:** Sultan