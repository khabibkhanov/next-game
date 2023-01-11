import { join } from "path";
import { marked } from "marked";
import { slugify } from "@utils/methods";
import { getGames, getMinRequirements, getGenres, getLanguages } from "./request";

export async function getPostSlugs() {
    let slugs = await getGames();
    slugs = slugs.data.map((slug) => slug.attributes["slug"]);

    return slugs;
}

// export async function getLanguagesByGame(game) {
//     let languages = await getLanguages()
//     languages = languages.data.filter((language) => game.id === language.
// }

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
    let languages = posts?.languages?.data?.map((language) => language.attributes) ?? [];

    const realSlug = posts?.title?.replace(/\.md$/, "");
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
        // ?.sort((a, b) => b.id - a.id)
        ?.map((game) => getPostBySlug(game.attributes, fields))
        // sort posts by date in descending order
    // console.log("posts: ", posts);

    return posts;
}

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