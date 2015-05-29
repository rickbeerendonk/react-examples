"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var HelloMessage = (function (_React$Component) {
    function HelloMessage() {
        _classCallCheck(this, HelloMessage);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(HelloMessage, _React$Component);

    _createClass(HelloMessage, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "h1",
                null,
                "Hello ",
                this.props.name,
                "!"
            );
        }
    }]);

    return HelloMessage;
})(React.Component);

;
HelloMessage.propTypes = { name: React.PropTypes.string.isRequired };

React.render(React.createElement(HelloMessage, { name: "React" }), document.getElementById("app"));
