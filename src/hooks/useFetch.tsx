import Services from '@/services';
import { AxiosResponse } from 'axios';

import { useState } from 'react';

const useFetch = () => {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetch = async (url: string, id?: string): Promise<void> => {
    setLoading(true);
    setError(null);

    await Services()
      .get(url, id)
      .then((response: AxiosResponse<{ message: string; status: number }>) => {
        const { data } = response;

        setData(data);
      })
      .catch((err: any) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => setLoading(false));
  };

  return { data, loading, error, fetch };
};

export default useFetch;
