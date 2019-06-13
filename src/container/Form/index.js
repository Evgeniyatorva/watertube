import React, { Component } from 'react';
import axios from 'axios';
import ButtonPWA from '../../container/ButtonPWA';

import './style.scss';


class Form extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: '',
      tel: '',
      formSubmit: false
    }
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const API_PATH = 'https://watertube.by/mail/index.php';  
    console.log('1');
    const { name, tel } = this.state;    

    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: {
        name: name,
        tel: tel
      }
    })
      .then(result => {
        console.log('1send')

        this.setState({
          formSubmit: result.data.sent
        })
        console.log('2send')

        console.log(this.state)
      })
      .catch(error => {
        console.log('error', error)
      });
  }

  render() {
    return(
      <div>
        <p className="form-callback-title-text">Работаем круглосуточно!</p>
        <ButtonPWA />
        {/* <form className="form" onSubmit={this.handleSubmit} >
          <h4 className="form-callback-title">Связаться с нами</h4>
          <input type="text" name='name' placeholder="Ваше имя" value={this.state.name} onChange={this.handleChange} required />
          <input type="tel" name='tel' placeholder="Ваш номер телефона" value={this.state.tel} onChange={this.handleChange} required />
          <input type="submit" value="Отправить"/>
        </form> 
        <div>{this.state.formSubmit && 
          <div className="send-message">Спасибо. Мы свяжемся с вами в ближайшее время</div>}
        </div>         */}
      </div>
    )
  }

}

export default Form;