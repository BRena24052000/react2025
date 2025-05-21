
import style from './Card.module.scss' 


function Card({film}) {
  const {
    nameRu,
    nameEn,
    posterUrl,
    coverUrl,
    ratingKinopoisk,
    year,
    shortDescription,
    taringAgeLimets,
    countries,
    genres,
  } = film;
  
  return ( 
      <div className={style.card}>
        <img src={posterUrl}/>
        <h2 className={style.title}>{nameRu}</h2>
        <p>{shortDescription}</p>
      </div> 
  );
}
 
export default Card;