'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var NameInput = (function (_React$Component) {
    function NameInput() {
        _classCallCheck(this, NameInput);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(NameInput, _React$Component);

    _createClass(NameInput, [{
        key: 'render',
        value: function render() {
            return React.createElement('input', { onChange: this.props.onChange.bind(this), value: this.props.name });
        }
    }]);

    return NameInput;
})(React.Component);

;

var Hello = (function (_React$Component2) {
    function Hello() {
        _classCallCheck(this, Hello);

        if (_React$Component2 != null) {
            _React$Component2.apply(this, arguments);
        }
    }

    _inherits(Hello, _React$Component2);

    _createClass(Hello, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'h1',
                null,
                'Hello ',
                this.props.name,
                '!'
            );
        }
    }]);

    return Hello;
})(React.Component);

;

var HelloMessage = (function (_React$Component3) {
    function HelloMessage(props) {
        _classCallCheck(this, HelloMessage);

        _get(Object.getPrototypeOf(HelloMessage.prototype), 'constructor', this).call(this, props);
        this.state = { name: 'React' };
    }

    _inherits(HelloMessage, _React$Component3);

    _createClass(HelloMessage, [{
        key: 'onChange',
        value: function onChange(e) {
            this.setState({ name: e.target.value });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(NameInput, { onChange: this.onChange.bind(this), name: this.state.name }),
                React.createElement(Hello, { name: this.state.name })
            );
        }
    }]);

    return HelloMessage;
})(React.Component);

;

React.render(React.createElement(HelloMessage, null), document.getElementById('app'));
