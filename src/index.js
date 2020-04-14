import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ReactGA from 'react-ga';

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

import 'bootstrap/dist/css/bootstrap.css';

Amplify.configure(awsconfig);
ReactGA.initialize('UA-163494853-1');

ReactDOM.render(<App />, document.getElementById('root'));
