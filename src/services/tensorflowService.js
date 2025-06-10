const tf = require('@tensorflow/tfjs-node');

class TensorFlowService {
    constructor() {
        this.model = null;
    }

    async loadModel(modelPath = 'src/diagnoskin_tfjs_model/model.json') {
        this.model = await tf.loadLayersModel('file://' + modelPath);
    }

    async runInference(imageBuffer) {
        if (!this.model) {
            throw new Error('Model is not loaded. Please load the model before inference.');
        }
        // Decode image buffer to tensor
        let imageTensor = tf.node.decodeImage(imageBuffer, 3); // shape: [height, width, 3]
        imageTensor = imageTensor.resizeBilinear([224, 224]); // shape: [224, 224, 3]
        imageTensor = imageTensor.expandDims(0); // shape: [1, 224, 224, 3]
        imageTensor = imageTensor.toFloat().div(tf.scalar(255)); // normalize if needed
        const prediction = this.model.predict(imageTensor);
        const result = await prediction.array();
        return result;
    }
}

module.exports = TensorFlowService;