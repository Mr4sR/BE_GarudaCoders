# Hapi.js TensorFlow.js API

This project is a simple API built using Hapi.js that integrates with a TensorFlow.js machine learning model. It provides endpoints for loading the model and making predictions.

## Project Structure

```
hapi-tfjs-api
├── src
│   ├── server.js            # Entry point of the application
│   ├── routes
│   │   └── model.js         # API routes for the TensorFlow model
│   ├── controllers
│   │   └── modelController.js # Controller for handling model requests
│   ├── services
│   │   └── tensorflowService.js # Service for TensorFlow model interactions
│   └── types
│       └── index.d.ts       # TypeScript types and interfaces
├── package.json              # NPM configuration file
└── README.md                 # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd hapi-tfjs-api
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Usage

To start the server, run:
```
node src/server.js
```

The server will start and listen for incoming requests.

## API Endpoints

### Load Model

- **Endpoint:** `POST /model/load`
- **Description:** Loads the TensorFlow.js model.
- **Request Body:** 
  ```json
  {
    "modelPath": "path/to/model.json"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Model loaded successfully"
  }
  ```

### Predict

- **Endpoint:** `POST /model/predict`
- **Description:** Makes a prediction using the loaded model.
- **Request Body:**
  ```json
  {
    "inputData": [1, 2, 3, 4]
  }
  ```
- **Response:**
  ```json
  {
    "prediction": [0.5, 0.2, 0.3]
  }
  ```

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.