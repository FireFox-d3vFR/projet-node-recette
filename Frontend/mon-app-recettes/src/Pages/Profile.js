import React from "react";

function Profile() {
    const membre = JSON.parse(localStorage.getItem("membre"));

    return (
        <div>
            <h1>Mon Profil</h1>
            {membre && (
                <div>
                    <p>Nom : {membre.firstName} {membre.lastName}</p>
                    <p>Email : {membre.email}</p>
                </div>
            )}
        </div>
    );
}

export default Profile;