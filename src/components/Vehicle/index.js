import React from 'react';
import { Form } from 'semantic-ui-react';


const Vehicle = ({ name, make, model, color, trim, year, vin, handleChange, handleSubmit }) => {

  return (
    <div className="containerHome">

      <Form >
        <Form.Group widths='equal'>
          <Form.Input
            fluid label='Name' placeholder='Name' defaultValue={name} name="name"
            onChange={handleChange} />
          <Form.Input fluid label='Make' name="make" defaultValue={make} placeholder='Make'
            onChange={handleChange} />
          <Form.Input fluid label='Model' name="model" defaultValue={model} placeholder='Model'
            onChange={handleChange} />
          <Form.Input fluid label='Color' name="color" defaultValue={color} placeholder='Color'
            onChange={handleChange} />
          <Form.Input type="number" name="year" defaultValue={year} fluid label='Year' placeholder='Year'
            onChange={handleChange} />
        </Form.Group>
        <Form.Input name="trim" fluid label='Trim' defaultValue={trim} placeholder='Trim Level'
          onChange={handleChange} />
        <Form.Input name="VIN" fluid label='VIN' defaultValue={vin} placeholder='VIN'
          onChange={handleChange} />
        <Form.Button onClick={handleSubmit} >Submit</Form.Button>
      </Form>


    </div>
  )
}

export default Vehicle;