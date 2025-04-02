# Shopping Website Backend

This project is the backend for a fully functional shopping website built using Node.js, Express, and MySQL. It provides the necessary API endpoints to manage products, handle user requests, and interact with the database.

## Project Structure

```
backend
├── src
│   ├── controllers
│   │   └── productController.js
│   ├── models
│   │   └── productModel.js
│   ├── routes
│   │   └── productRoutes.js
│   ├── config
│   │   └── db.js
│   │   └── app.js
├── package.json
├── .env
└── README.md
```

## Features

- **RESTful API**: The backend exposes a RESTful API for managing products, including endpoints for fetching, adding, updating, and deleting products.
- **Database Integration**: Utilizes MySQL for data storage, with a schema designed to handle product information efficiently.
- **Environment Configuration**: Sensitive information such as database credentials is stored in a `.env` file for security.

## Setup Instructions

1. Clone the repository to your local machine.
2. Navigate to the `backend` directory.
3. Install the required dependencies by running:
   ```
   npm install
   ```
4. Create a `.env` file in the `backend` directory and add your database connection details:
   ```
   DB_HOST=your_database_host
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_NAME=your_database_name
   ```
5. Start the server by running:
   ```
   npm start
   ```
6. The API will be available at `http://localhost:5000` (or the port specified in your app).

## API Endpoints

- **GET /api/products**: Fetch all products.
- **POST /api/products**: Add a new product.
- **PUT /api/products/:id**: Update an existing product.
- **DELETE /api/products/:id**: Delete a product.

## License

This project is open-source and available for modification and distribution. Please refer to the individual components for licensing information related to specific libraries or frameworks used in this project.