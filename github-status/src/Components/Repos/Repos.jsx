import React from "react";
import Stared from "./Stared/Stared";
import UserRepos from "./UserRepos/UserRepos";

function Repos() {
    return (
        <>
            <UserRepos/>
            <Stared />
        </>
    );
}

export default Repos;