import { useState, useEffect } from 'react';
import ErrorResponse from '../utils/ErrorResponse';

export const useFetch = (url: string) => {
  const [data, setData] = useState<object | null>(null);
  const [error, setError] = useState<object | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url);

        if (!res.ok)
          throw new ErrorResponse(
            'Error en la petición "Fetch"',
            res.status || 0,
            res.statusText || 'Ocurrió un error'
          );

        const json = await res.json();

        if (!signal.aborted) {
          setData(json);
          setError(null);
        }
      } catch (err: any) {
        if (!signal.aborted) {
          setData(null);
          setError(err);
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => abortController.abort();
  }, [url]);

  return { data, error, loading };
};
