import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../utility/addToDb';
import Book from '../Book/Book';

const ListedBooks = () => {
    const [readlist, setReadList] = useState([])
    const allBooks = useLoaderData();

    useEffect(()=>{
        const StoredReadList = getStoredReadList();
        const storedReadListInt = StoredReadList.map(id => parseInt(id));
        console.log(StoredReadList, storedReadListInt, allBooks)

        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));

        setReadList(readBookList)
    }, [])
  return (
    <div>
      <h3 className="text-3xl my-10">Listed Books</h3>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>
        <TabPanel>
        <h2 className='text-2xl'>Books I read: {readlist.length}</h2>
        {
                readlist.map(book => <Book key={book.bookId} book={book}></Book>)
        }
        </TabPanel>
        <TabPanel>
          <h2 className='text-2xl'>My wish list</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default ListedBooks;

