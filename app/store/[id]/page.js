import { getBookById } from "@/db/queries";
import BookDetails from "@/app/component/books/BookDetails";

const BookDetailsPage = async ({params: {id}}) => {
  const book = await getBookById(id);
  console.log(book);
  return(
    <BookDetails book={book} />
  )
}

export default  BookDetailsPage;