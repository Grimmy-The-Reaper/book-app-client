import { Orders } from "@/types-db";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/orders`;

console.log(URL,"url");

const getOrders = async (): Promise<Orders[]> => {
  const res = await fetch(URL);
  console.log(res,"res")

  return res.json();
};

export default getOrders;
