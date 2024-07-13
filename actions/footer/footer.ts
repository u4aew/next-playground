import axios from 'axios';
import { API_BASE_URL } from '@/config';
import { IApiResponseFooter, IFooterData } from '@/typing';

/**
 * Fetches the footer data from the API.
 *
 * This function makes a GET request to the `/footer` endpoint of the API
 * defined by the `API_BASE_URL` and returns the response data.
 *
 * @async
 * @function getFooter
 * @returns {Promise<IApiResponseFooter>} A promise that resolves to an object containing the response data.
 * @throws {Error} Throws an error if the request fails.
 */
export const getFooter = async (): Promise<IApiResponseFooter> => {
  const { data } = await axios.get<IFooterData>(`${API_BASE_URL}/footer`);
  return { data };
};
