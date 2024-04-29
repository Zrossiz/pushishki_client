export interface IBasketItem {
  id: number;
  productId: number;
  orderId: number;
  quantity: number;
  price: number;
  color: string | null;
  createdAt: Date;
  updatedAt: Date;
  Product: {
    name: string;
  };
}
