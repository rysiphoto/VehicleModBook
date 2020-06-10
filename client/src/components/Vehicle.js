import React, { useEffect, useState } from 'react'
import { Input, FormBtn } from './Form'
import API from "../utils/API";
import { ListItem } from "../components/List";
import { Col, Row, Container } from "../components/Grid";
import { Link } from "react-router-dom";
import DeleteBtn from "../components/DeleteBtn";
import { Form } from 'semantic-ui-react';
import './style.css';

function Vehicle() {

  const [vehicles, setVehicles] = useState([])
  const [formObject, setFormObject] = useState({})


  useEffect(() => {
    loadVehicles()
  }, [])

  function loadVehicles() {
    API.getVehicle()
      .then(res =>
        setVehicles(res.data)
      )
      .catch(err => console.log(err))
  };
  function deleteVehicle(id) {
    API.deleteVehicle(id)
      .then(res => loadVehicles())
      .catch(err => console.log(err));
  }

  function handleChange(e) {
    const { name, value } = e.target
    setFormObject({ ...formObject, [name]: value })
  };

  function handleSubmit(e) {
    e.preventDefault()
    if (formObject.name && formObject.make) {
      API.saveVehicle({
        name: formObject.name,
        make: formObject.make,
        model: formObject.model,
        trim: formObject.trim,
        year: formObject.year,
        color: formObject.color,
        vin: formObject.vin
      })
        .then(res => loadVehicles())
        .catch(err => console.log(err));
    }
  };

  return (
    <div className="container">
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Form>
              <Form.Group widths='equal'>

                <Input
                  onChange={handleChange}
                  name="name"
                  placeholder="name"
                />
                <Input
                  onChange={handleChange}
                  name="make"
                  placeholder="make"
                />
                <Input
                  onChange={handleChange}
                  name="model"
                  placeholder="model"
                />
              </Form.Group>
              <Form.Group>
                <Input
                  onChange={handleChange}
                  name="trim"
                  placeholder="trim"
                />
                <Input
                  onChange={handleChange}
                  name="color"
                  placeholder="color"
                />
                <Input
                  onChange={handleChange}
                  name="year"
                  placeholder="year"
                />
              </Form.Group>
              <Form.Group>
                <Input
                  onChange={handleChange}
                  name="vin"
                  placeholder="vin"
                />
              </Form.Group>
              <Form.Group>
                <FormBtn
                  onChange={handleSubmit}
                >Submit Vehicle
              </FormBtn>

              </Form.Group>
            </Form>
          </Col>
          <Col size="md-6 sm-12">

            {vehicles.map(vehicle => (
              <ListItem key={vehicle._id}>
                <Link to={"/vehicles/" + vehicle._id}>
                  <strong>
                    {vehicle.name} by {vehicle.make}
                  </strong>
                </Link>
                <DeleteBtn onClick={() => deleteVehicle(vehicle._id)} />
              </ListItem>
            )

            )}
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default Vehicle;