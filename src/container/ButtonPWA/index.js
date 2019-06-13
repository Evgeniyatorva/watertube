import React, { Component } from 'react';

import './style.scss';

class ButtonPWA extends Component {
  constructor(props) {
    super(props);
    this.deferredPrompt = null;
    this.state = {
      btn: true
    };
  }

  handleClick = () => {
    this.deferredPrompt.prompt();

    this.deferredPrompt.userChoice
    .then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        this.setState({
          btn: true
        })
        console.log(this.state.btn);

        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      this.deferredPrompt = null;
    });
    
  }
  componentDidMount() {
    console.log(this.deferredPrompt);
  }

  render() {
    // PWA
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this.setState({
        btn: false
      })
      this.deferredPrompt = e;
      console.log(this.deferredPrompt);
    });
    return (
      <div className={this.state.btn ? 'PWA-btn-wrapper-display-none' : 'PWA-btn-wrapper'} >
        <button className="PWA-btn" onClick={this.handleClick}>Установить как приложение</button>
      </div>      
    )
  }
}


export default ButtonPWA;