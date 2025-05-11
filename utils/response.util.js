const Response = {
  successResponse: (response, data = {}, message = "Successful Request") => {
    return response.status(200).json({
      status: 200,
      success: true,
      message,
      data,
    });
  },

  badRequest: (response, data = {}, message = "Bad Request") => {
    return response.status(400).json({
      status: 400,
      success: false,
      message,
      data,
    });
  },

  notFound: (response, data = {}, message = "Not Found") => {
    return response.status(404).json({
      status: 404,
      success: false,
      message,
      data,
    });
  },

  internalServerError: (
    response,
    data = {},
    message = "Internal Server Error"
  ) => {
    return response.status(500).json({
      status: 500,
      success: false,
      message,
      data,
    });
  },
};
