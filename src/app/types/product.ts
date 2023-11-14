export type ProductPayload = {
  status: string;
  date: string;
  productsList: [
    {
      id: number;
      title: string;
      description: string;
      image: string;
      quantity: number;
      productCategory: string;
    }
  ];
};

export type Product = {
  id: number;
  title: string;
  description: string;
  image: string;
  quantity: number;
  productCategory: string;
};
