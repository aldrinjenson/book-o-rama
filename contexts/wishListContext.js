import React, { createContext, useState } from "react";

export const WishListContext = createContext();

const WishListContextProvider = (props) => {
  const [wishList, setWishList] = useState([]);

  const addNewBookToWishList = (book) => {
    console.log(book)
    setWishList((prevState) => [...prevState, book]);
  };

  return (
    <WishListContext.Provider value={{ wishList, addNewBookToWishList }}>
      {props.children}
    </WishListContext.Provider>
  );
};

export default WishListContextProvider;
