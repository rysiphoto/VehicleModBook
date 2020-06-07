import React, { Component } from 'react';
import Vehicle from "./Vehicle";
import axios from "axios";
import Card from "./Card";

export default class Garage extends Component {
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
    this.getGarageEntries()
  }

  getJournalEntries = () => {
    axios.get("/api/vehicle/garage")
      .then(res => this.setState({ posts: res.data }))
      .catch(err => console.log(err))
  }

  handleChange = e => {
    const { name, value } = e.target
    const post = { ... this.state.post }
    post[name] = value
    this.setState({ post: post })
  }

  handleSubmit = e => {
    e.preventDefault()
    axios.post("/api/vehicle/garage", this.state.post)
      .then(res => this.getJournalEntries())
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="containerHome">
        <Vehicle
          name={this.state.post.date}
          make={this.state.post.author}
          model={this.state.post.body}
          trim={this.state.post.depCity}
          year={this.state.post.arrCity}
          vin={this.state.post.price}
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

