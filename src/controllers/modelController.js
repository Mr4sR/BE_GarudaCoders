class ModelController {
    constructor(tensorFlowService) {
        this.tensorFlowService = tensorFlowService;
    }

    async loadModel(request, h) {
        try {
            await this.tensorFlowService.loadModel();
            return h.response({ message: 'Model loaded successfully' }).code(200);
        } catch (error) {
            return h.response({ error: error.message }).code(500);
        }
    }

    async predict(request, h) {
        try {
            const data = request.payload;
            const file = data.file;
            if (!file) {
                return h.response({ error: 'No file uploaded' }).code(400);
            }
            const fileBuffer = file._data || file;
            const prediction = await this.tensorFlowService.runInference(fileBuffer);
            return h.response({ prediction }).code(200);
        } catch (error) {
            return h.response({ error: error.message }).code(500);
        }
    }
}

module.exports = ModelController;