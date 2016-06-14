//= require_tree ./components


// ES6 imports
// const ReactDOMServer = window.ReactDOMServer = global.ReactDOMServer = require('react-dom/server');

// Setup a global app scope
//noinspection JSAnnotator
const app = window.app = global.app = {};

import IndexComponent from './components/pages/index.es6.js';
import ShowBook from './components/books/showbook.es6.js'
import IndexBook from './components/books/IndexBook.es6'
import BookRow from './components/books/bookRow.es6'

// Expose components to global scope
app.IndexComponent = IndexComponent;
app.ShowBook = ShowBook;
app.IndexBook = IndexBook;
app.BookRow = BookRow;
