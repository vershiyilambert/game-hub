/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState, useEffect } from "react";
import APIClient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre>("/genres");
const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .getAll()
      .then((res) => {
        setIsLoading(false);
        setGenres(res.data.results);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);
  return { genres, error, isLoading };
};

export default useGenres;
