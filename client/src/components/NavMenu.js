import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";
import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

export default class MenuExampleSecondaryPointing extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            as={NavLink}
            exact
            to="/"
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Vehicle'
            active={activeItem === 'Vehicle'}
            as={NavLink}
            exact
            to="/Vehicle"
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Profile'
            active={activeItem === 'Profile'}
            as={NavLink}
            exact
            to="/Profile"
            onClick={this.handleItemClick}
          />

          <Menu.Item position='right'>

            <NavBar />
          </Menu.Item>

        </Menu>

        {/* <Segment>
          <img src='/images/wireframe/media-paragraph.png' />
        </Segment> */}
      </div>
    )
  }
}