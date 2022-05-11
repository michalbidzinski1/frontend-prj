import classes from "./HighligtedBook.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import BookDetail from "../ui/BookDetail";
const axios = require("axios");
const HighlightedBook = (props) => {
  const removeHanlder = () => {
    axios.delete(`http://localhost:5000/api/book/${props.id}`);
    alert("Książka usunięta");
  };
  const [score, setScore] = useState({});
  useEffect(() => {
    getBookData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getBookData = () => {
    axios
      .get(`http://localhost:5000/api/book/${props.id}`)
      .then((response) => setScore({ ...response.data }));
  };

  const ratingHandler5 = async () => {
    await axios.post(`http://localhost:5000/api/book/${props.id}/rate`, {
      score: 5,
    });
    getBookData();
  };
  const ratingHandler4 = async () => {
    await axios.post(`http://localhost:5000/api/book/${props.id}/rate`, {
      score: 4,
    });
    getBookData();
  };
  const ratingHandler3 = async () => {
    await axios.post(`http://localhost:5000/api/book/${props.id}/rate`, {
      score: 3,
    });
    getBookData();
  };
  const ratingHandler2 = async () => {
    await axios.post(`http://localhost:5000/api/book/${props.id}/rate`, {
      score: 2,
    });
    getBookData();
  };
  const ratingHandler1 = async () => {
    await axios.post(`http://localhost:5000/api/book/${props.id}/rate`, {
      score: 1,
    });
    getBookData();
  };
  return (
    <BookDetail>
      <div className={classes.item}>
        <div className={classes.image}>
          <img src={props.image_url} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3 className={classes.title}> {props.title}</h3>
          <h4> {props.author}</h4>
          <h4> {props.release_date.split("T")[0]}</h4>
          <h4> {props.genre}</h4>
          <h4> Ocena: {score.rating?.toFixed(2)} / 5</h4>
          <button onClick={ratingHandler5}>Oceń na 5</button>
          <button onClick={ratingHandler4}>Oceń na 4</button>
          <button onClick={ratingHandler3}>Oceń na 3</button>
          <button onClick={ratingHandler2}>Oceń na 2</button>
          <button onClick={ratingHandler1}>Oceń na 1 </button>
          <button onClick={removeHanlder}>Usuń</button>
          <Link to={`/edit-book/${props.id}`}>
            <button>Edytuj</button>
          </Link>
        </div>
        <div className={classes.actions}>
          <p className={classes.opis}>Opis: {props.description}</p>
        </div>
      </div>
    </BookDetail>
  );
};
export default HighlightedBook;
