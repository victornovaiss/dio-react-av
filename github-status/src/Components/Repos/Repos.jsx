import React, { useContext } from "react";
import { SearchContext } from "../../Context/SearchContext";
import style from "./Repos.module.css";
function Repos() {

    const { user } = useContext(SearchContext);
    const repos = user.reposResult;

    if (repos===undefined) {
        return <div>Sem repositório</div>
    } else {
        return (
            <div className={style.repos}>
                {repos.map(repo => {
                    return (
                        <div key={repo.id} className={style.repo}>
                            <h2>{repo.name}</h2>
                            <p><a href={repo.html_url} target="_blank">{repo.html_url}</a></p>
                        </div>
                    )
                }
                )}
            </div>
        )


    }
}

export default Repos;