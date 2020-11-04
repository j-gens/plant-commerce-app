# Plantology
## Botanical Commerce App

* [Overview](https://github.com/j-gens/plant-commerce-app#overview)
* [Technologies](https://github.com/j-gens/plant-commerce-app#technologies)
* [Getting Started](https://github.com/j-gens/plant-commerce-app#getting-started)
* [License](https://github.com/j-gens/plant-commerce-app#license)

![alt house plants](https://j-gens-portfolio.s3-us-west-1.amazonaws.com/plantology-gen.jpg)

## Overview

Your destination for house plants, cacti, succulents and more!

Check out the demo version of this app: [Plantology](http://ec2-54-151-26-136.us-west-1.compute.amazonaws.com)

#### My Contribution

* Designed and built React front end with Redux for state management; improved app performance by implementing route-based code-splitting and lazy loading techniques
* Utilized Google Firebase for authentication, Cloud Firestore for data storage, and integrated with Stripe API for payment processing

## Technologies

* JavaScript
* React
* Redux
* React-Router
* Webpack
* Babel
* HTML5 / CSS
* Node/Express
* Firebase
* Stripe
* AWS - EC2 & S3

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

#### Installing

1. Clone the repository onto your local machine
```
$ git clone https://github.com/j-gens/plant-commerce-app.git
```
2. Change directories into the plant-commerce-app root directory
```
cd plant-commerce-app
```
3. Install the dependencies in a local node_modules folder
```
npm install
```
4. Replace the public keys in [firebase.utils.js](https://github.com/j-gens/plant-commerce-app/blob/master/src/firebase/firebase.utils.js) and [stripe-button.component.jsx](https://github.com/j-gens/plant-commerce-app/blob/master/src/components/stripe-button/stripe-button.component.jsx)

5. Assemble the bundle within the public folder
```
npm run-script build
```
6. Start the server on your local machine
```
npm start
```
7. View in browser by going to [http://localhost:3100](http://localhost:3100)

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/j-gens/plant-commerce-app/blob/master/LICENSE) file for details
