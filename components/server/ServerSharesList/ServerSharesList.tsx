import { FinancialInstrument } from '@/typing';
import { ServerSharePreview } from '../ServerSharePreview';

type Props = {
  instruments: FinancialInstrument[];
};

export const ServerSharesList = ({ instruments }: Props) => {
  return instruments.map((item, key) => {
    return <ServerSharePreview value={item}  key={key}></ServerSharePreview>;
  })
};
