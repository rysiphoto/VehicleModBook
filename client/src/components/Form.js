import React from 'react';
import { Form, Button } from 'semantic-ui-react';

export function Input(props) {
  return (

    <Form.Group widths='equal'>
      <input className="" {...props} />
    </Form.Group>
  )
}


export function FormBtn(props) {
  return (
    <Button {...props} className="btn">{props.children}</Button>
  );
}