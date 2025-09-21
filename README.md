# API de Conversão de Temperatura

Esta API permite registrar e autenticar usuários, além de realizar conversões de temperatura entre Celsius, Fahrenheit e Kelvin.

## Funcionalidades

- Registro de usuário (`/api/users/register`)
- Login de usuário (`/api/users/login`)
- Conversão de temperaturas (requer autenticação JWT):
  - Celsius para Fahrenheit
  - Fahrenheit para Celsius
  - Kelvin para Celsius
  - Celsius para Kelvin
  - Fahrenheit para Kelvin
  - Kelvin para Fahrenheit

## Autenticação

As rotas de conversão exigem um token JWT no header `Authorization` no formato:  
`Bearer <seu_token>`

## Rotas Principais

- **POST** `/api/users/register`  
  Registra um novo usuário.  
  Corpo: `{ "name": "Nome", "email": "email@exemplo.com", "password": "senha" }`

- **POST** `/api/users/login`  
  Realiza login e retorna o token JWT.  
  Corpo: `{ "email": "email@exemplo.com", "password": "senha" }`

- **GET** `/api/temperature/celsiustofahrenheit/{celsius}`  
  Converte Celsius para Fahrenheit (autenticado).

- **GET** `/api/temperature/fahrenheittocelsius/{fahrenheit}`  
  Converte Fahrenheit para Celsius (autenticado).

- **GET** `/api/temperature/kelvintocelsius/{kelvin}`  
  Converte Kelvin para Celsius (autenticado).

- **GET** `/api/temperature/celsiustokelvin/{celsius}`  
  Converte Celsius para Kelvin (autenticado).

- **GET** `/api/temperature/fahrenheittokelvin/{fahrenheit}`  
  Converte Fahrenheit para Kelvin (autenticado).

- **GET** `/api/temperature/kelvintofahrenheit/{kelvin}`  
  Converte Kelvin para Fahrenheit (autenticado).

## Documentação Interativa

Acesse a documentação Swagger em:  
`/api-docs`
