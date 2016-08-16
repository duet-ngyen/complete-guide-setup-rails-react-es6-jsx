import React from 'react';

class Message extends React.Component {
  render() {
    return(
      <div>
        <h2 className="heading-pro">{this.props.message}</h2>
      </div>
    );
  }
}

export default Message;
