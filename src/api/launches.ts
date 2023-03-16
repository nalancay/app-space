import { makeRequest } from "./fetch.utils";

export default class Launches {
  static async getAllLaunchesUpcoming() {
    const URL_ENDPOINT = "https://api.spacexdata.com/v4/launches/upcoming";

    try {
      const { data, isSuccessful } = await makeRequest({ URL_ENDPOINT });
      if (!isSuccessful) {
        throw new NetworkError();
      }
      return data;
    } catch (err) {
      throw err;
    }
  }

  static async getNextLaunch() {
    const URL_ENDPOINT = "https://api.spacexdata.com/v4/launches/next";

    try {
      const { data, isSuccessful } = await makeRequest({ URL_ENDPOINT });
      if (!isSuccessful) {
        throw new NetworkError();
      }
      return data;
    } catch (err) {
      throw err;
    }
  }
}

class NetworkError extends Error {
  constructor() {
    super("Network error");
  }
}
