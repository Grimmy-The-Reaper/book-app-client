"use client";

import { Books } from "@/types-db";
import { Box } from "lucide-react";
import SuggestedList from "../../explore/[bookId]/components/suggested-lists";

interface AuthorInfoProps {
  authorName: string;
  books: Books[];
  author?: {
    authorInfo?: string;
  };
  billboard?: {
    imageUrl?: string;
  };
}

const AuthorInfo = ({ authorName, books, author, billboard }: AuthorInfoProps) => {
  console.log(billboard, "billboard data is here");
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Books by {authorName}</h1>

      <div className="flex flex-col md:flex-row mb-8">
        {author?.authorInfo && (
          <div className="p-6 md:w-1/2 md:mr-4">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">About the Author</h2>
            <p className="text-neutral-700 leading-relaxed">{author.authorInfo}</p>
          </div>
        )}

        {billboard?.imageUrl && (
          <div className="p-4 flex justify-center md:w-1/2 md:ml-4">
            <img 
              src={billboard.imageUrl} 
              alt={`${authorName} Billboard`} 
              className="object-cover rounded-lg" 
              style={{ width: '400px', height: '400px' }}
            />
          </div>
        )}
      </div>

      <SuggestedList books={books} isRelatedText={true} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        
      </div>
    </div>
  );
};

export default AuthorInfo;