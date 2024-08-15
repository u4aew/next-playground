import React from 'react';
import { Metadata, ResolvingMetadata } from 'next';
import { serviceShares } from '@/services';
import { ShareIntro } from '@/components/ShareIntro';
import { BuyStock } from '@/components/BuyStock';
import Candles from '@/components/Candles/Candles';
import styles from './styles.module.scss';

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const shareData = await serviceShares.getByTicker(params.slug);
  const dataIntro = shareData?.data;

  if (!dataIntro) {
    return {
      title: 'Stock not found',
    };
  }

  const metaDescription = `Information about stock ${dataIntro.name} (${dataIntro.ticker}). Sector: ${dataIntro.sector}, Country: ${dataIntro.countryOfRisk}`;
  const keywords = `${dataIntro.name}, ${dataIntro.ticker}, ${dataIntro.sector}, ${dataIntro.countryOfRiskName}, stock, invest`;
  const canonicalUrl = `https://stock-exchange.fancy-app.site/${params.slug}`;

  return {
    title: `${dataIntro.name} (${dataIntro.ticker}) - Information about stock`,
    description: metaDescription,
    keywords: keywords,
    openGraph: {
      title: `${dataIntro.name} (${dataIntro.ticker}) - Information about stock`,
      description: metaDescription,
      type: 'website',
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

const PageStock = async ({ params }: Props) => {
  try {
    const [shareData, lastPriceData, candlesData] = await Promise.all([
      serviceShares.getByTicker(params.slug),
      serviceShares.getLastPriceByTicker(params.slug),
      serviceShares.getCandlesByTicker(params.slug),
    ]);

    const dataIntro = shareData?.data;
    const dataLastPrice = lastPriceData?.data;
    const dataCandlesByTicker = candlesData?.data;

    return (
      <div className={styles.page}>
        <div className={styles.main}>
          <div className={styles.intro}>
            {dataIntro && <ShareIntro value={dataIntro} />}
          </div>
          {dataCandlesByTicker && <Candles data={dataCandlesByTicker} />}
        </div>
        <div className={styles.side}>
          <BuyStock info={dataLastPrice} />
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error loading stock data:', error);
    return <div>Error loading stock data</div>;
  }
};

export default PageStock;
