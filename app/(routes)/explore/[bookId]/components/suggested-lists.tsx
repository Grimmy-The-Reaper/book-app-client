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
