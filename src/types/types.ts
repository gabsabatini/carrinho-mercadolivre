export interface ProductData {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
  shipping: {
    free_shipping: boolean;
  };
  installments: {
    amount: number;
    quantity: number;
  }
}