import { useHistory } from "react-router-dom";

import NewBookForm from "../components/books/NewBookForm";
const axios = require("axios");
function NewBookPage() {
  const history = useHistory();

  function addBookHandler(bookData) {
    axios.post("http://localhost:5000/api/book", bookData).then(() => {
      history.replace("/");
    });
  }

  return (
    <section>
      <h1>Dodaj Książkę</h1>
      <NewBookForm onAddBook={addBookHandler} />
    </section>
  );
}

export default NewBookPage;
