import React, { Component } from 'react';

class ItemForm extends Component {
  state = { name: '' }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    //stop page from reloading
    e.preventDefault();
    //add item to groceries array
    this.props.addItem(this.state.name)
    //clear form on submit
    this.setState({name: ''})
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
         <input 
        required 
        placeholder='add Grocery Item' 
        name="name" 
        value={this.state.name}
        onChange={this.handleChange}
        />
      </form>
    )
  }
}

export default ItemForm;