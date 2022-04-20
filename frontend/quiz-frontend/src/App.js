import './App.css';
import Quiz from './modules/Quiz/Quiz'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'

axios.defaults.baseURL = process.env.BASE_URL || 'http://localhost:8000';

function App() {
  return (
    <Container>
      <Row>
        <Col>
        <Quiz/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
