import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList, addToStoredWishList } from '../../utility/adToDb';

const BookDetail = () => {
    const { bookId } = useParams();
    const data = useLoaderData();
    const id = parseInt(bookId);
    const book = data.find(book => book.bookId === id)
   const {bookId: currentbookId, image} = book;

   const handleMarkAsRead = (id) => {
    addToStoredReadList(id);
   }
   const handleMarkAsWishlist = (id) => {
    addToStoredWishList(id);
   }
    return (
        <div className='my-12'>
            <h2>Book Details: {bookId}</h2>
            <img className='w-36' src={image} alt="" />
            <br />
            <button onClick={() => handleMarkAsRead(id)} className="btn btn-outline mr-4 btn-accent">Mark AS Read</button>
            <button onClick={() => handleMarkAsWishlist(id)} className="btn btn-accent">Add TO WishList</button>
        </div>
    );
};

export default BookDetail;