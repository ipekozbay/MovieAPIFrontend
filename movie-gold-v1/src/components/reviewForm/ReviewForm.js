import React from 'react'
import {Form, Button} from 'react-bootstrap';

const ReviewForm = () => {
  return (
    <div>
      <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
        <Form.Label></Form.Label>
        <Form.Control as={"textarea"} rows={3}/>
      </Form.Group>
      <Button variant='outline-info'>Submit</Button>
    </div>
  )
}

export default ReviewForm
 