import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

Amplify.configure(awsconfig);

ReactDOM.render(<App />, document.getElementById('root'));
