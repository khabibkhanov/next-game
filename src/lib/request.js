import axios from "axios"

const baseUrl = 'http://192.168.0.87:1337/api'

export async function getGames(fields) {
    let data
    fields = fields.join('%2C%20')

    await axios.get(`${baseUrl}/names?populate=${fields}`)
    .then(response => {
        data = response.data
    }) 
    return data
}

export async function getGamePicture() {
    let games

    await axios.get(`${baseUrl}/names?pagination%5BpageSize%5D=9&fields=title&populate=game_picture`)
    .then(response => {
        games = response?.data
    }) 
    return games
}

export async function getOneGame(slug, fields) {
    fields = fields.join('%2C%20')

    let data = await axios.get(`${baseUrl}/names?filters%5Bslug%5D=${slug}&populate=${fields}`)
    .then(response => {
        return response.data
    })
    return data
}

// export async function getGenres() {
//     let data
//     await axios.get(`http://localhost:1337/api/genres?populate[0]=names`)
//     .then(response => {
//         data = response.data
//     }  )
//     return data;
// }

// export async function getMinRequirements () {
//     let data
//     await axios.get("http://localhost:1337/api/min-requirements?populate=%2A")
//     .then(response => {
//         data = response.data
//     })
//     return data;
// }

// export async function getLanguages () {
//     let data
//     await axios.get(`http://localhost:1337/api/languages?populate=%2A`)
//     .then(response => {
//         data = response.data
//     })
//     return data;
// }

// export async function getMinRequirements () {
//     let data
//     await axios.get(`http://localhost:1337/api/min-requirements?populate=%2A`)
//     .then(response => {
//         data = response.data
//     })
//     return data;
// }

export async function Register(data) { 
    data = {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }

    await axios.post(`http://localhost:1337/api/auth/local/register`, data)
    .then((response) => {
        console.log(response);
    });
}

