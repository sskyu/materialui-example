/** @jsx React.DOM */

'use strict';

var React = require('react');
var Hello = require('./components/Hello');

React.renderComponent(
    <Hello />,
    document.getElementById('content')
);