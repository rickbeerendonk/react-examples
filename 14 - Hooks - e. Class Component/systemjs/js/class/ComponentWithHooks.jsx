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
    this.render = function() {
      const proto = Object.getPrototypeOf(this);
      return proto.render ? (
        <this.componentWithHooksRender render={proto.render} self={this} />
      ) : null;
    };
  }
}

export default ComponentWithHooks;
