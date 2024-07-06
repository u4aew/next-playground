export interface Nominal {
  currency: string;
  units: string;
  nano: number;
}

export interface MinPriceIncrement {
  units: string;
  nano: number;
}

export interface Brand {
  logoName: string;
  logoBaseColor: string;
  textColor: string;
}

export interface FinancialInstrument {
  figi: string;
  ticker: string;
  classCode: string;
  isin: string;
  lot: number;
  currency: string;
  shortEnabledFlag: boolean;
  name: string;
  exchange: string;
  issueSize: string;
  countryOfRisk: string;
  countryOfRiskName: string;
  sector: string;
  issueSizePlan: string;
  nominal: Nominal;
  tradingStatus: string;
  otcFlag: boolean;
  buyAvailableFlag: boolean;
  sellAvailableFlag: boolean;
  divYieldFlag: boolean;
  shareType: string;
  minPriceIncrement: MinPriceIncrement;
  apiTradeAvailableFlag: boolean;
  uid: string;
  realExchange: string;
  positionUid: string;
  assetUid: string;
  instrumentExchange: string;
  forIisFlag: boolean;
  forQualInvestorFlag: boolean;
  weekendFlag: boolean;
  blockedTcaFlag: boolean;
  liquidityFlag: boolean;
  first1minCandleDate: string;
  first1dayCandleDate: string;
  brand: Brand;
}
