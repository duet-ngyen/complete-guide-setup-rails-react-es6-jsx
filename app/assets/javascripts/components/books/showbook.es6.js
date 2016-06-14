import React, {Component} from 'react';

class ShowBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: props.book
    };
  }

  render() {
    return(
      <div>
        <div>ID: {this.state.book.id}</div>
        <div>Title: {this.state.book.title}</div>
        <div>Author: {this.state.book.author}</div>
      </div>
    );
  }
}

export default ShowBook;
