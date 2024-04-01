export type TOperationBase = {
  sum: number;
  category: string;
  name: string;
  description: string;
};

export type TOperation = TOperationBase & { date: Date };
