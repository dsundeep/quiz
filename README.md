# Backend

- Navigate to backend folder in the app and open cmd in this directory.
- Create a new file name `.env` in backend directory.
- Add the following code for local development:
  ```
  NODE_ENV=develop
  PORT=8000
  CLIENT=http://localhost:3000
  ```
 - Run `npm install`
 - Run `npm start`
 - You should see a success message in console saying that the backend is started.

# Frontend

- Navigate to quiz-frontend directory
- Create a new file name `.env` in backend directory.
- Add the following code for local development:
  ```
  BASE_URL=http://localhost:8000
  ```
 - Run `npm install`
 - Run `npm start`
 - You should see a success message in console and browser should be opened with the url `htpp://localhost:3000`.


## References

- https://react-bootstrap.github.io/
- https://reactjs.org/
- https://nodejs.org/en/
- https://expressjs.com/
