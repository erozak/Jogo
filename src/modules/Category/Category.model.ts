export interface Category {
  id: Id;
  type: 'income' | 'expense';
  parent: Id | null;
  name: string;
}
