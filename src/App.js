import { useState } from "react";
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import './App.css';
import First from './First';
import Second from './Second';
import Third from './Third';
import Result from './Result';

function App() {
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    telePhone: ''
  });
  const conditionalComponent = () => {
    switch (page) {
      case 1:
        return <First formData={formData} setFormData={setFormData} />;
      case 2:
        return <Second formData={formData} setFormData={setFormData} />;
       case 3:
         return <Third formData={formData} setFormData={setFormData} />;
       default:
         return <Result formData={formData} />;
    }
  }; 

  function handleSubmit () {
    setPage(page + 1);
  }

  return (
    <Container fluid="md">
      <Row>
        <Col>
          Step: { page }
        </Col>
      </Row>
      <Row>
        <Col md="auto">
          <Form>
            {conditionalComponent()}
            {page !== 4 && <Button variant="primary" onClick={handleSubmit}>
              { page === 1 || page === 2 ? "Next" : "Submit" }
            </Button>}
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
