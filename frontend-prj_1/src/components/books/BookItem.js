import { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "../ui/Card";
import classes from "./BookItem.module.scss";
import FavoritesContext from "../../favorite/favorites-context";
function BookItem(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        author: props.author,
        description: props.description,
        image_url: props.image_url,
        genre: props.genre,
        release_date: props.release_date,
      });
    }
  }

  return (
    <div className={classes.item}>
      <Card>
        <Link to={`/${props.id}`}>
          <div className={classes.image}>
            <img src={props.image_url} alt={props.title} />
          </div>
        </Link>
        <div className={classes.content}>
          <h4> {props.title}</h4>
          <p> {props.author}</p>
          <p>{props.release_date.split("T")[0]}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Usuń z ulubionych" : "Dodaj do ulubionych"}
          </button>
        </div>
      </Card>
    </div>
  );
}

export default BookItem;
