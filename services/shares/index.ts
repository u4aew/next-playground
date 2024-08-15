import {
  getLastPriceByTicker,
  getShares,
  getSharesByTicker,
  getCandlesByTicker,
} from '@/actions/shares';
import { IPagination } from '@/typing';

class ServiceShares {
  loading: boolean = false;

  constructor() {}

  async getList({ start = 1, end = 10 }: IPagination) {
    try {
      const res = await getShares({ start, end });
      return res;
    } catch (e) {}
  }

  async getByTicker(ticker: string) {
    try {
      const res = await getSharesByTicker(ticker);
      return res;
    } catch (e) {}
  }

  async getLastPriceByTicker(ticker: string) {
    try {
      const res = await getLastPriceByTicker(ticker);
      return res;
    } catch (e) {}
  }

  async getCandlesByTicker(ticker: string) {
    try {
      const res = await getCandlesByTicker(ticker);
      return res;
    } catch (e) {}
  }

  handleError(err: Error) {}
}

export const serviceShares = new ServiceShares();
