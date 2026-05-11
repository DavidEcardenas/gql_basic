# GraphQL Fullstack Project

Proyecto Fullstack desarrollado con:

* GraphQL
* Apollo Server
* MongoDB
* Docker
* React
* TypeScript

El proyecto se encuentra dividido en:

* Backend GraphQL
* Frontend React
* Base de datos MongoDB

---

# Tecnologías usadas

## Backend

* Node.js
* Express
* Apollo Server
* GraphQL
* MongoDB
* TypeScript
* JWT

## Frontend

* React
* Apollo Client
* TypeScript
* Webpack

## Infraestructura

* Docker
* Docker Compose

---

# Estructura del proyecto

```bash
.
├── be_grahpql/
├── fe_test/
├── docker-compose.yml
├── .gitignore
└── README.md
```

---

# Requisitos

Tener instalado:

* Docker Desktop
* Node.js
* npm 

---

# Variables de entorno

## Backend (.env)

Crear un archivo `.env` dentro de:

```bash
be_grahpql/
```

Contenido:

```env
PORT=4000
MONGO_URI=mongodb://admin:secret@mongodb:27017
DB_NAME=invoicerdb
```

---

# Instalación de dependencias

## Backend

Entrar a la carpeta del backend:

```bash
cd be_grahpql
```

Instalar dependencias:

```bash
npm install
```

### Dependencias principales utilizadas

```bash
npm install express cors graphql apollo-server-express apollo-server-core mongodb dotenv jsonwebtoken axios
```

### Dependencias de TypeScript

```bash
npm install -D typescript ts-node nodemon @types/node @types/express @types/jsonwebtoken
```

---

## Frontend

Entrar a la carpeta del frontend:

```bash
cd fe_test
```

Instalar dependencias:

```bash
npm install
```

### Dependencias principales utilizadas

```bash
npm install react react-dom graphql @apollo/client axios styled-components react-router-dom
```

### Dependencias de desarrollo

```bash
npm install -D typescript webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript html-webpack-plugin
```

---

# Docker

## Levantar contenedores

Desde la raíz del proyecto ejecutar:

```bash
docker compose up --build -d
```

---

## Detener contenedores

```bash
docker compose down
```

---

## Reconstruir Docker después de cambios

Si se modifican:

* package.json
* Dockerfile
* dependencias
* resolvers
* configuración

ejecutar:

```bash
docker compose down
docker compose up --build -d
```

---

## Ver logs

```bash
docker compose logs -f
```

---

# Servicios

## Backend GraphQL

```bash
http://localhost:37111/graphql
```

## Frontend

```bash
http://localhost:37112
```

---

# Funcionalidades

## People

* Crear personas
* Actualizar personas
* Eliminar personas
* Consultar personas

## Employees

* Crear empleados
* Actualizar empleados
* Consultar empleados

## Skills

* Crear skills
* Actualizar skills
* Consultar skills

## Users

* Registro de usuarios
* Login con JWT
* Obtener usuario actual
* Obtener usuario por ID

---

# Aprendizajes

Proyecto académico desarrollado para práctica de:

* GraphQL
* Docker
* MongoDB
* React
* Apollo
