import { useHistory, useParams } from "react-router-dom";

import NewBookForm from "../components/books/NewBookForm";

function EditForm(props) {
  const history = useHistory();
  const { id } = useParams();

  function addBookHandler(bookData) {
    fetch(`http://localhost:5000/api/book/${id}`, {
      method: "PUT",
      body: JSON.stringify(bookData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/");
    });
  }

  return (
    <section>
      <h1> Edytuj Książke </h1>
      <NewBookForm onAddBook={addBookHandler} />
    </section>
  );
}

export default EditForm;
