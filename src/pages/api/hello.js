// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

export default function handler(req, res) {
    axios.get("http://localhost:1337/api/names")
    .then(response => {
        let dt = response.data;
        res.status(200).json({ games: dt });
    })
}