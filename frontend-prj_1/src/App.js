import { Route, Switch } from "react-router-dom";

import AllBooksPage from "./pages/AllBooks";
import NewBookPage from "./pages/NewBook";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";
import Books from "./pages/Books";
import EditForm from "./pages/EditForm";

function App(props) {
  return (
    <Layout>
      <Switch>
        <Route path="/edit-book/:id">
          <EditForm />
        </Route>
        <Route path="/" exact>
          <AllBooksPage />
        </Route>
        <Route path="/new-book">
          <NewBookPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
        <Route path="/:quoteId">
          <Books />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
