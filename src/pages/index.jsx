import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header";
import Footer from "@layout/footer";
import HeroArea from "@containers/hero";
import handler from "./api/games";
import RelatedPostsArea from "@containers/related-posts";

const Home = ({
    images
}) => {
    return (
        <Wrapper>
            <SEO pageTitle="Home" />
            <Header />
            <main id="main-content" className="mt--85">
                <HeroArea game_picture={images} />
                <RelatedPostsArea />
            </main>
            <Footer />
        </Wrapper>
    );
};

export async function getServerSideProps() {
    let games = await handler();
    let url = ''
    const game_pictures = games.reduce((acc, game) => {
        const picture = game?.game_picture?.data?.attributes?.formats?.thumbnail ? game?.game_picture?.data?.attributes?.formats?.thumbnail : game?.game_picture?.data?.attributes;
  
        if (picture !== undefined) {
          acc.push(picture);
        }
            url = game.slug
     
        return acc;
    }, []);
    
    const hero_image_gen = function ([a,b,c, ...rest]) {
        if (rest.length === 0) return [[a,b,c].filter(x => x!==undefined)]
        return [[a,b,c]].concat(hero_image_gen(rest))
    }

    const images = {images: hero_image_gen(game_pictures), url}

    return {
        props: {
            images,
            className: "template-color-1",
        } 
    };
}

export default Home