import React from "react";
import { ProfileLayer } from "./style";
import image from "../../assets/images/capy.jpg"

const Profile = () => {
    return(
        <ProfileLayer>
            <img src={image} alt="profile image"/>
        </ProfileLayer>
    );
}

export default Profile;