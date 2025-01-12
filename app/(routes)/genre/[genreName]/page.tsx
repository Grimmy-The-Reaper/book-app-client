import getBooks from "@/actions/get-books";
import SuggestedList from "../../explore/[bookId]/components/suggested-lists";

export default async function GenrePage({
  params
}: {
  params: { genreName: string }
}) {
const decodedGenreName = params.genreName ? decodeURIComponent(params.genreName) : '';
const books = await getBooks({ genre: decodedGenreName });



  
  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-extrabold mb-6 text-blue-700 border-b-2 border-blue-300 pb-2">
        Showing list of books in {decodedGenreName}
      </h1>
      <SuggestedList 
        isRelatedText={true}
        books={books}
      />
    </div>
  );
} 