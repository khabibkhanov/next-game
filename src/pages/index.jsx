import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header";
import Footer from "@layout/footer";
import HeroArea from "@containers/hero";
import RelatedPostsArea from "@containers/related-posts";
import { getHomeBannerPictures } from "src/lib/api";

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
    let images = await getHomeBannerPictures();

    return {
        props: {
            images,
            className: "template-color-1",
        } 
    };
}

export default Home