import React, { Component } from 'react'
import VehicleForm from './Form'
import axios from 'axios'
import Card from './Card'

export default class Vehicle extends Component {
  state = {
    post: {
      name: "",
      trim: "",
      year: "",
      color: "",
      make: "",
      model: "",
      vin: ""
    }, posts: []
  }

  componentDidMount() {
    this.getVehicleEntries()
  }

  getVehicleEntries = () => {
    axios.get("/api/garage/vehicle")
      .then(res => this.setState({ posts: res.data }))
      .catch(err => console.log(err))
  }

  handleChange = e => {
    const { name, value } = e.target
    const post = { ...this.state.post }
    post[name] = value
    this.setState({ post: post })
  }

  handleSubmit = e => {
    e.preventDefault()
    axios.post("/api/garage/vehicle", this.state.post)
      .then(res => this.getVehicleEntries())
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="containerHome">
        <VehicleForm
          name={this.state.post.name}
          make={this.state.post.make}
          model={this.state.post.model}
          trim={this.state.post.trim}
          year={this.state.post.year}
          vin={this.state.post.vin}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {this.state.posts.map(post => (
          <Card post={post} key={post._id} />
        ))}
      </div>

    )
  }
}

