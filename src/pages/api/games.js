// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

const baseUrl = 'http://localhost:3001/api'

export default async function handler(res, req) {
  let games
  // res.setHeader('Cache-Control', 'no-cache', 'no-store', 'max-age=0', 'must-revalidate')

  await axios.get(`${baseUrl}/games?sort=id:desc&pagination%5BpageSize%5D=12&fields=title%2C%20slug&populate=game_picture`)
  .then(response => {
      games = response?.data
      games = games?.data?.map(post => post.attributes)
  }) 

  return games
}
