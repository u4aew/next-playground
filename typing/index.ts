export interface IBrand {
  bg: string;
  color: string;
}

export interface IFinancialInstrument {
  ticker: string;
  name: string;
  country: string;
  brand: IBrand;
}

export interface ILink {
  name: string;
  url: string;
}

export interface IColumn {
  title: string;
  links: ILink[];
}

export interface ICompany {
  name: string;
  copyright: string;
}

export interface IFooterData {
  company: ICompany;
  columns: IColumn[];
}

export interface IApiResponseFooter {
  data: IFooterData;
}

export interface IApiResponseShares {
  data: IFinancialInstrument;
}
