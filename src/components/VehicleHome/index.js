import React, { useState } from "react"
import { Button, Form } from 'semantic-ui-react'

const CheapSearch = () => {

  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setmodel] = useState("");
  const [trim, settrim] = useState("");
  const [color, setDate] = useState("");
  const [pdate, setPDate] = useState("");
  const [vin, setVin] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    API.getFlight(year, make, model, trim, color, pdate, vin).then(data => console.log(data))
      .catch(err => console.log(err));

  }

  return (
    <div><p>
      Enter Your Vehicle's Information:
    </p>
    Year:
  Make:
  Model:
  Trim:
  Color:
  Purchase Date:
  VIN:

    </div>
  )
}
export default VehicleHome;