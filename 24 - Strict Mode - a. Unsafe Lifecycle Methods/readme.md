# Strict Mode

The Strict Mode element doesn't render any UI. Instead it adds a number of checks with warnings for its descendants.

## Unsafe lifecycle methods

Detecting use of unsafe lifecycle methods in your own code is relatively straightforward. When using 3rd party components it might be harder though. Wrap that code in ```<React.StrictMode>``` to detect usage.

Unsafe lifecycle methods are:
* componentWillMount
* componentWillReceiveProps
* componentWillUpdate

Here is an example of how the warnings might look like:
![Unsafe lifecycle methods warning](resources/unsafe-lifecycle-methods-warning.png)

---

Copyright © 2018 Rick Beerendonk
