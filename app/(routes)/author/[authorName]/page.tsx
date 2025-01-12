import getAuthors from "@/actions/get-authors";
import AuthorInfo from "./authorInfo";
import getBooks from "@/actions/get-books";

export default async function AuthorPage({
  params
}: {
  params: { authorName: string }
}) {

  const authors = await getAuthors();
  console.log(authors,"authors")
  const author = authors.find((author: any) => author.name === params.authorName);
  console.log(author,"author")
  const books = await getBooks({ author: author?.name });




  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8">
      <AuthorInfo authorName={params.authorName} books={books} author={author} />
    </div>
  );
}