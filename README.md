# RESTful API with Express.js and MongoDB

This is a basic API made with Express.js and MongoDB for managing posts. Users can do CRUD operations on posts using HTTP requests.

## Technologies Used

- **Node.js**
- **MongoDB**

## Features

- `POST --> /posts`  
  Create a new post with an optional image

- `GET --> /posts`  
  Get all posts

- `GET --> /posts/:id`  
  Get specific post by id

- `PUT --> /posts`  
  Update existing post

- `DELETE --> /posts`  
  Delete all posts

- `DELETE --> /posts/:id`  
  Delete specific post by id

### Image Endpoint

- `GET --> /static/fileName`  
  Retrieve image by fileName (uuid+.jpg)

## Installation

1. Clone the repository:
   - git clone https://github.com/VizitiuVitalie/RESTful-API-MongoDB.git
   
2. Install dependencies:
   - cd RESTful-API-MongoDB
   - npm install
   
3. Configure MongoDB:
   - Create a MongoDB Atlas account or set up a local MongoDB server.
   - Update the `DB_URL` variable in `index.js` with your MongoDB connection string.

4. Start the server:
   - npm start
   - npm run dev (with nodemon usage)

## Usage

- Use an HTTP client like Postman or cURL to send requests to the API endpoints.

