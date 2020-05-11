import React, { createContext, useState } from "react";

export const WishListContext = createContext();

const WishListContextProvider = (props) => {
  const [wishList, setWishList] = useState([]);

  const addNewBookToWishList = (book) => {
    setWishList((prevState) => [...prevState, book]);
  };

  const removeBookFromWishList = (book) => {
    setWishList((prevState) => prevState.filter((item) => item.id != book.id));
  };

  return (
    <WishListContext.Provider
      value={{ wishList, addNewBookToWishList, removeBookFromWishList }}
    >
      {props.children}
    </WishListContext.Provider>
  );
};

export default WishListContextProvider;
