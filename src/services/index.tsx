import axios, { AxiosResponse } from 'axios';

const controllers: { [key: string]: AbortController } = {};

const Services = () => {
  /**
   * BASE URL
   */
  const BASE_URL = import.meta.env.VITE_API_BFF_URL ?? '';
  /**
   * Axios
   **/
  const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Access-Control-Allow-Origin': BASE_URL,
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json',
      'x-api-key': import.meta.env.VITE_API_KEY_BFF ?? '',
      Accept: '*/*',
    },
  });

  const createAbortController = (id = 'service') => {
    if (controllers[id]) {
      controllers[id].abort();
    }

    controllers[id] = new AbortController();
    return controllers[id].signal;
  };

  return {
    get: async (
      url: string,
      id?: string,
    ): Promise<AxiosResponse<{ message: string; status: number }>> => {
      const signal = createAbortController(id);

      return await instance.get(url, { signal }).catch((error) => {
        const { response } = error;
        if (response) {
          const { message } = response.data;
          const status = response.status;

          return {
            message,
            status,
          };
        }
        return response;
      });
    },
  };
};
export default Services;
