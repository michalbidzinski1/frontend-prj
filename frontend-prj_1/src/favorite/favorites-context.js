import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favouriteBook) => {},
  removeFavorite: (bookId) => {},
  itemIsFavorite: (bookId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favouriteBook) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favouriteBook);
    });
  }

  function removeFavoriteHandler(bookId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((book) => book.id !== bookId);
    });
  }

  function itemIsFavoriteHandler(bookId) {
    return userFavorites.some((book) => book.id === bookId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
