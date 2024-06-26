## Prerequisites

- Java 11
- Node.js (includes npm)
- Maven

## Getting Started

### Backend (Spring Boot)

1. **Navigate to the backend directory**:

    ```sh
    cd backend
    ```

2. **Build the project**:

    ```sh
    mvn clean install
    ```

3. **Run the Spring Boot application**:

    ```sh
    mvn spring-boot:run
    ```

    The backend should now be running on `http://localhost:8080`.

### Frontend (React)

1. **Navigate to the frontend directory**:

    ```sh
    cd my-frontend
    ```

2. **Install dependencies**:

    ```sh
    npm install
    ```
3. **Configure ORY**;
```export ORY_SDK_URL=https://great-bouman-yxwvgjdn52.projects.oryapis.com
   npx @ory/cli tunnel --dev http://localhost:3000
   ```

4. **Start the React application**:

    ```sh
    npm start
    ```

    The frontend should now be running on `http://localhost:3000`.

### Making API Calls

The React frontend makes API calls to the Spring Boot backend. Ensure that both the backend and frontend are running simultaneously for this to work.

In the React application, the API call is made to `http://localhost:8080/api/hello`. Ensure that the backend CORS configuration allows requests from the React app's address (`http://localhost:3000`).

### Project Explanation

- **Backend**: The backend is built using Spring Boot and provides a simple REST API endpoint `/api/hello` that returns a greeting message.
  - `SpringBootDemoApplication.java`: The main class to run the Spring Boot application.
  - `WebConfig.java`: Configures CORS to allow the frontend to make API calls to the backend.

- **Frontend**: The frontend is built using React and includes a button to call the backend API and display the response.
  - `App.js`: Contains the React component with a button that calls the backend API.

# Install Docker
sudo apt-get update
sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt-get update
sudo apt-get install docker-ce
sudo systemctl start docker
sudo systemctl enable docker
docker --version

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
docker-compose --version

# Run Docker Compose
cd /path/to/my-project
docker-compose up -d

## Additional Notes

- Ensure that both the backend and frontend are running on their respective ports (`8080` for the backend and `3000` for the frontend).
- If you encounter any CORS issues, verify the CORS configuration in `WebConfig.java`.
- This project setup allows for easy separation and independent development of the backend and frontend.

## Author

Othmane Bengharbi


