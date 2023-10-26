import { Form } from 'react-bootstrap';

function Third({ formData, setFormData }) {
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Telephone Number</Form.Label>
        <Form.Control type="text" onChange={(e) => {
                setFormData({
                ...formData,
                telePhone: e.target.value,
                });
            }}
            value={formData.telePhone}
            placeholder="Telephone Number"
            required />
      </Form.Group>
    </>
  );
}

export default Third;
