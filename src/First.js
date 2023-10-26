import { Form } from 'react-bootstrap';

function First({ formData, setFormData }) {
  return (
    <>
        <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" onChange={(e) => {
                setFormData({
                ...formData,
                firstName: e.target.value,
                });
            }}
            value={formData.firstName}
            placeholder="First Name"
            required />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" onChange={(e) => {
                setFormData({
                ...formData,
                lastName: e.target.value,
                });
            }}
            value={formData.lastName}
            placeholder="Last Name"
            required />
        </Form.Group>
    </>
  );
}

export default First;
