import React, {Component} from 'react';
import BookRow from './bookRow.es6';

class IndexBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: props.books
    }
  }

  render() {
    return(
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>

              { this.state.books.map(
                (book) => < BookRow
                key={book.id}
                id={book.id}
                title={book.title}
                author={book.author} />
              ) }
          </tbody>
        </table>
      </div>
    );
  }
}

export default IndexBook;
