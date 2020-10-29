import React, { useEffect, useState } from "react";
import * as api from "./service/api";
import Member from "./components/Member";
import "./styles.css";

export default function App() {
    const [membersList, setMembersList] = useState([]);

    useEffect(() => {
        const loadAll = async() => {
            const members = await api.getMembersList();

            const membersInfo = [];
            for (const item of members) {
                membersInfo.push(await api.getUserInfo(item.login));
            }
            console.log(membersInfo)
            setMembersList(membersInfo);

        };

        loadAll();
    }, []);

    return <div>
		
		<h1 className="titulo">Membros da AWS</h1>
         
		{
			membersList.length > 0 ? 
				membersList.map((item, index) => {
					return <Member
					key = { index }
					username = { item.login }
					avatar = { item.avatar_url }
					name = { item.name }
					email = { item.email }
					bio = { item.bio }
					/>

				})
				:
				<p>Carregando...</p>
    	} 
		
	</div>
}