export interface PredictionRequest {
    input: number[]; // Input data for the model
}

export interface PredictionResponse {
    output: number[]; // Output data from the model
}