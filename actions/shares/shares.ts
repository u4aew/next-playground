import axios from 'axios';
import { API_BASE_URL } from '@/config';
import {
  IApiResponseShares,
  IFinancialInstrument,
  IPagination,
} from '@/typing';

/**
 * Fetches the list of shares from the API.
 *
 * This function makes a GET request to the `/shares` endpoint of the API
 * defined by the `API_BASE_URL` and returns the response data.
 *
 * @async
 * @function getShares
 * @returns {Promise<Object>} A promise that resolves to an object containing the response data.
 * @throws {Error} Throws an error if the request fails.
 */
export const getShares = async (
  pagination: IPagination,
): Promise<IApiResponseShares> => {
  const { data } = await axios.get<{ data: IFinancialInstrument[] }>(
    `${API_BASE_URL}/shares`,
    {
      params: pagination,
    },
  );
  return { data: data.data };
};
