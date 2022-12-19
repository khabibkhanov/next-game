import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { slugify } from "@utils/methods";
import axios from "axios";

const postsDirectory = join(process.cwd(), "src/data/posts");

export async function getGames() {
    let data
    await axios.get("http://localhost:1337/api/names?populate=%2A")
    .then(response => {
        data = response.data
    }) 
    return data;
}

export async function getGenres() {
    let data
    await axios.get("http://localhost:1337/api/genres?populate[0]=names")
    .then(response => {
        data = response.data
    }  )
    return data;
}

export async function getPostSlugs() {
    let slugs = await getGames();
    slugs = slugs.data.map((slug) => slug.attributes["slug"]);
    return slugs;
}

const wordsPerMinute = 225;

function isWord(str) {
    let alphaNumericFound = false;
    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i);
        if (
            (code > 47 && code < 58) || // numeric (0-9)
            (code > 64 && code < 91) || // upper alpha (A-Z)
            (code > 96 && code < 123)
        ) {
            // lower alpha (a-z)
            alphaNumericFound = true;
            return alphaNumericFound;
        }
    }
    return alphaNumericFound;
}

function wordCounter(input) {
    const text = input.split(/\s+/);
    let wordCount = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] !== " " && isWord(text[i])) {
            wordCount += 1;
        }
    }
    return wordCount;
}

export function readingTime(text) {
    return Math.ceil(wordCounter(text) / wordsPerMinute);
}

export function getPostBySlug(posts, fields = []) {
    let genres = posts?.genres?.data?.map((genre) => genre.attributes) || [];
    let game_picture = posts?.game_picture?.data?.map((picture) => picture.attributes) ?? [];
    let languages = posts?.languages?.data?.map((language) => language.attributes) ?? [];

    const realSlug = posts?.slug?.replace(/\.md$/, "");
    const items = {};

    // Ensure only the minimal needed data is exposed
    // fields is an array of strings    
    fields.forEach((field) => {
        if (field === "slug" && field !== undefined) {
            items[field] = realSlug;
        }

        if (field === "reviews" && field !== undefined){
            items[field] = marked(posts["reviews"]);
        }

        if (field === "timeToRead") {
            const readTime = readingTime(posts["reviews"]);
            items[field] = readTime;
        }

        // if languages is not undefined
        if ( field === "languages" && field !== undefined) {
            // langueges is an array of objects
            items[field] = languages.map((language) => (
                {
                    title: language?.title,
                    language: language?.title,
                    slug: slugify(language?.title),
                }
            ));
        } // end of language 

        if (field === "genres" && field !== undefined) {
            items[field] = genres?.map((genres) => (
                {
                    title: genres?.genre_name,
                    slug: slugify(genres?.genre_name),
                }
            ));
        }

        // if genres is not undefined
        if (
            field !== "genres" &&
            typeof posts[field] !== "undefined" 
        ) {
            items[field] = posts[field];
        } // end of if genres is not undefined

    }); // end of fields.forEach

    return items; // return items
} // end of getPostBySlug

export async function getAllPosts(fields = []) {
    const games = await getGames();
    // console.log('slugs: ',slugs);
    // console.log('games: ',games.data);

    const posts = games?.data
        ?.map((game) => getPostBySlug(game.attributes, fields));
        // sort posts by date in descending order
        // .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
}

// export function getPost (slug, fields = []) {
//     const posts = getAllPosts(fields);
//     const post = posts.find((post) => post.slug === slug);
//     console.log('post: ', post); 
//     return post;
// }

export function getPostBySlugcustom(slug, fields = []) {
    const posts = getAllPosts(fields);
    // console.log('posts: ', posts);
    return posts.filter((post) => post.slug === slug);
}

export function getPostsByCategory(cat, fields = []) {
    const posts = getAllPosts(fields);
    return posts.filter((post) => post.genres.genres_name === cat);
}

export function getPostsByTag(genres, fields = []) {
    const posts = getAllPosts(fields);
    return posts.filter((post) => post.tags.map((t) => t.slug).includes(genres));
}

// const productsDirectory = JSON.parse(
//     fs.readFileSync("src/data/products.json", "utf8")
// );

// export function getProductSlugs() {
//     return fs.readdirSync(productsDirectory);
// }

// export function getAllProducts() {
//     const slugs = getPostSlugs();
//     return slugs;
// }
