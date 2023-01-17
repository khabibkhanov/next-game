import PropTypes from "prop-types";
import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer";
import Breadcrumb from "@components/breadcrumb";
import BlogArea from "@containers/blog/layout-03";
import BlogSidebar from "@containers/blog-sidebar";
import Pagination from "@components/pagination";
import { getAllPosts, getPostSlugs } from "../../../lib/api";

const POSTS_PER_PAGE = 4;

const GamesList = ({
    posts,
    recentPosts,
    genres,
    pagiData,
    page,
}) => (
    <Wrapper>
        <SEO pageTitle={`Barcha Maqolalar - Page: ${page}`} />
        <Header />
        <main id="main-content">
            <Breadcrumb
                pageTitle="Barcha Maqolalar"
                currentPage="Barcha Maqolalar"
            />
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
                            <BlogSidebar
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

export const getStaticPaths = async () => {
    const postSlugs = await getPostSlugs();
    const pages = Math.ceil(postSlugs?.length / POSTS_PER_PAGE)


    const paths = Array.from(Array(pages).keys()).map((page) => ({
        params: { page: String(page + 1) },
    }));

    return {
        paths,
        fallback: true,
    };
};

export async function getStaticProps({ params }) {
    const { page } = params;
    const posts = await getAllPosts([
        "reviews",
        "slug",
        "title",
        "release_date",
        "publisher",
        "developer",
        "age_restricts",
        "game_picture",
        "createdAt",
        "updatedAt",
        "purchase",
        "languages",
        "age_rating",
        "timeToRead",
        "publisher_notice",
        "features",
        "availables",
        "genres",
    ])

    const genres = posts.map((blog) => [...blog.genres]);
    const recentPosts = posts.slice(0, 4);

    return {
        props: {
            posts: posts.slice(
                (page - 1) * POSTS_PER_PAGE,
                page * POSTS_PER_PAGE
            ),
            recentPosts,
            genres,
            className: "template-color-1",
            page: Number(page),
            pagiData: {
                currentPage: Number(page),
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
    page: PropTypes.number,
};

export default GamesList;
