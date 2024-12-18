
"use client";

import Box from "@/components/box";
import { cn } from "@/lib/utils";
import { Genre } from "@/types-db";
import { Check } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

interface GenresFiltersProps {
    genres: Genre[];
}

const GenresFilters = ({ genres }: GenresFiltersProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleClick = (genre: string) => {
    const currentParams = Object.fromEntries(searchParams.entries());

    if (currentParams.genre === genre) {
      delete currentParams.genre;
    } else {
      currentParams.genre = genre;
    }

    const href = qs.stringifyUrl({
      url: "/explore",
      query: currentParams,
    });

    router.push(href);
  };

  return (
    <Box className="flex-col gap-2 border-b pb-4 cursor-pointer">
      <h2 className="text-xl font-semibold text-neutral-700">Genre</h2>
      <Box className="flex-col gap-2 mt-2">
        {genres?.map((genre) => (
          <div
            onClick={() => handleClick(genre.name)}
            key={genre.id}
            className={cn(
              "text-sm font-semibold text-neutral-500 flex items-center gap-2",
              genre.name === searchParams.get("genre") && "text-green-400"
            )}
          >
            <p>
              {genre.name} ({genre.value})
            </p>
            {genre.name === searchParams.get("genre") && (
              <Check className="w-4 h-4 text-hero" />
            )}
          </div>
        ))}
      </Box>
    </Box>
  );
};

export default GenresFilters;
