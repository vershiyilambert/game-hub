/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState, useEffect } from "react";
import APIClient from "../services/api-client";

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const apiClient = new APIClient<T>(endpoint);
    setIsLoading(true);
    apiClient
      .getAll()
      .then((res) => {
        setIsLoading(false);
        setData(res.data.results);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [endpoint]);
  return { data, error, isLoading };
};

export default useData;
