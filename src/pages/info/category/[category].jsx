import PropTypes from "prop-types";
import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header";
import Footer from "@layout/footer";
import Breadcrumb from "@components/breadcrumb";
import ReviewArea from "@containers/review/layout";
import ReviewSidebar from "@containers/review-sidebar";
import { getAllReviews, getCategories, getGamesByCategory } from "../../../lib/api";

const GamesList = ({ posts, title, categories, recentPosts, tags }) => (
    <Wrapper>
        <SEO pageTitle="Barcha Maqolalar" />
        <Header />
        <main id="main-content" className="mt--85">
            <div className="rn-blog-area rn-blog-details-default rn-section-gapTop">
                <div className="container">
                    <div className="row g-6">
                        <div className="col-xl-8 col-lg-8">
                            <ReviewArea
                                data={{ posts }}
                                rootPage="/info"
                            />
                        </div>
                        <div className="col-xl-4 col-lg-4 mt_md--40 mt_sm--40">
                            <ReviewSidebar
                                categories={categories}
                                recentPosts={recentPosts}
                                tags={tags}
                                rootPage="/info"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </Wrapper>
);

export async function getServerSideProps({ params }) {

    const { category } = params;

    const posts = await getGamesByCategory(category, [
        "reviews",
        "title",
        "release_date",
        "game_picture",
        "slug",
        "genres",
        "timeToRead",
        "id"
    ])

    const categories = await getCategories(['title'])

    return {
        props: {
            posts,
            categories,
            title: params.category,
            className: "template-color-1",
        },
    };
}

GamesList.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({})),
    // categories: PropTypes.arrayOf(PropTypes.shape({})),
    recentPosts: PropTypes.arrayOf(PropTypes.shape({})),
    tags: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
    title: PropTypes.string,
};

export default GamesList;
