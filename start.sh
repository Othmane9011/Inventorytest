#!/bin/bash

start_backend() {
  echo "Starting Spring Boot backend..."
  cd backend || { echo "Failed to navigate to backend directory"; exit 1; }
  ./mvnw spring-boot:run & 
  BACKEND_PID=$!
  cd - || { echo "Failed to navigate back to the original directory"; exit 1; }
}

start_frontend() {
  echo "Starting Vue.js frontend..."
  cd my-frontend || { echo "Failed to navigate to frontend directory"; exit 1; }
  npm start & 
  FRONTEND_PID=$!
  cd - || { echo "Failed to navigate back to the original directory"; exit 1; }
}


start_backend
start_frontend

wait $BACKEND_PID
wait $FRONTEND_PID