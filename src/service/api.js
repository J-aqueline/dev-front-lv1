const API_URL_BASE = "https://api.github.com/";

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_URL_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

const getUserInfo = async (username) => {
    const info = await basicFetch(`users/${username}`);
    return info
}
    

const getMembersList = async () => {
    const info = await basicFetch(`orgs/aws/members`);
    return info
}

export{
    getUserInfo,
    getMembersList
}
    


