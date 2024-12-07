// apiResponse.js

class ApiResponse {
    constructor(statusCode, message, data = null, success = true, errors = []) {
      this.statusCode = statusCode;
      this.message = message;
      this.data = data;
      this.success = success;
      this.errors = errors;
    }
  
    // Helper method to send the response
    sendResponse(res) {
      return res.status(this.statusCode).json({
        success: this.success,
        message: this.message,
        data: this.data,
        errors: this.errors,
      });
    }
  }
  
  // Example predefined success responses
  const SuccessResponse = (message = "Request successful", data = null) => {
    return new ApiResponse(200, message, data, true);
  };
  
  const CreatedResponse = (message = "Resource created successfully", data = null) => {
    return new ApiResponse(201, message, data, true);
  };
  
  const NoContentResponse = (message = "No content", data = null) => {
    return new ApiResponse(204, message, data, true);
  };
  
  // Example predefined error responses
  const FailureResponse = (message = "Request failed", errors = []) => {
    return new ApiResponse(400, message, null, false, errors);
  };
  
  const NotFoundResponse = (message = "Resource not found", errors = []) => {
    return new ApiResponse(404, message, null, false, errors);
  };
  
  const InternalServerErrorResponse = (message = "Internal server error", errors = []) => {
    return new ApiResponse(500, message, null, false, errors);
  };
  
  // Exporting the class and predefined response functions
  export {
    ApiResponse,
    SuccessResponse,
    CreatedResponse,
    NoContentResponse,
    FailureResponse,
    NotFoundResponse,
    InternalServerErrorResponse,
  };
  