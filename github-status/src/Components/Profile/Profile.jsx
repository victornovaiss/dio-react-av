import React, { useContext } from "react";
import { SearchContext } from "../../Context/SearchContext";
import style from "./Profile.module.css";

function Profile() {

    const { user } = useContext(SearchContext);
    const userInfos = user.userInfos
    if (userInfos) {

        return (
            <div className={style.profile}>
                <div>
                    <img className={style.profileImg} src={userInfos.avatar_url} alt="" />
                </div>
                <div className="profile-info">
                    <h1>{userInfos.name ? userInfos.name : "Usuário sem nome!"}</h1>
                    <p><span className={style.textBold}>Username:</span> {userInfos.login}</p>
                    <p><span className={style.textBold}>Company:</span> {userInfos.company?userInfos.company:"Não informado."}</p>
                    <p><span className={style.textBold}>Location:</span> {userInfos.location}</p>
                    <p><span className={style.textBold}>Blog:</span> {userInfos.blog}</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className={style.profile}>
                <h1>Faça sua busca</h1>
            </div>

        )
    }
}


export default Profile;