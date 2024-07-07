import { FinancialInstrument } from '@/typing';
import { ServerSharePreview } from '../SharePreview';

type Props = {
  instruments: FinancialInstrument[];
};

export const SharesList = ({ instruments }: Props) => {
  return instruments.map((item, key) => {
    return <ServerSharePreview value={item}  key={key}></ServerSharePreview>;
  })
};
