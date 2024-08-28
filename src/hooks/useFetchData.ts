import { useCallback, useEffect, useState } from "react";

type AsyncFuntion<T, P extends unknown[]> = (...args: P) => Promise<T>;

interface UseAsyncFuntionReturn<T> {
  data: T | undefined;
  isLoading: boolean;
  hasError: string;
}

export const useAsyncFunction = <T, P extends unknown[]>(
  asyncFunction: AsyncFuntion<T, P>,
  params?: P
): UseAsyncFuntionReturn<T> => {
  const [data, setData] = useState<T | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState("");

  const executeAsyncFunction = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await asyncFunction(...(params || ([] as unknown as P)));

      setData(response);
    } catch (error) {
      if (error instanceof Error) {
        setHasError(error.message || "An error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  }, [asyncFunction, JSON.stringify(params)]);

  useEffect(() => {
    executeAsyncFunction();
  }, [executeAsyncFunction]);

  return { data, isLoading, hasError };
};
