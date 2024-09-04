import axios from 'axios';
import { API_BASE_URL } from '@/config';
import {
  IApiResponseShares,
  IFinancialInstrument,
  IPagination,
  IInstrument,
} from '@/typing';

/**
 * Fetches the list of shares from the API.
 *
 * This function makes a GET request to the `/shares` endpoint of the API
 * defined by the `API_BASE_URL` and returns the response data.
 *
 * @async
 * @function getStocks
 * @param {IPagination} pagination - An object containing pagination parameters.
 * @param {number} pagination.page - The page number to fetch.
 * @param {number} pagination.pageSize - The number of items to return per page.
 * @returns {Promise<IApiResponseShares>} A promise that resolves to an object containing the response data.
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

/**
 * Fetches a stock by its ticker symbol.
 *
 * This function makes a GET request to the `/sharesByTicker` endpoint of the API
 * defined by the `API_BASE_URL` and returns the response data.
 *
 * @async
 * @function getStockByTicker
 * @param {string} ticker - The ticker symbol of the stock to fetch.
 * @returns {Promise<{ data: IInstrument }>} A promise that resolves to an object containing the response data.
 * @throws {Error} Throws an error if the request fails.
 */
export const getStockByTicker = async (
  ticker: string,
): Promise<{ data: any }> => {
  const { data } = await axios.get<{
    data: IInstrument;
  }>(`${API_BASE_URL}/sharesByTicker`, {
    params: { ticker },
  });
  return { data };
};

/**
 * Fetches the latest price for a stock by its ticker symbol.
 *
 * This function makes a GET request to the `/lastPriceByTicker` endpoint of the API
 * defined by the `API_BASE_URL` and returns the response data.
 *
 * @async
 * @function getLastPriceByTicker
 * @param {string} ticker - The ticker symbol of the stock to fetch the latest price for.
 * @returns {Promise<{ data: IInstrument }>} A promise that resolves to an object containing the response data.
 * @throws {Error} Throws an error if the request fails.
 */
export const getLastPriceByTicker = async (
  ticker: string,
): Promise<{ data: any }> => {
  const { data } = await axios.get<{
    data: IInstrument;
  }>(`${API_BASE_URL}/lastPriceByTicker`, {
    params: { ticker },
  });
  return { data };
};

/**
 * Fetches the candlestick data for a stock by its ticker symbol.
 *
 * This function makes a GET request to the `/candlesByTicker` endpoint of the API
 * defined by the `API_BASE_URL` and returns the response data.
 *
 * @async
 * @function getCandlesByTicker
 * @param {string} ticker - The ticker symbol of the stock to fetch the candlestick data for.
 * @returns {Promise<{ data: IInstrument }>} A promise that resolves to an object containing the response data.
 * @throws {Error} Throws an error if the request fails.
 */
export const getCandlesByTicker = async (
  ticker: string,
): Promise<{ data: any }> => {
  const { data } = await axios.get<{
    data: IInstrument;
  }>(`${API_BASE_URL}/candlesByTicker`, {
    params: { ticker },
  });
  return { data };
};
