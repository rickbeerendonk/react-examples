/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

export default function MyInput({
  onBrowserChanged,
  children,
  ...passthroughProps
}) {
  const inputRef = React.useRef();

  React.useEffect(
    function () {
      const input = inputRef.current;

      input.addEventListener('change', onBrowserChanged);

      return () => input.removeEventListener('change', onBrowserChanged);
    },
    [onBrowserChanged]
  );

  return (
    <input {...passthroughProps} ref={inputRef}>
      {children}
    </input>
  );
}
