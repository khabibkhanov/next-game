import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header";
import Footer from "@layout/footer";
import HeroArea from "@containers/hero";
import handler from "./api/games";

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

export async function getStaticProps() {
    let images = await handler();

    return {
        props: {
            images,
            className: "template-color-1",
        } 
    };
}

export default Home