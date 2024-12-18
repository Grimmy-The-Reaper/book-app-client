"use client";

import Box from "@/components/box";
import { cn } from "@/lib/utils";
import { Author } from "@/types-db";
import { Check } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

interface AuthorFiltersProps {
  authors: Author[];
}

const AuthorFilters = ({ authors }: AuthorFiltersProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleClick = (author: string) => {
    const currentParams = Object.fromEntries(searchParams.entries());

    if (currentParams.author === author) {
      delete currentParams.author;
    } else {
      currentParams.author = author;
    }

    const href = qs.stringifyUrl({
      url: "/explore",
      query: currentParams,
    });

    router.push(href);
  };

  return (
    <Box className="flex-col gap-2 border-b pb-4 cursor-pointer">
      <h2 className="text-xl font-semibold text-neutral-700">Author</h2>
      <Box className="flex-col gap-2 mt-2">
        {authors?.map((author) => (
          <div
            onClick={() => handleClick(author.name)}
            key={author.id}
            className={cn(
              "text-sm font-semibold text-neutral-500 flex items-center gap-2",
              author.name === searchParams.get("author") && "text-hero"
            )}
          >
            <p>{author.name}</p>
            {author.name === searchParams.get("author") && (
              <Check className="w-4 h-4 text-hero" />
            )}
          </div>
        ))}
      </Box>
    </Box>
  );
};

export default AuthorFilters;
