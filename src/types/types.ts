export interface ProductData {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
  shipping: {
    free_shipping?: boolean; // o ? torna a propriedade opcional
  };
  installments?: {
    amount?: number;
    quantity?: number;
  }
}