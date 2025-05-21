import { Link } from "react-router";
import style from "./Home.module.scss";
import Card from "../../components/Card/Card";
import { useState, useEffect } from "react";
import { getPopularMovies, getReleasesMovies } from "../../api/api";

function Home() {
  const [popularFilms, setPopularFilms] = useState([]);
  const [releasesFilms, setReleasesFilms] = useState([]);

  useEffect(() => {
    getPopularMovies().then((data) => {
      data.items && setPopularFilms(data.items);
    });

    getReleasesMovies().then((data) => {
      console.log("data", data);
      data.items && setReleasesFilms(data.items);
    });
  }, []);

  console.log("popularFilms", popularFilms);

  return (
    <div className="home">
      <h1 className={style.titleHome}>Популярные фильмы</h1>
      <section className={style.cards}>
        <div className={style.popular}>
          {popularFilms.slice(0, 4).map((film) => (
            <Card key={film.kinopoiskId} film={film} />
          ))}
          {/* <Card /> */}
        </div>

        <h2 className={style.titleHome}>Кино-релизы</h2>
        {/* () => (data) */}
        {/* () => { return data } */}
        <div className={style.releases}>
          {releasesFilms.slice(0, 4).map((film) => (
            <Card key={film.kinopoiskId} film={film} />
          ))}
        </div>

        <div class={style.recommendationBox}>
          <div class="text-content">
            <h3>
              Получить персональные
              <br />
              рекомендации
            </h3>
            <p>
              Зарегистрируйся сейчас, чтобы получать индивидуальные рекомендации
              фильмов, основанные на твоих предпочтениях и истории просмотров.
            </p>
          </div>
          <button class={style.joinBtn}>Присоединиться</button>
        </div>
      </section>
    </div>
  );
}

export default Home;
