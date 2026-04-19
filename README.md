# Backend Project (Express + Sequelize)

## 📌 Project Description
This is a simple backend application built using **Node.js, Express, and Sequelize ORM**.  
The project demonstrates **CRUD operations** and a **one-to-many relationship** between Users and Posts.

---

## ⚙️ Technologies Used
- Node.js
- Express.js
- Sequelize ORM
- Sequelize CLI
- SQLite (or your configured database)

---

## 📁 Project Setup

### 1. Install dependencies
```bash
npm install
2. Run migrations
npx sequelize-cli db:migrate
3. Start the server
node app.js
🚀 How to Run the Project

After starting the server, it will run on:

http://localhost:3000
👤 Users API
Create User
POST /users
{
  "name": "Ali",
  "email": "ali@test.com"
}
Get All Users
GET /users
Get User by ID
GET /users/:id
Update User
PUT /users/:id
Delete User
DELETE /users/:id
Get User Posts
GET /users/:id/posts
📝 Posts API
Create Post
POST /posts
{
  "title": "My Post",
  "content": "Hello backend",
  "userId": 1
}
Get All Posts
GET /posts
Get Post by ID
GET /posts/:id
Update Post
PUT /posts/:id
Delete Post
DELETE /posts/:id
🔗 Relationships
One User has many Posts
One Post belongs to a User

Implemented using:

User.hasMany(Post)
Post.belongsTo(User)
✅ Features
Full CRUD for Users
Full CRUD for Posts
Sequelize ORM with migrations
One-to-many relationship
Organized routes and controllers

🎯 Author
Noor Salah Abu Khames 