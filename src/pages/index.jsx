import PropTypes from "prop-types";
import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header";
import Footer from "@layout/footer";
import HeroArea from "@containers/hero";
import handler from "./api/games";

export async function getServerSideProps() {
    let games = await handler();
    games = games?.data?.map(post => post.attributes).reverse();

    const  game_pictures = games.map(game => game?.game_picture?.data.reduce((acc, val) => {
        acc[val] = game.game_picture.data[0].attributes.game_picture.data[0].attributes.formats.thumbnail
    }))

    const hero_image_gen = function ([a,b,c,...rest]) {
        if (rest.length === 0) return [[a,b,c].filter(x => x!==undefined)]
        return [[a,b,c]].concat(hero_image_gen(rest))
    }

    const images = hero_image_gen(game_pictures)

    return {
        props: {
            images,
            className: "template-color-1",
        } 
    };
}

const Home = ({
    images
}) => {
    return (
        <Wrapper>
            <SEO pageTitle="Home" />
            <Header />
            <main id="main-content">
                <HeroArea game_picture={images} />
            </main>
            <Footer />
        </Wrapper>
    );
};

Home.propTypes = {
    images: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
};

export default Home