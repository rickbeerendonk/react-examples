/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

function ComponentWithHooksRender({ render, self }) {
  return render.apply(self);
}

class ComponentWithHooks extends React.Component {
  render() {
    return (
      <ComponentWithHooksRender render={this.renderWithHooks} self={this} />
    );
  }
  renderWithHooks() {
    return null;
  }
}

export default ComponentWithHooks;
