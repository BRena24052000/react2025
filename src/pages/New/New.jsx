import { useState, useEffect } from 'react';
import style from './New.module.scss';
import { getFilmsNew } from "../../api/api";
import Card from "../../components/Card/Card";


function New() {
    const [newFilms, setNewFilms] = useState([]);

    useEffect(() => {
        getFilmsNew().then((data)=> {
            setNewFilms(data.items)
        })
    },[])

  return (
    <>
    <section>
        <div>
          <h1 className={style.titleNew}>Новинки</h1>
            <ul className={style.list}>
                {newFilms.slice(0,6).map((film) => (
                  <Card film={film} key={film.kinopoiskId} />
                ))}
            </ul>
        </div>

    </section>

    </>
  )
}


export default New