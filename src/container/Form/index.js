import React, { Component } from 'react';

import './style.scss';


class Form extends Component {
  constructor(props){
    super(props);

    this.state ={
      name: '',
      tel: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state.name)
  }

  handleSubmit = (e) => {
    e.preventDefault()

    console.log(e)
  }

  render() {
    return(
      <form className="form" onSubmit={this.handleSubmit} >
        <h4 className="form-callback-title">Связаться с нами</h4>
        <input type="text" name='name' placeholder="Ваше имя" value={this.state.name} onChange={this.handleChange} required />
        <input type="text" name='tel' placeholder="Ваш номер телефона" value={this.state.tel} onChange={this.handleChange} required />
        <input type="submit" value="Отправить"/>
      </form> 
    )
  }

}

export default Form;