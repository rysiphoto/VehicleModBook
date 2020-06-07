import React from "react"
import {
  Container,
  Item,
  List
} from "semantic-ui-react"


const Card = ({ post }) => {

  const { name, trim, year, color, make, model, vin } = post;

  return (

    <Container>
      <Item.Group divided>
        <Item>
          <List>
            <Item.Header name="name" as='a' >{name}'s Vehicles</Item.Header>
            <Item.Description>
              <b> ${year} </b>
            </Item.Description>
            <Item.Description>
              <b> {make} </b>
            </Item.Description>
            <Item.Description>
              <b>{model}</b>
              <Item.Description>
                <b> ${trim} </b>
              </Item.Description>
            </Item.Description><br />
            <Item.Description>
              {color}
            </Item.Description>
            <Item.Description>
              <b> ${vin} </b>
            </Item.Description>

          </List>
        </Item>
      </Item.Group>
    </Container>

  )

}

export default Card;