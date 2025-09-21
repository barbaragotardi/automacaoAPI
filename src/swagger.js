module.exports = {
  openapi: '3.0.0',
  info: {
    title: 'API de Conversão de Temperatura',
    version: '1.0.0',
    description: 'API para registro, login e conversão de temperaturas entre Celsius, Fahrenheit e Kelvin.'
  },
  paths: {
    '/api/users/register': {
      post: {
        summary: 'Registrar usuário',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  name: { type: 'string' },
                  email: { type: 'string' },
                  password: { type: 'string' }
                },
                required: ['name', 'email', 'password']
              }
            }
          }
        },
        responses: {
          201: { description: 'Usuário registrado' },
          400: { description: 'Email já cadastrado' }
        }
      }
    },
    '/api/users/login': {
      post: {
        summary: 'Login do usuário',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  email: { type: 'string' },
                  password: { type: 'string' }
                },
                required: ['email', 'password']
              }
            }
          }
        },
        responses: {
          200: { description: 'Login bem-sucedido' },
          401: { description: 'Credenciais inválidas' }
        }
      }
    },
    '/api/temperature/celsiustofahrenheit/{celsius}': {
      get: {
        summary: 'Converter Celsius para Fahrenheit',
        security: [{ bearerAuth: [] }],
        parameters: [
          {
            name: 'celsius',
            in: 'path',
            required: true,
            schema: { type: 'number' }
          }
        ],
        responses: {
          200: { description: 'Conversão realizada' },
          401: { description: 'Token não fornecido' },
          403: { description: 'Token inválido' }
        }
      }
    },
    '/api/temperature/fahrenheittocelsius/{fahrenheit}': {
      get: {
        summary: 'Converter Fahrenheit para Celsius',
        security: [{ bearerAuth: [] }],
        parameters: [
          {
            name: 'fahrenheit',
            in: 'path',
            required: true,
            schema: { type: 'number' }
          }
        ],
        responses: {
          200: { description: 'Conversão realizada' },
          401: { description: 'Token não fornecido' },
          403: { description: 'Token inválido' }
        }
      }
    },
    '/api/temperature/kelvintocelsius/{kelvin}': {
      get: {
        summary: 'Converter Kelvin para Celsius',
        security: [{ bearerAuth: [] }],
        parameters: [
          {
            name: 'kelvin',
            in: 'path',
            required: true,
            schema: { type: 'number' }
          }
        ],
        responses: {
          200: { description: 'Conversão realizada' },
          401: { description: 'Token não fornecido' },
          403: { description: 'Token inválido' }
        }
      }
    },
    '/api/temperature/celsiustokelvin/{celsius}': {
      get: {
        summary: 'Converter Celsius para Kelvin',
        security: [{ bearerAuth: [] }],
        parameters: [
          {
            name: 'celsius',
            in: 'path',
            required: true,
            schema: { type: 'number' }
          }
        ],
        responses: {
          200: { description: 'Conversão realizada' },
          401: { description: 'Token não fornecido' },
          403: { description: 'Token inválido' }
        }
      }
    },
    '/api/temperature/fahrenheittokelvin/{fahrenheit}': {
      get: {
        summary: 'Converter Fahrenheit para Kelvin',
        security: [{ bearerAuth: [] }],
        parameters: [
          {
            name: 'fahrenheit',
            in: 'path',
            required: true,
            schema: { type: 'number' }
          }
        ],
        responses: {
          200: { description: 'Conversão realizada' },
          401: { description: 'Token não fornecido' },
          403: { description: 'Token inválido' }
        }
      }
    },
    '/api/temperature/kelvintofahrenheit/{kelvin}': {
      get: {
        summary: 'Converter Kelvin para Fahrenheit',
        security: [{ bearerAuth: [] }],
        parameters: [
          {
            name: 'kelvin',
            in: 'path',
            required: true,
            schema: { type: 'number' }
          }
        ],
        responses: {
          200: { description: 'Conversão realizada' },
          401: { description: 'Token não fornecido' },
          403: { description: 'Token inválido' }
        }
      }
    }
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT'
      }
    }
  }
};