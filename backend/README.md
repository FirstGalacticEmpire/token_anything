# Physical nft creator
Backend section of our application. 
Main tools that was used:
- Django
- Web3
- Celery (for task scheduling)
- Postgres

Main parts of the api: 
- Authentication (register, login, user information)
- Token Models (inormation about our tokens)
- Request (creating tokens by end user)
- Connector (solidity connector)

## Prerequisites
* **[Python: 3.8.0](https://www.python.org/downloads/release/python-380/)**
* **[Postman](https://www.postman.com/downloads/)** application for making requests. (Additional, not required)

# Token Anything Official Github Repository 
Created by group of students, find more about us here: [LynxSense](https://www.lynxsense.com/)


### Repository structure

The repository is divided into two main folders:
* frontend - where you can find source code of our React App
  * We have chosen React because of its flexibility and vast blockchain and web3 support.
* backend - where source code of backend divided into microservices can be found
  * We have chosen Django, because it supports high complexity of services, and as team we are most acquainted with Python.

### Used technologies, frameworks, libraries:

#### Backend:
* Django 
* Cekery for task scheduling
* SQL lite (Planned switch to Postgres)
* Web3 library for Python - connector with Web3
* eth_account library for wallet creation
#### Frontend:
* React with TypeScript
* React Query, Axios, Toastify
* Ant Design  + Sass for styling blockchain
* MetaMask for web3 connection
#### Deep learning microservice for price determination.
* To determine the price, we have created a model based on ResNet architecture.
* We have used the Pytorch library for model development.
* The source code of the microservice can be found in the separate repository:
* [Item Price Prediction Repository](https://github.com/KonradSzafer/items-price-prediction )
