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
}

const AuthorInfo = ({ authorName, books, author }: AuthorInfoProps) => {
    console.log(author,"author")
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Books by {authorName}</h1>

      {author?.authorInfo && (
        <div className="mb-8 p-6 bg-gray-50 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">About the Author</h2>
          <p className="text-neutral-700 leading-relaxed">{author.authorInfo}</p>
        </div>
      )}

      <SuggestedList books={books} isRelatedText={true} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        
      </div>
    </div>
  );
};

export default AuthorInfo;