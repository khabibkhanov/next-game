// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

const baseUrl = 'http://192.168.0.87:1337/api'

export default async function handler(req, res) {
    let data
    await axios.get(`${baseUrl}/names?populate=%2A`)
    .then(response => {
        data = response.data
    }) 
    return data
}