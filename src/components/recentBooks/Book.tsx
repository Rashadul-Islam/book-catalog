import { IBook } from "../../types/bookType";

interface IProps {
    product: IBook;
  }

const Book = ({book}:IProps) => {
    console.log(book)
    return (
        <div>
            
        </div>
    );
};

export default Book;