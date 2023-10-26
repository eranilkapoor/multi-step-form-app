import { Card } from 'react-bootstrap';

function Result({ formData }) {
  return (
    <>
        <Card>
            <Card.Body>
                <ul>
                    <p> First Name : { formData.firstName }</p>
                    <p> Last Name : { formData.lastName }</p>
                    <p> Date Of Birth : { formData.dob }</p>
                    <p> Telephone Number : { formData.telePhone }</p>
                </ul>
            </Card.Body>
        </Card>
    </>
  );
}

export default Result;
