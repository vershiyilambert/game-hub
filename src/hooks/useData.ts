/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosRequestConfig } from "axios";
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

  useEffect(() => {
    //const apiClient = factory<T>(endpoint);
    setIsLoading(true);
    axiosInstance
      .get<FetchResponse<T>>(endpoint)
      .then((res) => {
        setIsLoading(false);
        setData(res.data.results);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);
  return { data, error, isLoading };
};

export default useData;
