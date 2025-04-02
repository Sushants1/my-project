# Shopping Website

This project is a fully functional shopping website built using Node.js for the backend, React.js for the frontend, and MySQL as the database. It features a clean and responsive design, allowing users to browse products, add them to their cart, and proceed to checkout.

## Project Structure

```
shopping-website
├── backend
│   ├── src
│   │   ├── controllers
│   │   │   └── productController.js
│   │   ├── models
│   │   │   └── productModel.js
│   │   ├── routes
│   │   │   └── productRoutes.js
│   │   ├── config
│   │   │   └── db.js
│   │   └── app.js
│   ├── package.json
│   ├── .env
│   └── README.md
├── frontend
│   ├── public
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src
│   │   ├── components
│   │   │   ├── Header.js
│   │   │   ├── Footer.js
│   │   │   └── ProductCard.js
│   │   ├── pages
│   │   │   ├── HomePage.js
│   │   │   ├── ProductPage.js
│   │   │   ├── CartPage.js
│   │   │   └── CheckoutPage.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles
│   │       └── styles.css
│   ├── package.json
│   └── README.md
├── database
│   └── schema.sql
├── README.md
└── .gitignore
```

## Features

- **Responsive Design**: The website is designed to work on various screen sizes, ensuring a seamless experience on mobile and desktop devices.
- **Product Listings**: Users can view a list of products on the homepage, complete with images, titles, and prices.
- **Product Details**: Each product has a dedicated page with detailed information, including descriptions and purchase options.
- **Shopping Cart**: Users can add products to their cart, view their selections, and adjust quantities.
- **Checkout Process**: A straightforward checkout process allows users to enter their information and complete their purchases.

## Setup Instructions

### Backend

1. Navigate to the `backend` directory.
2. Install dependencies using `npm install`.
3. Create a `.env` file with your database connection details.
4. Run the server using `node src/app.js`.

### Frontend

1. Navigate to the `frontend` directory.
2. Install dependencies using `npm install`.
3. Start the React application using `npm start`.

## Usage Guidelines

- Ensure that all assets are correctly linked in the HTML files.
- Use the provided utility functions in the backend controllers to assist with common tasks.
- Follow best practices for HTML, CSS, and JavaScript to maintain code quality.

## License

This project is open-source and available for modification and distribution. Please refer to the individual component README files for licensing information related to specific libraries or assets used in this project.