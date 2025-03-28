import React, { useState } from 'react'
import style from './Search.module.scss'
import { useNavigate } from 'react-router'

function Search() {
  const [search, setSearch] = useState('')
  const navigate = useNavigate();

  function handleSearch() {
    navigate('/search/' + search)
  }

  return (
    <div>
        <input 
          className={style.search}
          type='text'
          placeholder='Поиск' 
          value={search}
          // "" -> event.target.value = "a" -> меняется стейт -> изменения в UI
          onChange={e => setSearch(e.target.value)}
        //   когда нужно связать инпут со стейтом - указываем value, и функцию 
        />
        <button className={style.button} onClick={handleSearch}>Search</button>
    </div>
  )
}

export default Search