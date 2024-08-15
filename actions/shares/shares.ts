import axios from 'axios';
import { API_BASE_URL } from '@/config';
import {
  IApiResponseShares,
  IFinancialInstrument,
  IPagination,
  IApiResponseShareItem,
  IInstrument,
} from '@/typing';

// todo need fix type and docs

/**
 * Fetches the list of shares from the API.
 *
 * This function makes a GET request to the `/shares` endpoint of the API
 * defined by the `API_BASE_URL` and returns the response data.
 *
 * @async
 * @function getStocks
 * @returns {Promise<Object>} A promise that resolves to an object containing the response data.
 * @throws {Error} Throws an error if the request fails.
 */
export const getStocks = async (
  pagination: IPagination,
): Promise<IApiResponseShares> => {
  const { data } = await axios.get<{
    data: IFinancialInstrument[];
    start: number;
    end: number;
    total: number;
  }>(`${API_BASE_URL}/shares`, {
    params: pagination,
  });
  return {
    data: data.data,
    start: data.start,
    end: data.end,
    total: data.total,
  };
};

export const getStockByTicker = async (ticker: string): Promise<any> => {
  const { data } = await axios.get<{
    data: IInstrument;
  }>(`${API_BASE_URL}/sharesByTicker`, {
    params: { ticker },
  });
  return {
    data,
  };
};

export const getLastPriceByTicker = async (ticker: string): Promise<any> => {
  const { data } = await axios.get<{
    data: IInstrument;
  }>(`${API_BASE_URL}/lastPriceByTicker`, {
    params: { ticker },
  });
  return {
    data,
  };
};

export const getCandlesByTicker = async (ticker: string): Promise<any> => {
  const { data } = await axios.get<{
    data: IInstrument;
  }>(`${API_BASE_URL}/candlesByTicker`, {
    params: { ticker },
  });
  return {
    data,
  };
};
