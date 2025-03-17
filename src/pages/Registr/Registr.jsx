import style from './Registr.module.scss';
import { useState } from "react";
import { Link } from "react-router";

function Registr() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

  return (
    <div className={style.registr}>
      <form className={style.registr__form}>
        <p className={style["registr__form-text"]}>Заполните форму</p>
        <input className={style["registr__form-input"]} type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input className={style["registr__form-input"]} type='email' placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input className={style["registr__form-input"]} type="password" placeholder="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
        <button className={style["registr__form-btn"]} type="submit">Регистрация</button>
        <p className={style.loader}></p>
        <p className={style["registr__form-text"]}>Уже есть аккаунт? <Link to="/login">Войти</Link></p>
      </form>
    </div>
  );
}


export default Registr