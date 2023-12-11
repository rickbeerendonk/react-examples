/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

/* eslint react/display-name:"off" */

function HelloWorld() {
  return {
    state: { value: 'World' },
    render: function () {
      return <h1>Hello {this.state.value}!</h1>;
    }
  };
}

export default HelloWorld;
