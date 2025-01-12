// // import qs from "query-string";

// // import { Books } from "@/types-db";

// // const URL = `${process.env.NEXT_PUBLIC_API_URL}/books`;

// // interface Query {
// //   genre?: string;
// //   isFeatured?: boolean;
// //   author?: string;
// // }

// // const getBooks = async (query: Query): Promise<Books[]> => {
// //   const url = qs.stringifyUrl({
// //     url: URL,
// //     query: {
// //       genre: query.genre,
// //       isFeatured: query.isFeatured,
// //       author: query.author,
// //     },
// //   });

// //   const res = await fetch(url);

// //   return res.json();
// // };

// // export default getBooks;


// // import qs from "query-string";
// // import { Books } from "@/types-db";

// // const URL = `${process.env.NEXT_PUBLIC_API_URL}/books`;

// // interface Query {
// //   genre?: string;
// //   isFeatured?: boolean;
// //   author?: string;
// // }

// // const getBooks = async (query: Query): Promise<Books[]> => {
// //   const url = qs.stringifyUrl({
// //     url: URL,
// //     query: {
// //       genre: query.genre,
// //       isFeatured: query.isFeatured,
// //       author: query.author,
// //     },
// //   });

// //   try {
// //     const res = await fetch(url);

// //     if (!res.ok) {
// //       throw new Error(`Failed to fetch books: ${res.status} ${res.statusText}`);
// //     }

// //     return await res.json();
// //   } catch (error) {
// //     console.error("Error fetching books:", error);
// //     throw new Error("An error occurred while fetching books data.");
// //   }
// // };

// // export default getBooks;


import qs from "query-string";
import { Books } from "@/types-db";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/books`;

interface Query {
  genre?: string;
  isFeatured?: boolean;
  author?: string;
}

const getBooks = async (query: any): Promise<Books[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      genre: query.genre,
      isFeatured: query.isFeatured,
      author: query.author,
    },
  });


  // console.log("API URL:", URL);          // Log to ensure environment variable is set
  // console.log("Formatted URL:", url);     // Log the final URL

// try wala code eta


  const res = await fetch(url);

  return res.json();
  
};

export default getBooks;


//   // try {
//   //   const res = await fetch(url);

//   //   if (!res.ok) {
//   //     throw new Error(`Failed to fetch books: ${res.status} ${res.statusText}`);
//   //   }

//   //   const data = await res.json();

//   //   if (!Array.isArray(data)) {           // Check if the data is an array as expected
//   //     throw new Error("Unexpected response format");
//   //   }

//   //   return data as Books[];

//   // } catch (error) {
//   //   console.error("Error fetching books:", error);
//   //   throw new Error("An error occurred while fetching books data.");
//   // }

// import qs from "query-string";
// import { Books } from "@/types-db";

// const URL = `${process.env.NEXT_PUBLIC_API_URL}/books`;

// interface Query {
//   genre?: string; // Accept an array of genres
//   isFeatured?: boolean;
//   author?: string;
// }

// const getBooks = async (query: Query): Promise<Books[]> => {
//   const url = qs.stringifyUrl({
//     url: URL,
//     query: {
//       genre: query.genre, // Array of genres (handled automatically by qs)
//       isFeatured: query.isFeatured,
//       author: query.author,
//     },
//   });

//   try {
//     const res = await fetch(url);

//     if (!res.ok) {
//       throw new Error(`Failed to fetch books: ${res.status} ${res.statusText}`);
//     }

//     const data = await res.json();

//     if (!Array.isArray(data)) {
//       throw new Error("Unexpected response format: data is not an array");
//     }

//     return data as Books[];
//   } catch (error) {
//     console.error("Error fetching books:", error);
//     throw new Error("An error occurred while fetching books data.");
//   }
// };

// export default getBooks;


  