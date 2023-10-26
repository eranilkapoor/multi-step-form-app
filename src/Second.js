import { Form } from 'react-bootstrap';

function Second({ formData, setFormData }) {
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Date Of Birth</Form.Label>
        <Form.Control type="text" onChange={(e) => {
                setFormData({
                ...formData,
                dob: e.target.value,
                });
            }}
            value={formData.dob}
            placeholder="Date Of Birth"
            required />
      </Form.Group>
    </>
  );
}

export default Second;
