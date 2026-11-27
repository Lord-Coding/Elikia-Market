export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  unit: string;
  image: string;
  category: string;
  badge?: string;
};

export type Category = {
  id: string;
  name: string;
  image: string;
};
