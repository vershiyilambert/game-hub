/* eslint-disable @typescript-eslint/no-unused-vars */

import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
//const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
