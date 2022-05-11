import { useContext } from "react";
import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.scss";
import FavoritesContext from "../../favorite/favorites-context";

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>czytać.pl</div>
      <nav>
        <ul>
          <li>
            <Link to="/">KATALOG</Link>
          </li>
          <li>
            <Link to="/new-book">DODAJ KSIĄŻKĘ</Link>
          </li>
          <li>
            <Link to="/favorites">
              ULUBIONE
              <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
