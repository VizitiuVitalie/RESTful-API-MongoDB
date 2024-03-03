# REST API with Express.js and MongoDB

This is a basic API made with Express.js and MongoDB for managing posts. Users can do CRUD operations on posts using HTTP requests.

## Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **Express-fileupload**
- **uuid**
- **fs**
- **path**

## Features

- **Create Post**: Users can create a new post by sending a POST request with post data and an optional image.
- **Read Post**: Users can view all posts or a specific post by sending GET requests.
- **Update Post**: Users can update an existing post by sending a PUT request with the updated post data.
- **Delete Post**: Users can delete all posts or a specific post by sending a DELETE request with the post ID.

## Installation

1. Clone the repository:
   git clone https://github.com/VitaliyV444/RESTfull-API.git
   
2. Install dependencies:
   - cd RESTfull-API
   - npm install
   
3. Configure MongoDB:
   - Create a MongoDB Atlas account or set up a local MongoDB server.
   - Update the `DB_URL` variable in `index.js` with your MongoDB connection string.

4. Start the server:
   - npm start
   - npm run dev (with nodemon usage)

## Usage

- Ensure the server is running.
- Use an HTTP client like Postman or cURL to send requests to the API endpoints.

