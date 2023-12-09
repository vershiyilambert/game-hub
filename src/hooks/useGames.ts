/* eslint-disable @typescript-eslint/no-unused-vars */

import { useEffect, useState } from "react";
import APIClient from "../services/api-client";
import { Platform } from "./usePlatforms";
import useData from "./useData";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = () => useData<Game>("/games");

export default useGames;
