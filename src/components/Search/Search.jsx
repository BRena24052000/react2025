import React, { useState } from 'react'
import style from './Search.module.scss'
import { useNavigate } from 'react-router'

function Search() {
  const [search, setSearch] = useState('')
  const navigate = useNavigate();

  function handleSearch() {
    navigate('/search/' + search)
  }

  function handleChange(e) {
    if (e.key === 'Enter') {
      handleSearch()
      return;
    }

    setSearch(e.target.value);

  }

  return (
    <div className={style.container}>
      <input
        className={style.search}
        type="text"
        placeholder="Поиск"
        value={search}
  
        onChange={handleChange}
        onBlur={handleSearch}
        
      />

    </div>
  );
}

export default Search