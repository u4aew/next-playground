import {
  getCandlesByTicker,
  getLastPriceByTicker,
  getStockByTicker,
  getStocks,
} from '@/actions/shares';
import { IPagination, IApiResponseShares, IInstrument } from '@/typing';

/**
 * Service class for interacting with stock data.
 *
 * This class provides methods to fetch stock lists, details, prices, and candle data.
 */
class ServiceStocks {
  constructor() {}

  /**
   * Fetches a list of stocks with pagination.
   *
   * @param {IPagination} pagination - The pagination parameters.
   * @returns {Promise<IApiResponseShares | undefined>} A promise that resolves to the list of stocks or undefined if an error occurs.
   */
  async getList({
    start = 1,
    end = 24,
  }: IPagination): Promise<IApiResponseShares | undefined> {
    try {
      return await getStocks({ start, end });
    } catch (e) {
      this.handleError(e);
    }
  }

  /**
   * Fetches details of a stock by its ticker.
   *
   * @param {string} ticker - The ticker symbol of the stock.
   * @returns {Promise<IInstrument | undefined>} A promise that resolves to the stock details or undefined if an error occurs.
   */
  async getByTicker(ticker: string): Promise<IInstrument | undefined> {
    try {
      return await getStockByTicker(ticker);
    } catch (e) {
      this.handleError(e);
    }
  }

  /**
   * Fetches the last price of a stock by its ticker.
   *
   * @param {string} ticker - The ticker symbol of the stock.
   * @returns {Promise<IInstrument | undefined>} A promise that resolves to the last price or undefined if an error occurs.
   */
  async getLastPriceByTicker(ticker: string): Promise<IInstrument | undefined> {
    try {
      return await getLastPriceByTicker(ticker);
    } catch (e) {
      this.handleError(e);
    }
  }

  /**
   * Fetches the candle data for a stock by its ticker.
   *
   * @param {string} ticker - The ticker symbol of the stock.
   * @returns {Promise<IInstrument | undefined>} A promise that resolves to the candle data or undefined if an error occurs.
   */
  async getCandlesByTicker(ticker: string): Promise<IInstrument | undefined> {
    try {
      return await getCandlesByTicker(ticker);
    } catch (e) {
      this.handleError(e);
    }
  }

  /**
   * Handles errors by logging them.
   *
   * @param {any} err - The error to handle.
   */
  private handleError(err: any) {
    console.error('An error occurred:', err);
  }
}

export const serviceStocks = new ServiceStocks();
