import React from 'react'
import style from './Header.module.scss'
import Search from '../Search/Search'
import { Link } from 'react-router'

function Header () {
  return (
    <div className={style.header}>
        <ul className={style.list}>
            <li>LOGO</li>
            <li>Главная</li>
            <li>Жанры</li>
            <li>Новинки</li>
        </ul>
        <Search/>
        <div>
            <Link to='/login'>Sign in</Link>
        </div>
    </div>
  )
}

export default Header
