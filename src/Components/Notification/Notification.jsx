import { Component } from 'react';

class Notification extends Component {
  render() {
    const { message } = this.props;
    return message;
  }
}

export default Notification;
