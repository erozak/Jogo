import { Exchange } from 'modules/Exchange';

export interface Transaction {
  id: Id;
  account: Id;
  catergory: Id;
  exchange: Exchange;
  amount: string;
  currency: string;
  content: string;
  memo: string;
}
