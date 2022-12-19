import PropTypes from "prop-types";
import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import BlogArea from "@containers/blog/layout-03";
import BlogSidebar from "@containers/blog-sidebar";
import Pagination from "@components/pagination";
import { getAllPosts } from "../../lib/api";

const POSTS_PER_PAGE = 4;

const BlogSingleColumn = ({
    posts,
    recentPosts,
    genres,
    pagiData,
}) => (
    <Wrapper>
        <SEO pageTitle="Blog Single Column" />
        <Header />
        <main id="main-content">
            <Breadcrumb
                pageTitle="Blog Single Column"
                currentPage="Blog Single Column"
            />
            <div className="rn-blog-area rn-blog-details-default rn-section-gapTop">
                <div className="container">
                    <div className="row g-6">
                        <div className="col-xl-8 col-lg-8">
                            <BlogArea
                                data={{ posts }}
                                rootPage="/blog-single-column"
                            />
                        </div>
                        <div className="col-xl-4 col-lg-4 mt_md--40 mt_sm--40">
                            <BlogSidebar
                                recentPosts={recentPosts}
                                genres={genres}
                                rootPage="/blog-single-column"
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
                                    rootPage="/blog-single-column"
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
export async function getStaticProps() {
    const posts = await getAllPosts([
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

    const genres = posts.map((blog) => [...blog.genres]);
    const recentPosts = posts.slice(0, 4);

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

BlogSingleColumn.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({})),
    recentPosts: PropTypes.arrayOf(PropTypes.shape({})),
    genres: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
    pagiData: PropTypes.shape({
        currentPage: PropTypes.number.isRequired,
        numberOfPages: PropTypes.number.isRequired,
    }),
};

export default BlogSingleColumn;
