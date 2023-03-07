import PropTypes from "prop-types";
import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header";
import Footer from "@layout/footer";
import ReviewArea from "@containers/review/layout";
import Breadcrumb from "@components/breadcrumb"
import ReviewSidebar from "@containers/review-sidebar";
import Pagination from "@components/pagination";
import { getAllReviews, getCategories } from "../../lib/api";

const POSTS_PER_PAGE = 4;

const GamesList = ({
    posts,
    recentPosts,
    genres,
    categories,
    pagiData,
}) => (
    <Wrapper>
        <SEO pageTitle="Barcha Maqolalar" />
        <Header />
        <main id="main-content" className="mt--85">
            <Breadcrumb
                pageTitle="Maqolalar"
                currentPage="Maqolalar"
            />

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
                                recentPosts={recentPosts}
                                categories={categories}
                                genres={genres}
                                rootPage="/info"
                            />
                            
                        </div>
                    </div>
                    <div className="row">
                        <div
                            className="col-lg-8 sal-animate"
                            data-sal="slide-up"
                            data-sal-delay="550"
                            data-sal-duration="800"
                        >
                            {pagiData?.numberOfPages > 1 && (
                                <Pagination
                                    currentPage={pagiData.currentPage}
                                    numberOfPages={pagiData.numberOfPages}
                                    rootPage="/info"
                                    className="single-column-blog"
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </Wrapper>
);

export async function getServerSideProps() {
    const fields = [
        "title",
        "reviews",
        "game_picture",
        "genres",
        "slug",
        "category",
        "timeToRead",
    ]

    const posts = await getAllReviews(fields);
    const categories = await getCategories(['title'])
    const genres = posts.map((post) => [...post.genres]);
    const recentPosts = posts.slice(0, 4);

    return {
        props: {
            posts: posts.slice(0, POSTS_PER_PAGE),
            recentPosts,
            genres,
            categories,
            className: "template-color-1",
            pagiData: {
                currentPage: 1,
                numberOfPages: Math.ceil(posts.length / POSTS_PER_PAGE),
            },
        },
    };
}

GamesList.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({})),
    recentPosts: PropTypes.arrayOf(PropTypes.shape({})),
    genres: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
    categories: PropTypes.arrayOf(PropTypes.shape({})),
    pagiData: PropTypes.shape({
        currentPage: PropTypes.number.isRequired,
        numberOfPages: PropTypes.number.isRequired,
    }),
};

export default GamesList;
