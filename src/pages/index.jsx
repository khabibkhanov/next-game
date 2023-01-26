import PropTypes from "prop-types";
import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer";
import HeroArea from "@containers/hero/layout-10";
import { getHomeBannerPictures } from "src/lib/api";

export async function getServerSideProps() {
    const images = await getHomeBannerPictures();

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