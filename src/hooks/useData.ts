/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError, AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { FetchResponse, axiosInstance } from "../services/api-client";

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      //const apiClient = factory<T>(endpoint);
      const controller = new AbortController();
      const signal = controller.signal;
      setIsLoading(true);
      axiosInstance
        .get<FetchResponse<T>>(endpoint, { ...requestConfig, signal })
        .then((res) => {
          setIsLoading(false);
          setData(res.data.results);
        })
        .catch((err) => {
          if (err instanceof AxiosError) return;
          setError(err.message);
          setIsLoading(false);
        });
      return () => controller.abort();
    },
    deps ? [...deps] : []
  );
  return { data, error, isLoading };
};

export default useData;
