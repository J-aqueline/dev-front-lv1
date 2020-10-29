import React from "react";
import "./styles.css";

export default ({
    avatar,
    username,
    name,
    email,
    bio
}) => {

    return <div className="wraper">
        <div className="esquerda">
            <img src={avatar} alt={`Github avatar do usuário ${username}`} />
        </div>
        <div className="direita">
            <div className="top">

                <span>{username}</span>
                <span>{name}</span>
            </div>

            <div className="middle">
                {
                    email !== null && 
                    email !== "" &&
                    email !== undefined ?
                        <span>{email}</span>
                        :
                        <span>Email não informado</span>

                }
            </div>

            <div className="bottom">
                {
                    bio !== null &&
                    bio !== "" &&
                    bio !== undefined ?
                        <p>{bio}</p>
                        :
                        <p>Biografia não informada</p>
                }
                
            </div>

        </div>
    </div>
  }