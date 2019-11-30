import { Exchange } from 'modules/Exchange';

export interface Transfer {
  id: Id;
  sourceAccount: Id;
  targetAccount: Id;
  exchange: Exchange;
  amount: string;
  currency: string;
  fee?: string;
}
