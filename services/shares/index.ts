import { getShares } from '@/actions/shares';
import { IApiResponseShares, IPagination } from '@/typing';

class ServiceShares {
  loading: boolean = false;

  constructor() {}

  async getList({ page = 1 }: IPagination) {
    try {
      const res = await getShares({ page });
      return res;
    } catch (e) {}
  }

  handleError(err: Error) {}
}

export const serviceShares = new ServiceShares();
