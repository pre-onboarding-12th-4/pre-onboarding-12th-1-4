import { useCallback, useState } from 'react';

export default function useLoading() {
  const [loading, setLoading] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const handleLoading = useCallback(async <R>(func: () => Promise<R>): Promise<R> => {
    setLoading(true);
    const res = await func();
    setLoading(false);
    setIsLoaded(true);
    return res;
  }, []);

  return { loading, isLoaded, handleLoading };
}
