import getBook from "@/actions/get-book";
import getBooks from "@/actions/get-books";
import Box from "@/components/box";
import Container from "@/components/container";
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import Gallery from "./components/gallery/gallery";
import Info from "./components/info";
import SuggestedList from "./components/suggested-lists";

interface BookPageProps {
  params: {
    bookId: string;
  };
}

const BookPage = async ({ params }: BookPageProps) => {
  const book = await getBook(params.bookId);
  const suggestedBooks = await getBooks({ author: book?.author });

  return (
    <div>
      <Container className="bg-white rounded-lg my-4 px-4">
        <Box className="text-neutral-700 text-sm items-center mt-12">
          <Link href="/" className="flex items-center gap-2 ">
            <Home className="w-5 h-5" /> Main Page
          </Link>

          <ChevronRight className="w-5 h-5 text-muted-foreground" />
          <Link
            href="/explore"
            className="flex items-center gap-2 text-muted-foreground"
          >
            Books
          </Link>
        </Box>

        <div className="px-4 py-10 sm:px-6 lg:px-8 space-y-10">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/* Gallery section */}
            <Gallery images={book.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              {/* Info Section */}
              <Info book={book} />
            </div>
          </div>

          <SuggestedList books={suggestedBooks} />
        </div>
      </Container>
    </div>
  );
};

export default BookPage;
