import React, { Component } from 'react';
import axios from 'axios';

import './style.scss';


class Form extends Component {
  constructor(props){
    super(props);

    this.state ={
      name: '',
      tel: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state.name)
  }

  async handleSubmit(e) {
    e.preventDefault()

    const { name, tel } = this.state;

    const form = await axios.post('/api/form', {
      name,
      tel
    })
  }

  render() {
    return(
      <form className="form" onSubmit={this.handleSubmit} >
        <h4 className="form-callback-title">Связаться с нами</h4>
        <input type="text" name='name' placeholder="Ваше имя" value={this.state.name} onChange={this.handleChange} required />
        <input type="tel" name='tel' placeholder="Ваш номер телефона" value={this.state.tel} onChange={this.handleChange} required />
        <input type="submit" value="Отправить"/>
      </form> 
    )
  }

}

export default Form;