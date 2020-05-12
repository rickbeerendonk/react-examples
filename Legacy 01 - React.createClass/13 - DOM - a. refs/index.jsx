/*! European Union Public License version 1.2 !*/
/*! Copyright © 2016 Rick Beerendonk          !*/

/* global createReactClass, React, ReactDOM */

var HelloWorld = createReactClass({
  componentDidMount: function() {
    this.myH1.innerHTML = 'Hello <u>React</u>!!!';
  },
  render: function() {
    return <h1 ref={ref => (this.myH1 = ref)}>Hello World!</h1>;
  }
});

ReactDOM.render(<HelloWorld />, document.getElementById('app'));
