"use client";

import { PopularContent } from "@/components/popular-content";
import { Books } from "@/types-db";
import { useParams } from "next/navigation";

interface SuggestedListProps {
  books: Books[];
}

const SuggestedList = ({ books }: SuggestedListProps) => {
  const { bookId } = useParams();
  return (
    <>
      <h2 className="text-3xl text-neutral-600 font-semibold">
        Related Books
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-20 md:gap-x-4 md:gap-y-24 my-6 py-12">
        {books
          .filter((item) => item.id !== bookId)
          .map((item) => (
            <PopularContent key={item.id} data={item} />
          ))}
      </div>
    </>
  );
};

export default SuggestedList;


// "use client";

// import { PopularContent } from "@/components/popular-content";
// import { Books } from "@/types-db";
// import { useParams } from "next/navigation";

// interface SuggestedListProps {
//   books: Books[];
// }

// const SuggestedList = ({ books }: SuggestedListProps) => {
//   const { bookId } = useParams();

//   // Get the current book based on the bookId
//   const currentBook = books.find((book) => book.id === bookId);

//   // Filter books based on the current book's author or genre
//   const relatedBooks = books.filter((book) => {
//     // Ensure the current book is not included in the related books list
//     if (book.id === bookId) return false;

//     // Check if the book has the same author or any matching genres
//     const isSameAuthor = book.author === currentBook?.author;
//     const hasMatchingGenres = book.genre.some((genre) =>
//       currentBook?.genre.includes(genre)
//     );

//     return isSameAuthor || hasMatchingGenres;
//   });

//   return (
//     <>
//       <h2 className="text-3xl text-neutral-600 font-semibold">
//         Related Books
//       </h2>

//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-20 md:gap-x-4 md:gap-y-24 my-6 py-12">
//         {relatedBooks.map((item) => (
//           <PopularContent key={item.id} data={item} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default SuggestedList;
