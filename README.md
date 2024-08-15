# React Super Market Application

This is a simple React application that simulates a basic super market shopping experience. The application allows users to add products to a cart, adjust the quantity of each product, remove products from the cart, and view the total quantity and price of the items in the cart.

## Features

- **Add Products to Cart**: Users can browse a list of products and add them to their shopping cart.
- **Adjust Quantity**: Users can increase or decrease the quantity of items in their cart.
- **Remove Items from Cart**: If the quantity of an item is reduced to zero, it is automatically removed from the cart.
- **Calculate Total**: The application automatically calculates and displays the total quantity of products and the total price in the cart.

## Tools and Technologies

- **React**: A JavaScript library for building user interfaces.
- **useState Hook**: Manages the state of the cart and the total price within the application.
- **useEffect Hook**: Calculates the total price whenever the contents of the cart change.
- **JavaScript (ES6+)**: The application is built using modern JavaScript features.

## Getting Started

To get started with this project, clone the repository and install the necessary dependencies.

```bash
git clone https://github.com/PopovEva/react_useEffect_useState_market.git
cd react_useEffect_useState_market
npm install
```  

## Running the Application
To run the application locally, use the following command:
```bash
npm start 
```   

This will start the development server and open the application in your default browser at http://localhost:3000.

## Building for Production
To create an optimized production build, run:
``` npm run build ```

This command will bundle the application for production, creating optimized files in the build directory.  

## Code Overview

### State Management with `useState`

The application uses the `useState` hook to manage the state of the cart and the total price:

- **Cart State**: An array that holds the products currently in the cart.
- **Total State**: A number representing the total price of the items in the cart.

### Side Effects with `useEffect`

The `useEffect` hook is used to update the total price whenever the cart changes. It calculates the sum of the prices of all items in the cart and updates the total state accordingly.

```javascript
useEffect(() => {
    let temp = 0;
    cart.forEach((pro) => (temp += pro.price * pro.amount));
    settotal(temp);
}, [cart]);
```

### Product Management

The application allows adding products to the cart and adjusting their quantities using the `addToCart` function. This function checks whether a product is already in the cart and updates its quantity accordingly. If the quantity reaches zero, the product is removed from the cart.

## Repository

The source code for this project is hosted on GitHub: [react_useEffect_useState_market](https://github.com/PopovEva/react_useEffect_useState_market)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.


