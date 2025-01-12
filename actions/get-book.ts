import { Books } from "@/types-db";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/books`;

const getBook = async (id: string): Promise<any> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getBook;

