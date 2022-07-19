import React from "react";

function Profile() {
    return (
        <>
            <div className="profile">
                <div className="profile-img">
                    <img src="https://avatars.githubusercontent.com/u/66506721?v=4" alt="" />
                </div>
                <div className="profile-info">
                    <h1>Nome do Usuário</h1>
                    <p>Username: </p>
                    <p>Company: </p>
                    <p>Location: </p>
                    <p>Blog: </p>
                </div>
            </div>
        </>
    )
}


export default Profile;