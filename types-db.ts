export interface Books {
    id: string;
    name: string;
    price: number;
    images: { url: string }[];
    isFeatured: boolean;
    isArchived: boolean;
    author: string;
    genre: string;
    qty: number;
  }
  
  export interface Author {
    id: string;
    billboardId: string;
    billboardLabel: string;
    name: string;
  }
  
  export interface Genre {
    id: string;
    name: string;
    value: string;
  }
  
  export interface Orders {
    id: string;
    isPaid: boolean;
    phone: string;
    orderItems: Books[];
    address: string;
    order_status: string;
    userId: string;
  }
  