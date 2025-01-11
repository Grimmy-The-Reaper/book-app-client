import axios from "axios";
import qs from "query-string";


const URL = `${process.env.NEXT_PUBLIC_API_URL}/rate`;

interface RateBookParams {
  bookId: string;
  rating: number;
  userId: string;
}

export const rateBook = async ({ bookId, rating, userId }: RateBookParams) => {
  try {

    //from process.env.NEXT_PUBLIC_API_URL take last text after /api
    const apiUrl :any = process.env.NEXT_PUBLIC_API_URL;
    const storeId = apiUrl.split('/').pop();

    


      //make POST request

    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

      },
      body: JSON.stringify({ userId, bookId, rating, storeId }),
    }).catch((error:any) => {
        console.error(error);
        throw error?.message;
    });

    return response.json();



   

  } catch (error:any) {
    console.log(error);
    throw error?.message;
  }
}; 


export const getRatingBook = async ({ bookId,  userId  }: any) => {
  try {

    //from process.env.NEXT_PUBLIC_API_URL take last text after /api
    const apiUrl :any = process.env.NEXT_PUBLIC_API_URL;
    const storeId = apiUrl.split('/').pop();

    


      //make POST request

    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

      },
      body: JSON.stringify({ userId, bookId, getRating : true, storeId }),
    }).catch((error:any) => {
        console.error(error);
        throw error?.message;
    });

    return response.json();



   

  } catch (error:any) {
    console.log(error);
    throw error?.message;
  }
}; 