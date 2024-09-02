import axios from 'axios';
import { API_BASE_URL } from '@/config';
import {
  IApiResponseShares,
  IFinancialInstrument,
  IPagination,
  IApiResponseShareItem,
  IInstrument,
} from '@/typing';

/**
 * Fetches the list of shares from the API.
 *
 * This function makes a GET request to the /shares endpoint of the API
 * defined by the API_BASE_URL and returns the response data.
 *
 * @async
 * @function getStocks
 * @param {IPagination} pagination - The pagination parameters for the request.
 * @returns {Promise<IApiResponseShares>} A promise that resolves to an object containing the list of shares and pagination information.
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
 * Fetches details of a specific stock by its ticker.
 *
 * This function makes a GET request to the /sharesByTicker endpoint of the API
 * and returns the detailed information about the stock.
 *
 * @async
 * @function getStockByTicker
 * @param {string} ticker - The ticker symbol of the stock.
 * @returns {Promise<IInstrument>} A promise that resolves to an object containing the stock details.
 * @throws {Error} Throws an error if the request fails.
 */
export const getStockByTicker = async (
  ticker: string,
): Promise<IInstrument> => {
  const { data } = await axios.get<{
    data: IInstrument;
  }>(`${API_BASE_URL}/sharesByTicker`, {
    params: { ticker },
  });
  return data.data;
};

/**
 * Fetches the last price of a stock by its ticker.
 *
 * This function makes a GET request to the /lastPriceByTicker endpoint of the API
 * and returns the last known price of the stock.
 *
 * @async
 * @function getLastPriceByTicker
 * @param {string} ticker - The ticker symbol of the stock.
 * @returns {Promise<IInstrument>} A promise that resolves to an object containing the last price of the stock.
 * @throws {Error} Throws an error if the request fails.
 */
export const getLastPriceByTicker = async (
  ticker: string,
): Promise<IInstrument> => {
  const { data } = await axios.get<{
    data: IInstrument;
  }>(`${API_BASE_URL}/lastPriceByTicker`, {
    params: { ticker },
  });
  return data.data;
};

/**
 * Fetches the candle data for a stock by its ticker.
 *
 * This function makes a GET request to the /candlesByTicker endpoint of the API
 * and returns the candle data for the stock.
 *
 * @async
 * @function getCandlesByTicker
 * @param {string} ticker - The ticker symbol of the stock.
 * @returns {Promise<IInstrument>} A promise that resolves to an object containing the candle data.
 * @throws {Error} Throws an error if the request fails.
 */
export const getCandlesByTicker = async (
  ticker: string,
): Promise<IInstrument> => {
  const { data } = await axios.get<{
    data: IInstrument;
  }>(`${API_BASE_URL}/candlesByTicker`, {
    params: { ticker },
  });
  return data.data;
};
