import PropTypes from "prop-types";
import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header";
import Footer from "@layout/footer";
import BlogArea from "@containers/review/layout";
import ReviewSidebar from "@containers/blog-sidebar";
import Pagination from "@components/pagination";
import { getAllReviews } from "../../lib/api";

const POSTS_PER_PAGE = 4;

const GamesList = ({
    posts,
    recentPosts,
    genres,
    pagiData,
}) => (
    <Wrapper>
        <SEO pageTitle="Barcha Maqolalar" />
        <Header />
        <main id="main-content">

            <div className="rn-blog-area rn-blog-details-default rn-section-gapTop">
                <div className="container">
                    <div className="row g-6">
                        <div className="col-xl-8 col-lg-8">
                            <BlogArea
                                data={{ posts }}
                                rootPage="/reviews"
                            />
                        </div>
                        <div className="col-xl-4 col-lg-4 mt_md--40 mt_sm--40">
                            <ReviewSidebar
                                recentPosts={recentPosts}
                                genres={genres}
                                rootPage="/reviews"
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
                                    rootPage="/reviews"
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
    const posts = await getAllReviews([
        "title",
        "reviews",
        "publisher",
        "age_restricts",
        "game_picture",
        "genres",
        "slug",
        "timeToRead",
    ]);

    const genres = posts.map((blog) => [...blog.genres]);
    const recentPosts = posts.reverse().slice(0, 4);


    return {
        props: {
            posts: posts.slice(0, POSTS_PER_PAGE),
            recentPosts,
            genres,
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
    pagiData: PropTypes.shape({
        currentPage: PropTypes.number.isRequired,
        numberOfPages: PropTypes.number.isRequired,
    }),
};

export default GamesList;
