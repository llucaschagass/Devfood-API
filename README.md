# API de Restaurantes

Esta é uma API desenvolvida em Node.js para gerenciar restaurantes, criada durante um workshop de **Node.js** no evento **DEV Fest**, organizado pelo **Google Developer Group (GDG)**.

## Funcionalidades

A API permite realizar as operações básicas de CRUD (Criar, Ler, Atualizar e Deletar) em um banco de dados de restaurantes.

### Rotas da API

- **GET `/`**: Retorna uma lista de todos os restaurantes.
- **GET `/:id`**: Retorna um restaurante específico pelo `id`.
- **POST `/`**: Cria um novo restaurante.
- **PUT `/:id`**: Atualiza os dados de um restaurante existente.
- **DELETE `/:id`**: Remove um restaurante do banco de dados.

### Tecnologias Utilizadas

- Node.js
- Express
- Sequelize
- SQLite
