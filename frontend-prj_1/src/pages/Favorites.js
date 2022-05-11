import { useContext } from "react";

import FavoritesContext from "../favorite/favorites-context";
import BookList from "../components/books/BookList";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>Nie masz żadnej ulubionej książki.</p>;
  } else {
    content = <BookList books={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1>Moje ulubione</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
