# useEffectEvent

**Available in React 19.2+**

`useEffectEvent` lets you extract non-reactive logic from Effects. It allows you to read the latest props and state without causing the Effect to re-run.

## Use Cases

1. **Reading latest values without re-running effects**: Access the latest state/props without adding them to the Effect's dependencies
2. **Separating reactive and non-reactive logic**: Keep Effects focused on truly reactive values while still accessing the latest values when needed

## Key Benefits

- Prevents unnecessary Effect re-runs
- Allows reading the latest values without making them dependencies
- Improves performance by avoiding reconnections/re-subscriptions

## Documentation

- [React Docs: useEffectEvent](https://react.dev/reference/react/useEffectEvent)

## Note

`useEffectEvent` is available in React 19.2+ as a stable API. In earlier versions, it was experimental and required using the `experimental_useEffectEvent` import.
