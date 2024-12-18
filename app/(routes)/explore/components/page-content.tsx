"use client";

import Box from "@/components/box";
import { PopularContent } from "@/components/popular-content";
import { Books } from "@/types-db";
import { ChevronRight, Home, X } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

interface PageContentProps {
  books: Books[];
}

const PageContent = ({ books }: PageContentProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentParams = Object.fromEntries(searchParams.entries());

  const handleClick = (param: string) => {
    if (currentParams.hasOwnProperty(param)) {
      const newParams = { ...currentParams };
      delete newParams[param];
      const href = qs.stringifyUrl({
        url: "/explore",
        query: newParams,
      });
      router.push(href);
    }
  };
  return (
    <>
      <Box className="pt-4 pb-24 flex-col items-start">
        <Box className="text-neutral-700 text-sm items-center">
          <Link href={"/"} className="flex items-center gap-2">
            <Home className="w-4 h-4" />
            Main Page
          </Link>

          <ChevronRight className="w-5 h-5 text-muted-foreground" />
          <Link href={"/explore"} className="flex items-center gap-2">
          
            Books
          </Link>

          {searchParams.get("author") && (
            <>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
              <Link href="/explore" className="flex items-center gap-2 ">
                {searchParams.get("author")}
              </Link>
            </>
          )}
        </Box>

        <Box className="mt-8 flex-col items-start">
          {searchParams.get("author") && (
            <h2 className="flex items-center gap-2 text-3xl font-semibold text-neutral-600 ">
              {searchParams.get("author")}
            </h2>
          )}

          <Box className="gap-3 my-4">
            {currentParams &&
              Object.entries(currentParams).map(([key, value]) => (
                <div
                  key={key}
                  onClick={() => handleClick(key)}
                  className="px-4 py-1 cursor-pointer hover:shadow-md rounded-md bg-emerald-500/10 text-neutral-600 flex items-center gap-1"
                >
                  {value}
                  <X className="w-4 h-4" />
                </div>
              ))}
          </Box>
        </Box>
      </Box>

      <div className="grid grid-cols-2 lg:grid-cols-3 w-full h-full gap-4 gap-y-24">
        {books.length > 0 ? (
          <>
            {books.map((book) => (
              <PopularContent data={book} key={book.id} />
            ))}
          </>
        ) : (
          <>
            <Box className="items-center justify-center py-12 text-muted-foreground text-xl font-bold col-span-10">
              No Books Available
            </Box>
          </>
        )}
      </div>
    </>
  );
};

export default PageContent;
