const ModelController = require('../controllers/modelController');
const TensorFlowService = require('../services/tensorflowService');

const tensorFlowService = new TensorFlowService();
const modelController = new ModelController(tensorFlowService);

const setModelRoutes = (server) => {
    server.route([
        {
            method: 'POST',
            path: '/predict',
            options: {
                payload: {
                    output: 'stream',
                    parse: true,
                    allow: 'multipart/form-data',
                    maxBytes: 10485760 // 10MB
                }
            },
            handler: modelController.predict.bind(modelController),
        },
        {
            method: 'GET',
            path: '/load',
            handler: modelController.loadModel.bind(modelController),
        }
    ]);
};

module.exports = { setModelRoutes };