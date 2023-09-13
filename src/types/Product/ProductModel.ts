export type Product = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: string;
  shippingMethod: string;
  isFavorite?: boolean;
  total?:number
};
