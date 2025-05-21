import { getGenres, getFilmsByGenre, getGenresThriller} from "../../api/api";
import style from "./Genres.module.scss";
import { useState, useEffect } from "react";
import {useParams} from 'react-router';
import Card from "../../components/Card/Card";

const colorsList = ["#FF4D4D", "#4D79FF", "#9D6EFF", "#FFB84D", "#FF4DA5","#4DC8FF"];

function Genres() {
  const {id} = useParams();

  const [listGenres, setListGenres] = useState([]);
  const [moviesGenres, setMoviesGenres] = useState([]);
  const [idGenre, setIdGenre] = useState(id)
  console.log('Смотреть сюда', idGenre)

  useEffect(() => {
    getGenresThriller().then((data) => {
      console.log(data);
      setMoviesGenres(data.items)
    });
    getGenres().then((data) => {
      console.log(data.genres);
      setListGenres(data.genres.filter((genre) => !genre.length));
    });


  }, []);  

  function handleGenreSelect(genreId) {
    getFilmsByGenre(genreId).then((data) => {
      console.log(data);
      setMoviesGenres(data.items);
      setIdGenre(genreId);
    });
  }

  return (
    <>
      <section>
        <div className="card">
          <ul className={style.list}>
            {listGenres.slice(0, 6).map((genre, i) => (
              <li
                className={
                  style.item + " " + (genre.id === idGenre ? style.active : '')
                }
                key={genre.id}
                onClick={() => handleGenreSelect(genre.id)}
              >
                {genre.genre}
                <div
                  className={style.line}
                  style={{
                    backgroundColor: colorsList[i % colorsList.length],
                  }}
                />
              </li>
            ))}
            {/* <li>{}</li> */}
            {/* <li>{}</li> */}
          </ul>
        </div>
        <div className={style.cardsList}>
          {moviesGenres.slice(0, 12).map((film) => (
            <Card film={film} key={film.kinopoiskId} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Genres;
