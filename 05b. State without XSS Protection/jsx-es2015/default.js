'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var HelloMessage = (function (_React$Component) {
    function HelloMessage(props) {
        _classCallCheck(this, HelloMessage);

        _get(Object.getPrototypeOf(HelloMessage.prototype), 'constructor', this).call(this, props);
        this.state = { name: 'React' };
    }

    _inherits(HelloMessage, _React$Component);

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
                React.createElement('input', { onChange: this.onChange.bind(this), value: this.state.name }),
                React.createElement(
                    'h1',
                    null,
                    'Hello ',
                    React.createElement('span', { dangerouslySetInnerHTML: { __html: this.state.name } }),
                    '!'
                )
            );
        }
    }]);

    return HelloMessage;
})(React.Component);

;

React.render(React.createElement(HelloMessage, null), document.getElementById('app'));
