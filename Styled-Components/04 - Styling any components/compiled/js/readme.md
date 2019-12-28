# Styled Components

Example:

```js
export const StyledInput = styled.input`
  text-align: center;
  color: green;
`;
```

All properties of the input element are available in the StyleInput component.

In the string, you can write like normal CSS with CSS property names and values. That is different than inline styles, where names and values need to be valid JavaScript.

Styled Component = Element + Style-rules

**Don't** create styled components inside the render method for performance reasons.
