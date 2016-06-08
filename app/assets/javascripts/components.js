//= require_tree ./components


// ES6 imports
const ReactDOMServer = window.ReactDOMServer = global.ReactDOMServer = require('react-dom/server');

import IndexComponent from './components/pages/index.es6.js';
import Message from './components/pages/message.es6';

// Setup a global app scope
//noinspection JSAnnotator
const app = window.app = global.app = {};

// Expose components to global scope
app.IndexComponent = IndexComponent;
app.Message = Message;
