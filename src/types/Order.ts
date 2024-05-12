export interface IOrderWithLength {
  length: number;
  totalPages: number;
  data: IOrder[];
}

export interface IOrder {
  id: number;
  name: string;
  lastname: string;
  phone: string;
  address: string;
  price: number;
  read: boolean;
  createdAt: Date;
  updatedAt: Date;
}
