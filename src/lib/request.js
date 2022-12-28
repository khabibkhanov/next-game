import axios from "axios"

export async function getGames() {
    let data
    await axios.get("http://localhost:1337/api/names?populate=%2A")
    .then(response => {
        data = response.data
    }) 
    return data
}

export async function getGenres() {
    let data
    await axios.get("http://localhost:1337/api/genres?populate[0]=names")
    .then(response => {
        data = response.data
    }  )
    return data;
}

export async function Register(data) { 
    data = {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }

    await axios.post("http://localhost:1337/api/auth/local/register", data)
    .then((response) => {
        console.log(response);
    });
}

