import getAuthors from "@/actions/get-authors";
import AuthorInfo from "./authorInfo";
import getBooks from "@/actions/get-books";
import { fetchBillboard } from "./actions";

export default async function AuthorPage({
  params
}: {
  params: { authorName: string }
}) {

const decodedAuthorName = params.authorName ? decodeURIComponent(params.authorName) : '';

  const authors = await getAuthors();
  const author = authors.find((author: any) => author.name === decodedAuthorName);
  console.log(author,"author is here")
  const books = await getBooks({ author: decodedAuthorName });
  const getBillboard= await fetchBillboard({billboardId:author?.billboardId});
  




  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8">
      <AuthorInfo authorName={decodedAuthorName} books={books} author={author} billboard={getBillboard} />
    </div>
  );
}