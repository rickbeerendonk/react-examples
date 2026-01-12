# Portal Examples - TODO

## Current State

The current example demonstrates basic portal creation using `createPortal()` with minimal functionality.

## Enhancement Ideas

### 1. Event Bubbling

- Demonstrate that events in portals bubble up through the **React tree** (not the DOM tree)
- Show event propagation with click handlers on both parent and portal content
- Illustrate difference between React's event system and DOM hierarchy

### 2. Multiple Portals

- Render content in different DOM target locations
- Show multiple portal elements rendering to separate containers
- Demonstrate independent portal instances

### 3. Common Use Cases

Implement realistic portal use cases where they're actually beneficial:

#### Modal Dialog

- Modal component that renders to a portal outside component hierarchy
- Backdrop/overlay styling
- Close functionality
- Z-index management

#### Dropdown Menu

- Show dropdown rendering via portal to avoid overflow/stacking context issues
- Positioning relative to trigger button
- Click-outside detection

#### Tooltip

- Positioned tooltip rendered via portal
- Mouse event handling
- Positioning calculations

### 4. Modal Example

- Most common and useful portal pattern
- Full working modal dialog component
- Backdrop with click-to-close
- Prevent body scroll when modal open
- Accessible focus management

## Priority

1. Modal Dialog (most common use case)
2. Event Bubbling (core concept)
3. Multiple Portals (variety)
4. Dropdown/Tooltip (additional examples)
