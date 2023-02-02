// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

const baseUrl = 'http://192.168.0.87:1337/api'

export default async function handler() {
    let games

    await axios.get(`${baseUrl}/names?pagination%5BpageSize%5D=9&fields=title&populate=game_picture`)
    .then(response => {
        games = response?.data
    }) 

    return games
}
