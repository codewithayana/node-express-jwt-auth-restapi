# node-express-jwt-auth-restapi

A secure REST APIs built using Node.js, Express, and MongoDB with JWT authentication, role-based access, and CRUD operations for Users and Products.

<div>
  <img src="https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/-Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB + Mongoose" />
  <img src="https://img.shields.io/badge/-JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JWT (Authentication)" />
  <img src="https://img.shields.io/badge/-bcryptjs-003366?style=for-the-badge&logo=security&logoColor=white" alt="bcryptjs" />
  <img src="https://img.shields.io/badge/-dotenv-009639?style=for-the-badge&logo=dotenv&logoColor=white" alt="dotenv" />
  <img src="https://img.shields.io/badge/-Joi-FFB703?style=for-the-badge&logo=javascript&logoColor=black" alt="Joi Validation" />
  <a href="https://node-mongoose-jwt-apis.onrender.com/api-docs" target="_blank">
    <img src="https://img.shields.io/badge/-Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black" alt="Swagger API Docs" />
  </a>
</div>

---

## 🧾 Table of Contents

1. 🔍 [Introduction](#-introduction)
2. ⚙ [Tech Stack](#-tech-stack)
3. 🎯 [Features](#-features)
4. ✦ [Quick Start (Setup Guide)](#-quick-start-setup-guide)
5. 🧰 [Postman Collection](#-postman-collection)

## 🔍 Introduction

This project demonstrates how to build a **secure REST API** using:

- **Express.js** for routing
- **Mongoose** for MongoDB object modeling
- **JWT** for authentication
- **Middleware** for access control and validation

It provides a ready-to-use backend for projects that need **user management**, **authentication**, **student and product CRUD**, and **role-based authorization**.

---

## ⚙ Tech Stack

| Technology               | Description                                |
| ------------------------ | ------------------------------------------ |
| **Node.js**              | JavaScript runtime for building the server |
| **Express.js**           | Web framework for building APIs            |
| **MongoDB + Mongoose**   | NoSQL database and ODM                     |
| **JWT (JSON Web Token)** | Authentication and authorization           |
| **bcryptjs**             | Password hashing                           |
| **dotenv**               | Environment variable management            |
| **Joi**                  | Schema validation                          |

---

## 🎯 Features

✅ **User Authentication & Authorization** (JWT)  
✅ **Role-based Access Control** (Admin/User)  
✅ **CRUD Operations** for Users, Students, and Products  
✅ **Validation** using Joi  
✅ **Secure Password Hashing** with bcrypt  
✅ **Error Handling Middleware**  
✅ **Query Filters** (e.g., `/api/users?role=admin&age=25`)  
✅ **Environment Config Support (.env)**

---

## ✦ Quick Start (Setup Guide)

### 1️⃣ Clone the repository

```bash
git clone https://github.com/niranjandascp/node-express-jwt-auth-restapi.git
cd node-express-jwt-auth-restapi
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create `.env` file in the root directory

```env
# Server Port
PORT=9002

# Database name
DATABASE = auth-api-dev

# MongoDB Connection URI
MONGO_URI=mongodb+srv://<USERNAME>:<PASSWORD>@<CLUSTER>.mongodb.net/

# JWT Secret Key for Authentication
JWT_SECRET=myverysecretjwt098



# Node Environment: development or production
NODE_ENV=development

```

### 4️⃣ Start the server

```bash
npm run dev   # Development mode
npm start     # Production mode
```

---

Server will run on:  
 ➜ **http://localhost:9002**

---

## 📘 Swagger API Documentation

openapi: 3.0.0
info:
title: REST API
description: Auto-generated Swagger documentation for this project
version: 1.0.0

servers:

- url: http://localhost:9002

paths:

/api/auth/register:
post:
summary: Register a new user
requestBody:
required: true
content:
application/json:
schema:
type: object
properties:
username:
type: string
email:
type: string
password:
type: string
role:
type: string
age:
type: number
responses:
"201":
description: Created
"400":
description: Bad Request

/api/auth/login:
post:
summary: User login
requestBody:
required: true
content:
application/json:
schema:
type: object
properties:
email:
type: string
password:
type: string
responses:
"200":
description: OK
"400":
description: Bad Request
"401":
description: Unauthorized

/api/users/:
get:
summary: Get all users
parameters: - name: age
in: query
schema:
type: string - name: role
in: query
schema:
type: string
responses:
"200":
description: OK

/api/users/{id}:
get:
summary: Get user by ID
parameters: - name: id
in: path
required: true
schema:
type: string
responses:
"200":
description: OK
"400":
description: Bad Request
"404":
description: Not Found

/api/products/create:
post:
summary: Create new product
requestBody:
required: true
content:
application/json:
schema:
type: object
properties:
name:
type: string
brand:
type: string
price:
type: number
discountPrice:
type: number
responses:
"201":
description: Created
"400":
description: Bad Request
"403":
description: Forbidden

/api/products/:
get:
summary: Get all products
parameters: - name: name
in: query
schema:
type: string - name: brand
in: query
schema:
type: string - name: sort
in: query
schema:
type: string - name: order
in: query
schema:
type: string
responses:
"200":
description: OK

/api/products/{id}:
patch:
summary: Update product
parameters: - name: id
in: path
required: true
schema:
type: string
requestBody:
required: false
content:
application/json:
schema:
type: object
properties:
name:
type: string
brand:
type: string
price:
type: number
discountPrice:
type: number
responses:
"200":
description: OK
"400":
description: Bad Request
"403":
description: Forbidden
"404":
description: Not Found

delete:
summary: Delete product
parameters: - name: id
in: path
required: true
schema:
type: string
responses:
"200":
description: OK
"403":
description: Forbidden
"404":
description: Not Found

---

If this project helped you, a ⭐ on the repo would mean a lot!