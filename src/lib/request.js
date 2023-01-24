import axios from "axios"

const baseUrl = 'http://192.168.0.87:1337/api'

export async function getGames() {
    let data
    await axios.get(`${baseUrl}/names?populate=%2A`)
    .then(response => {
        data = response.data
    }) 
    return data
}

export async function getOneGame(slug, fields) {
    // console.log(fields.join('%2C%20')); 

    fields = fields.join('%2C%20')
    const requestUrl = `${baseUrl}/names?filters%5Bslug%5D=${slug}&populate=${fields}`
    let data = await axios.get(requestUrl)
    .then(response => {
// `?populate=genres%2C%20languages%2C%20features&filters%5Bslug%5D=${slug}`
        // console.log(response.data);
        return response.data
    })
    return data
}

export async function getGenres() {
    let data
    await axios.get(`http://localhost:1337/api/genres?populate[0]=names`)
    .then(response => {
        data = response.data
    }  )
    return data;
}

// export async function getMinRequirements () {
//     let data
//     await axios.get("http://localhost:1337/api/min-requirements?populate=%2A")
//     .then(response => {
//         data = response.data
//     })
//     return data;
// }

export async function getLanguages () {
    let data
    await axios.get(`http://localhost:1337/api/languages?populate=%2A`)
    .then(response => {
        data = response.data
    })
    return data;
}

export async function getMinRequirements () {
    let data
    await axios.get(`http://localhost:1337/api/min-requirements?populate=%2A`)
    .then(response => {
        data = response.data
    })
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

    await axios.post(`http://localhost:1337/api/auth/local/register`, data)
    .then((response) => {
        console.log(response);
    });
}

