import axios from "axios"

const baseUrl = 'http://localhost:3000/api'

export async function getGames(fields) {
    let data
    fields = fields.join('%2C%20')

    await axios.get(`${baseUrl}/games?populate=${fields}`)
    .then(response => {
        data = response.data
    }) 
    return data
}

export async function getGamePicture() {
    let games

    await axios.get(`${baseUrl}/games?sort=id:desc&pagination%5BpageSize%5D=12&fields=title%2C%20slug&populate=game_picture`)
    .then(response => {
        games = response?.data
        games = games?.data?.map(post => post.attributes)
    }) 

    return games
}

export async function getOneGame(slug, fields) {
    fields = fields.join('%2C%20')

    let data = await axios.get(`${baseUrl}/games?filters%5Bslug%5D=${slug}&populate=${fields}`)
    .then(response => {
        return response.data
    })
    return data
}

export async function getGenresReq() {
    let data 
    await axios.get(`${baseUrl}/genres?populate=games`)
    .then(response => {
        data = response.data
    })

    return data;
}

export async function getGamesByGenreReq(id) {
    let data
    await axios.get(`${baseUrl}/genres/${id}?populate[games][populate]=%2A`)
    .then(response => {
        data = response.data
    })
    return data;
}

export async function getCategoriesReq(id) {
    let data 
    await axios.get(`${baseUrl}/categories?populate=games`)
    .then(response => {
        data = response.data
    })
    return data;
}

export async function getGamesByCategoryReq(id) {
    let data
    await axios.get(`${baseUrl}/categories/${id}?populate[games][populate]=%2A`)
    .then(response => {
        data = response.data
    })
    return data;
}

export async function getNews(fields) {
    let data
    fields = fields.join('%2C%20')

    await axios.get(`${baseUrl}/news?populate=${fields}`)
    .then(response => {
        data = response.data
    }) 
    return data
}