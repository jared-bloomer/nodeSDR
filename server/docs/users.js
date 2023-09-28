const authenticate = {
    tags: ["users"],
    description: "Authenticate to get a JSON Web Token",
    operationId: "authenticate",
    security: [
      {
        bearerAuth: []
      }
    ],
    parameters: [
      {
        username: 'username',
        in: 'query',
        description: 'Username to login as',
        required: true,
        type: 'string',
      },
      {
        password: 'username',
        in: 'query',
        description: 'Password to login with',
        required: true,
        schema:{
          type: 'string'
        },
      }
    ],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            type: "object",
              properties: {
                username: {
                  type: "string",
                  example: "john"
                },
                password: {
                  type: "string",
                  example: "442893aba778ab321dc151d9b1ad98c64ed56c07f8cbaed"
                }
            }
          }
        }
      },
      required: true
    },
    responses: {
      "200": {
        description: "Authenticated successfully!",
        content: {
          "application/json": {
            schema: {
              type: "object",
                properties: {
                    id: {
                        type: "string",
                        example: "1"
                    },
                    username: {
                        type: "string",
                        example: "jdoe"
                    },
                    firstname: { 
                        type: "string",
                        example: "john"
                    },
                    lastname: { 
                        type: "string",
                        example: "doe"
                    },
                    role: { 
                        type: "string",
                        example: "1"
                    },
                    created_at: { 
                        type: "string",
                        example: "2023-09-07 00:43:55"
                    },
                    updated_at: {
                        type: "string",
                        example: "2023-09-07 00:43:55"
                    },
                    token: { 
                        type: "string",
                        example: "eyJhbGciOiJIUa1NiIsInR5c.I6IkpXVCJ9.eyiyb2xlIjoxLCJpYXQiOjE2OTQ0NzcyOTYsImV4cCI6MTY5NTA4MjA5Nn0.TUlIcwJ_Lth1bwR9ErDLHnNQK3_yjSP_C2luJJ0yptY"
                    }
                }
              }
            }
          }
        }
      },
      "500": {
        description: "Internal Server Error",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                message: {
                  type: "string",
                  example: "Internal Server Error"
                }
              }
            }
          }
        }
      },
      "403": {
        description: "Username or password is incorrect",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                message: {
                  type: "string",
                  example: "Username or password is incorrect"
                }
              }
            }
          }
        }
      }
    }

  /*
router.get('/', getAll);
router.post('/add', requireAdmin, add);
router.post('/delete', requireAdmin, userDelete);
router.post('/list', requireAdmin, userList);
router.post('/changePassword', requireAdmin, changePassword);
router.post('/updateRole', requireAdmin, updateUserRole);
  */
  
  module.exports = { authenticate }
  