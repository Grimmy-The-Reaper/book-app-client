import getAuthors from "@/actions/get-authors";
import Box from "@/components/box";
import Container from "@/components/container";
import FilterContainer from "@/components/filter-container";
import AuthorFilters from "./components/author-filters";
import getGenres from "@/actions/get-genres";
import GenresFilters from "./components/genre-filters";
import getBooks from "@/actions/get-books";
import PageContent from "./components/page-content";

export const revalidate = 0;

interface ExploreProps {
  searchParams: {
    genre?: string;
    isFeatured?: boolean;
    author?: string;
  };
}

const ExplorePage = async ({ searchParams }: ExploreProps) => {
  const authors = await getAuthors();
  const genres = await getGenres();
  const books = await getBooks({
    genre: searchParams?.genre,
    isFeatured: searchParams?.isFeatured,
    author: searchParams?.author,
  });
  return (
    <Container className="px-4 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-12 py-12 gap-2">
        <div className="hidden md:block col-span-2 border-r border-gray-100 top-24">
          <FilterContainer>
            <AuthorFilters authors={authors} />
            <GenresFilters genres={genres} />
          </FilterContainer>
        </div>
        <Box className="col-span-12 md:col-span-10 flex-col items-start justify-start w-full">
          <PageContent books={books} />
        </Box>
      </div>
    </Container>
  );
};

export default ExplorePage;
