/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

interface ErrorBoundaryProps {
  hasError: boolean;
  children: React.ReactNode;
}

export default function ErrorComponent({
  hasError,
  children
}: ErrorBoundaryProps) {
  if (hasError) {
    throw new Error('Component error: Something went wrong');
  }

  return <div data-testid="error-component">{children}</div>;
}
