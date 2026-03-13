# 🚀 User Management System

A modern full-stack application built with **Java 21**, **Spring Boot**, **PostgreSQL**, and **Angular 18**.

Aplicação **full-stack moderna** desenvolvida com **Java 21, Spring Boot, PostgreSQL e Angular 18**.

---

## 🏗️ Architecture

**Backend**
* Java 21
* Spring Boot
* DDD (Domain-Driven Design)
* CQRS (Command Query Responsibility Segregation)
* Service Layer

**Frontend**
* Angular 18
* Standalone Components
* Reactive Forms
* Vanilla CSS

**Database**
* PostgreSQL

---

## ⚙️ Running the Project

### 1. Database
- Create a PostgreSQL database named `task_manager`.
- Run the script located in `database/schema.sql`.

### 2. Backend (Spring Boot)
- Open the `java-task-manager` folder.
- Configure your PostgreSQL credentials in `src/main/resources/application.properties`.
- Run the application:
  ```bash
  mvn spring-boot:run
  ```

### 3. Frontend (Angular)
- Navigate to the `frontend` folder:
  ```bash
  cd frontend
  ```
- Install dependencies:
  ```bash
  npm install
  ```
- Run the development server:
  ```bash
  ng serve
  ```
- Access the UI at `http://localhost:4200`.

---

## 📁 Project Structure

```
java-task-manager   # Spring Boot backend
frontend            # Angular frontend
frontend-old        # React frontend (Deprecated)
database            # SQL schema
```

## Features
- User registration with real-time feedback.
- User editing and deletion.
- Responsive and modern UI.
- Global error handling and toast notifications.
