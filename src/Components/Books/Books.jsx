import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setbooks] = useState([])

    useEffect(() => {
        fetch('booksData.json')
        .then(res => res.json())
        .then(data => setbooks(data))
    }, [])
    return (
        <div>
            <h1 className="font-bold text-4xl text-center">Books</h1>
            <h1>Books: {books.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    books.map(book => <Book book={book} key={book.bookId}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;