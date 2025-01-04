import { Genre } from "@/types-db";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/genres`;

const getGenres = async (): Promise<Genre[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getGenres;

// import { Genre } from "@/types-db";  // Importing the Genre type from your types

// const URL = `${process.env.NEXT_PUBLIC_API_URL}/genres`; // Constructing the API URL using an environment variable

// const getGenres = async (): Promise<Genre[]> => {
//   try {
//     const res = await fetch(URL);

//     if (!res.ok) {
//       throw new Error(`Failed to fetch genres: ${res.status} ${res.statusText}`);
//     }

//     return res.json(); // Return the genres as JSON
//   } catch (error) {
//     console.error("Error fetching genres:", error); // Log any errors
//     throw new Error("An error occurred while fetching genres.");
//   }
// };

// export default getGenres; // Export the function for use in other parts of the application
