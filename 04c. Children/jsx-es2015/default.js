'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var Hello = (function (_React$Component) {
    function Hello() {
        _classCallCheck(this, Hello);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(Hello, _React$Component);

    _createClass(Hello, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'ul',
                null,
                this.props.children.map(function (child) {
                    return React.createElement(
                        'li',
                        null,
                        child
                    );
                })
            );
        }
    }]);

    return Hello;
})(React.Component);

;

React.render(React.createElement(
    Hello,
    null,
    React.createElement(
        'span',
        null,
        'Maria'
    ),
    React.createElement(
        'span',
        null,
        'Peter'
    ),
    React.createElement(
        'span',
        null,
        'John'
    )
), document.getElementById('app'));
