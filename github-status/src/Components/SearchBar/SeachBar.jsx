import React, { useContext, useState } from "react";
import { SearchContext } from "../../Context/SearchContext";
import style from "./SearchBar.module.css";

function SearchBar() {
  
  const [searchInfo, setSearchInfo] = useState("");
  const { setSearch } = useContext(SearchContext);
  
  const handleChange = (e) => {
    setSearchInfo(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(searchInfo);
  }
  return (
    <div className={style.container}>
      <input onChange={handleChange} type="text" placeholder="Busque um usuário" className={style.inputSearch} />
      <button onClick={handleSubmit} className={style.bntSearch}>Procurar</button>
    </div>
  );
}

export default SearchBar;