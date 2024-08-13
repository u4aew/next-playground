import { getLastPriceByTicker, getShares, getSharesByTicker } from '@/actions/shares';
import { IApiResponseShares, IPagination } from '@/typing';

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


  handleError(err: Error) {}
}

export const serviceShares = new ServiceShares();
