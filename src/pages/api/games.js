// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

export default async function handler(req, res) {

    console.log('Entered the serverless function')

    return { "dummy": "data"}
}