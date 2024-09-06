import React, { FC } from 'react';
// @ts-ignore
import CanvasJSReact from '@canvasjs/react-charts';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

interface CandleData {
  open: { units: string; nano: number };
  high: { units: string; nano: number };
  low: { units: string; nano: number };
  close: { units: string; nano: number };
  volume: string;
  time: string;
  isComplete: boolean;
  candleSource: string;
}

interface CandlesProps {
  data: {
    candles: CandleData[];
  };
  currency?: string;
}

const Candles: FC<CandlesProps> = ({ data, currency }) => {
  const dataPoints = data.candles.map((candle) => ({
    x: new Date(candle.time),
    y: [
      parseFloat(`${candle.open.units}.${candle.open.nano}`),
      parseFloat(`${candle.high.units}.${candle.high.nano}`),
      parseFloat(`${candle.low.units}.${candle.low.nano}`),
      parseFloat(`${candle.close.units}.${candle.close.nano}`),
    ],
  }));

  const options = {
    theme: 'light2',
    axisX: {
      valueFormatString: 'DD MMM',
    },
    axisY: {
      prefix: currency,
    },
    data: [
      {
        type: 'candlestick',
        yValueFormatString: `${currency} ###0.00`,
        xValueFormatString: 'DD MMM YYYY',
        dataPoints: dataPoints,
      },
    ],
  };

  return <CanvasJSChart options={options} />;
};

export default Candles;
