# 🚀 User Management System

A modern **full-stack application** built with **Java 21, Spring Boot, PostgreSQL and React (TypeScript)**.

Aplicação **full-stack moderna** desenvolvida com **Java 21, Spring Boot, PostgreSQL e React (TypeScript)**.

---

## 🏗️ Architecture

**Backend**

* Java 21
* Spring Boot
* DDD
* CQRS
* Service Layer

**Frontend**

* React
* Vite
* TypeScript
* CSS

**Database**

* PostgreSQL

---

## ⚙️ Running the Project

### 1. Database

Create database:

```
task_manager
```

Run:

```
database/schema.sql
```

---

### 2. Backend

Configure PostgreSQL credentials in:

```
src/main/resources/application.properties
```

Run:

```
mvn spring-boot:run
```

---

### 3. Frontend

```
cd frontend
npm install
npm run dev
```

Access:

```
http://localhost:5173
```

---

## 📁 Project Structure

```
java-task-manager   # Spring Boot backend
frontend            # React frontend
database            # SQL schema
```
