import PropTypes from "prop-types";
import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import HeroArea from "@containers/hero/layout-10";
import CategoryArea from "@containers/category/layout-01";
import LiveExploreArea from "@containers/live-explore/layout-01";
import ServiceArea from "@containers/services/layout-01";
import NewestItmesArea from "@containers/product/layout-04";
import TopSellerArea from "@containers/top-seller/layout-01";
import ExploreProductArea from "@containers/explore-product/layout-01";
import VideoArea from "@containers/video/layout-01";
import CollectionArea from "@containers/collection/layout-01";
import NewsletterArea from "@containers/newsletter/layout-01";
import { normalizedData } from "@utils/methods";

// Demo Data
import homepageData from "../data/homepages/home-10.json";
import productData from "../data/products.json";
import sellerData from "../data/sellers.json";
import collectionsData from "../data/collections.json";
import { getAllPosts } from "src/lib/api";

export async function getStaticProps() {
    const games = await getAllPosts([
        "title",
        "release_date",
        "slug",
        "reviews",
        "publisher",
        "developer",
        "age_restricts",
        "game_picture",
        "genres",
        "timeToRead",
    ]);

    const genres = games.map((blog) => [...blog.genres]);
    const recentPosts = games.reverse().slice(0, 9);

    const  game_picture = recentPosts.map(game => game.game_picture.data.reduce((acc, val) => {
        acc[val] = game.game_picture
    }))

    const iages = function ([a,b,c,...rest]) {
        if (rest.length === 0) return [[a,b,c].filter(x => x!==undefined)]
        return [[a,b,c]].concat(iages(rest))
    }

    const images = iages(game_picture)

    return { 
        props: { 
            games: games,
            recentPosts,
            genres,
            images,
            className: "template-color-1",
        } 
    };
}

const Home = ({
    games,
    recentPosts,
    genres,
    images
}) => {
    const content = normalizedData(homepageData?.content || []);
    const liveAuctionData = productData.filter(
        (prod) =>
            prod?.auction_date && new Date() <= new Date(prod?.auction_date)
    );
    const newestData = games
        .sort(
            (a, b) =>
                Number(new Date(b.createdAt)) -
                Number(new Date(a.createdAt))
        )
        .slice(0, 5);

    return (
        <Wrapper>
            <SEO pageTitle="Home" />
            <Header />
            <main id="main-content">
                <HeroArea data={games} game_picture={images} />
                <CategoryArea data={content["category-section"]} />
                <LiveExploreArea
                    data={{
                        ...content["live-explore-section"],
                        products: liveAuctionData,
                    }}
                />
                <ServiceArea data={content["service-section"]} />
                <NewestItmesArea
                    data={{
                        ...content["newest-section"],
                        products: newestData,
                    }}
                />
                <TopSellerArea
                    data={{
                        ...content["top-sller-section"],
                        sellers: sellerData,
                    }}
                />
                <ExploreProductArea
                    data={{
                        ...content["explore-product-section"],
                        products: productData,
                    }}
                />
                <VideoArea data={content["video-section"]} />
                <CollectionArea
                    data={{
                        ...content["collection-section"],
                        collections: collectionsData.slice(0, 4),
                    }}
                />
                <NewsletterArea data={content["newsletter-section"]} />
            </main>
            <Footer />
        </Wrapper>
    );
};

Home.propTypes = {
    games: PropTypes.arrayOf(PropTypes.shape({})),
    recentPosts: PropTypes.arrayOf(PropTypes.shape({})),
    images: PropTypes.arrayOf(PropTypes.shape({})),
    genres: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
};

export default Home