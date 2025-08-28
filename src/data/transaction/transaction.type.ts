export interface TransactionDto {
  tid:      number;
  status:   string;
  total:    number;
  buyerUid: number;
  datetime: string;
  items:    Item[];
}

export interface Item {
  tpid:     number;
  quantity: number;
  subtotal: number;
  product:  Product;
}

export interface Product {
  pid:         number;
  name:        string;
  category:    string;
  description: string;
  imageUrl:    string;
  price:       number;
  stock:       number;
}
