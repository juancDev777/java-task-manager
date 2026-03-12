# User Management System

A modern full-stack application built with **Java 21**, **Spring Boot**, **PostgreSQL**, and **React (TypeScript)**.

## Architecture
- **Backend**: DDD (Domain-Driven Design), CQRS (Command Query Responsibility Segregation), Service Layer.
- **Frontend**: React with Vite, TypeScript, and modern Vanilla CSS.
- **Database**: PostgreSQL (schema provided in `database/`).

## How to Run

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

### 3. Frontend (React)
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
  npm run dev
  ```
- Access the UI at `http://localhost:5173`.

## Features
- User registration with real-time feedback.
- User editing.
- Responsive and modern UI.
- Global error handling and toast notifications.
