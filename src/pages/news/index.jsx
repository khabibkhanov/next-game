import PropTypes from "prop-types";
import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header";
import Footer from "@layout/footer";
import Breadcrumb from "@components/breadcrumb"
import ReviewSidebar from "@containers/review-sidebar";
import Pagination from "@components/pagination";
import { getAllNews, getAllReviews, getCategories } from "../../lib/api";
import NewsArea from "@containers/news/area";

const POSTS_PER_PAGE = 5;

const GamesList = ({
    posts,
    recentPosts,
    pagiData,
}) => (
    <Wrapper>
        <SEO pageTitle="Barcha Yangiliklar" />
        <Header />
        <main id="main-content" className="mt--85">
            <Breadcrumb
                pageTitle="Yangiliklar"
                currentPage="Yangiliklar"
            />
            <div className="rn-blog-area rn-blog-details-default rn-section-gapTop">
                <div className="container">
                    <div className="row g-6">
                        <div className="col-xl-8 col-lg-8">
                            <NewsArea
                                data={{ posts }}
                                rootPage="/news"
                            />
                        </div>
                        <div className="col-xl-4 col-lg-4 mt_md--40 mt_sm--40">
                            <ReviewSidebar
                                recentPosts={recentPosts}
                                recentTitle="So'nggi yangiliklar"
                                rootPage="/news"
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
                                    rootPage="/news"
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
        "news_text",
        "game_picture",
        "genres",
        "slug",
        "timeToRead",
        'createdAt',
    ]

    const posts = await getAllNews(fields);
    const genres = posts.map((post) => [...post.genres]);
    const recentPosts = posts.slice(0, 8);

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
