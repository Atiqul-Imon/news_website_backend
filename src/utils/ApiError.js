// apiError.js

class ApiError extends Error {
  constructor(statusCode, message, errors = []) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.errors = errors;
    this.success = false; // Indicates the response represents an error

    // Captures the stack trace for debugging
    Error.captureStackTrace(this, this.constructor);
  }
}

// Example usage: predefined errors for common HTTP responses
const BadRequest = (message = "Bad Request", errors = []) =>
  new ApiError(400, message, errors);

const Unauthorized = (message = "Unauthorized", errors = []) =>
  new ApiError(401, message, errors);

const Forbidden = (message = "Forbidden", errors = []) =>
  new ApiError(403, message, errors);

const NotFound = (message = "Not Found", errors = []) =>
  new ApiError(404, message, errors);

const InternalServerError = (message = "Internal Server Error", errors = []) =>
  new ApiError(500, message, errors);

// Exporting the custom error class and helper functions
export {
  ApiError,
  BadRequest,
  Unauthorized,
  Forbidden,
  NotFound,
  InternalServerError,
};
