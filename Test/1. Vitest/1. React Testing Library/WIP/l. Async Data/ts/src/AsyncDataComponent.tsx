/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { useEffect, useState } from 'react';

interface DataItem {
  id: number;
  title: string;
}

export default function AsyncDataComponent() {
  const [data, setData] = useState<DataItem[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 100));
        const response = [
          { id: 1, title: 'Item 1' },
          { id: 2, title: 'Item 2' }
        ];
        setData(response);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div data-testid="loading">Loading...</div>;
  }

  return (
    <div data-testid="data-container">
      <h2>Async Data</h2>
      <ul>
        {data?.map(item => (
          <li key={item.id} data-testid={`item-${item.id}`}>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
