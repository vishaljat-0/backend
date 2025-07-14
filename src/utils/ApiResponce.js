class ApiResponse {
  constructor(message = "Success", statusCode = 200, data = null) {
    this.message = message;
    this.statusCode = statusCode;
    this.data = data;
    this.success = statusCode < 400;  // true for 2xx or 3xx
  }
}

export default ApiResponse;
