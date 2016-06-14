import React, {Component} from 'react';

class BookRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      title: props.title,
      author: props.author
    }
  }

  render(){
    return(
      <tr>
        <td>{this.state.id}</td>
        <td>{this.state.title}</td>
        <td>{this.state.author}</td>
      </tr>
    );
  }
}

export default BookRow;
