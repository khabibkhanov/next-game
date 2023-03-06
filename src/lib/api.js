import { marked } from "marked";
import { slugify } from "@utils/methods";
import { getGames, getGamePicture, getCategoriesReq, getGamesByCategoryReq, getGenresReq, getGamesByGenreReq } from "./request";

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
    const post = posts?.attributes

    let genres = post?.genres?.data?.map((genre) => genre) || [];
    const items = {};

    fields.forEach((field) => { 
        if (field === "game_id") {
            const id = posts.id;
            items[field] = id;
        }

        if (field === "reviews" && field !== undefined){

            const markedPost = marked(post["reviews"])
            items[fields] = markedPost
        }

        if (field === "timeToRead") {
            const readTime = readingTime(post["reviews"]);
            items[field] = readTime;
        }

        if (field === "genres" && field !== undefined) {
            items[field] = genres?.map((genres) => (
                {
                    genre_id: genres?.id,
                    title: genres?.attributes?.title,
                    slug: slugify(genres?.attributes?.title),
                }
            ));
        }
        if ( field !== "genres" &&
            typeof post[field] !== "undefined" 
        ) {
            items[field] = post[field];
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

    const game_pictures = games.reduce((acc, game) => {
        const picture = game?.game_picture?.data?.attributes?.formats?.thumbnail ? game?.game_picture?.data?.attributes?.formats?.thumbnail : game?.game_picture?.data?.attributes;
        const game_slug = game.slug
        if (picture !== undefined) {
          acc.push({picture, game_slug});
        }

        return acc;
    }, []);

    const hero_image_gen = function ([a,b,c, ...rest]) {
        if (rest.length === 0) return [[a,b,c].filter(x => x!==undefined)]
        return [[a,b,c]].concat(hero_image_gen(rest))
    }

    const images = hero_image_gen(game_pictures)

    return images
}

export async function getCategories (fields = [] ) {
    let categories = await getCategoriesReq()

    return categories.data
}

export async function getGamesByCategory(category, fields = [] ) {
    const categories = await getGamesByCategoryReq(category)


    const games = categories.data.attributes.games.data
        ?.sort((a, b) => b.id - a.id)
        ?.map((game) => getReviewsBySlug(game, fields))

    return games
}

export async function getGamesByGenre(genre, fields = [] ) {
    const genres = await getGamesByGenreReq(genre)


    const games = genres.data.attributes.games.data
        ?.sort((a, b) => b.id - a.id)
        ?.map((game) => getReviewsBySlug(game, fields))

    return games
}


export async function getGenres(fields = [] ) {
    let genres = await getGenresReq()

    return genres.data
}