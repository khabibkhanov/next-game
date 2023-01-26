import { marked } from "marked";
import { slugify } from "@utils/methods";
import { getGames, getOneGame, getGamePicture } from "./request";

export async function getPostSlugs() {
    let slugs = await getGames();
    slugs = slugs.data.map((slug) => slug.attributes["title"]);

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

export function getReviewsBySlug(posts, fields = []) {
    posts = posts.attributes
    let genres = posts?.genres?.data?.map((genre) => genre.attributes) || [];
    let languages = posts?.languages?.data?.map((language) => language.attributes) ?? [];
    const items = {};

    fields.forEach((field) => { 

        if (field === "reviews" && field !== undefined){
            items[field] = marked(posts["reviews"]);
        }

        if (field === "timeToRead") {
            const readTime = readingTime(posts["reviews"]);
            items[field] = readTime;
        }

        if ( field === "languages" && field !== undefined) {

            items[field] = languages.map((language) => (
                {
                    title: language?.title,
                    language: language?.title,
                    slug: slugify(language?.title),
                }
            ));
        }

        if (field === "genres" && field !== undefined) {
            items[field] = genres?.map((genres) => (
                {
                    title: genres?.genre_name,
                    slug: slugify(genres?.genre_name),
                }
            ));
        }

        if (
            field !== "genres" &&
            typeof posts[field] !== "undefined" 
        ) {
            items[field] = posts[field];
        }

    });

    return items;
}

export async function getAllReviews(fields = []) {
    const games = await getGames(fields);

    const posts = games?.data
        ?.sort((a, b) => b.id - a.id)
        ?.map((game) => getReviewsBySlug(game, fields))
    return posts;
}


export async function getHomeBannerPictures() {
    let games = await getGamePicture()

    games = games?.data?.map(post => post.attributes).reverse();

    const  game_pictures = games.map(game => game?.game_picture?.data.reduce((acc, val) => {
        acc[val] = game.game_picture.data[0].attributes.game_picture.data[0].attributes.formats.thumbnail
    }))

    const hero_image_gen = function ([a,b,c,...rest]) {
        if (rest.length === 0) return [[a,b,c].filter(x => x!==undefined)]
        return [[a,b,c]].concat(hero_image_gen(rest))
    }

    return hero_image_gen(game_pictures)
}

export async function getOneReview(slug, fields) {
    let games = await getOneGame(slug, fields);

    games = games?.data?.find(game => game?.attributes?.slug === slug)
    return games?.attributes
}