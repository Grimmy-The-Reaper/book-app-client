



import qs from "query-string";

export const fetchBillboard = async ({ billboardId

  }: any) => {
    try {

        if(!billboardId) return null;

        console.log(billboardId,"billboardId")
    
  
      //from process.env.NEXT_PUBLIC_API_URL take last text after /api
      const hitUrl :any = `${process.env.NEXT_PUBLIC_API_URL}/billboards/${billboardId}`;
      const apiUrl :any = `${process.env.NEXT_PUBLIC_API_URL}`;
      console.log(hitUrl,"hitUrl")
      const storeId = apiUrl.split('/').pop();

      const url = qs.stringifyUrl({
        url: hitUrl,
        query: {
          storeId,
          billboardId
        },
      });
      
    
      const response = await fetch(url);
      return response.json();
  
  
    } catch (error:any) {
      throw error?.message;
    }
  }; 
  