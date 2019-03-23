/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

function componentWithHooksRender(WrappedComponent) {
  function ComponentWithHooksRender({ render, self }) {
    return render.apply(self);
  }
  ComponentWithHooksRender.displayName = `${WrappedComponent.displayName ||
    WrappedComponent.name ||
    WrappedComponent.constructor.name ||
    'Component'}.renderWithHooks`;
  return ComponentWithHooksRender;
}

class ComponentWithHooks extends React.Component {
  constructor(props) {
    super(props);
    this.componentWithHooksRender = componentWithHooksRender(this);

    // Prevents subclass from overwriting render()
    Object.defineProperty(this, 'render', {
      value: function() {
        return (
          <this.componentWithHooksRender
            render={this.renderWithHooks}
            self={this}
          />
        );
      }
    });
  }
  renderWithHooks() {
    return null;
  }
}

export default ComponentWithHooks;
