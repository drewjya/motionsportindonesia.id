export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  serial_code: string;
  categories?: Category[];
};

export type Category = {
  id: number;
  name: string;
};

export type Cart = {
  id: number;
  quantity: number;
  product: Product;
};
