'use client';

import {useEffect, useState} from 'react';

export function useApiData<T>(url: string) {
  const [state, setState] = useState<{
    data: T | null;
    loading: boolean;
    error: string | null;
  }>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data: T = await response.json();
        setState({data, loading: false, error: null});
      } catch (error) {
        setState({
          data: null,
          loading: false,
          error: (error as Error).message || 'An error occurred',
        });
      }
    };

    fetchData();
  }, [url]);

  return state;
}
