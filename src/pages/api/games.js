// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

const baseUrl = 'https://game-backend-production.up.railway.app/api'

export default async function handler(res, req) {
  let games
  // res.setHeader('Cache-Control', 'no-cache', 'no-store', 'max-age=0', 'must-revalidate')

  await axios.get(`${baseUrl}/games?sort=id:desc&pagination%5BpageSize%5D=12&fields=title&populate=game_picture`)
  .then(response => {
      games = response?.data

      games = games?.data?.map(post => post.attributes).reverse();
      const game_pictures = games.reduce((acc, game) => {

          const picture = game?.game_picture?.data?.attributes?.formats?.thumbnail ? game?.game_picture?.data?.attributes?.formats?.thumbnail : game?.game_picture?.data?.attributes;
          if (picture !== undefined) {
            acc.push(picture);
          }
          return acc;
        }, []);
      
      const hero_image_gen = function ([a,b,c, ...rest]) {
          if (rest.length === 0) return [[a,b,c].filter(x => x!==undefined)]
          return [[a,b,c]].concat(hero_image_gen(rest))
      }
      
      games = hero_image_gen(game_pictures)
  }) 

  return games.reverse()
}
