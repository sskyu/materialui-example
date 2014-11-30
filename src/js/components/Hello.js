/** @jsx React.DOM */

'use strict';

var React = require('react');
var mui = require('material-ui');
var PaperButton = mui.PaperButton;

module.exports = React.createClass({

    displayName: 'Hello React',

    componentDidMount: function () {
        console.log(this.refs.accountName.getValue());
    },

    render: function () {
        return (
            <div>
                <mui.Input ref="accountName" onChange={this._onChange} type="text" />
                <PaperButton ref="btnLogin" className="btnLogin" type={PaperButton.Types.RAISED} label="Login" primary={true} />
            </div>
        );
    },

    _onChange: function (e, value) {
        console.log(e, value);
    }
});