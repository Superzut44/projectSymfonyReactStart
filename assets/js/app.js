import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import '../styles/app.scss';
import Home from './components/Home';

ReactDOM.render(<BrowserRouter><Home /></BrowserRouter>, document.getElementById('root'));
