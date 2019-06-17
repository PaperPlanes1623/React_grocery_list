import React, { Component } from 'react';

class ItemForm extends Component {
  state = { name: '', price: ''}

  handleChange = (e) => {
    const { name, price,  value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    //stop page from reloading
    e.preventDefault();
    //add item to groceries array
    this.props.addItem(this.state.name, this.state.price)
    // this.props.addItem(this.state.price)
    //clear form on submit
    this.setState({name: '', price: ''})
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
        <br />
         <input  
        placeholder='add price (optional)' 
        price="price" 
        value={this.state.price}
        onChange={this.handleChange}
        />
        <br />
        <input class = "btn btn-primary" type = "submit" value = "Submit" />
      </form>
    )
  }
}

export default ItemForm;